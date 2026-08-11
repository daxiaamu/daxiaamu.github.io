import { readFile, writeFile } from "node:fs/promises";

const login = "daxiaamu";
const outputUrl = new URL("../app/github-contributions.generated.json", import.meta.url);
const token = process.env.GITHUB_TOKEN;
const levelMap = { NONE: 0, FIRST_QUARTILE: 1, SECOND_QUARTILE: 2, THIRD_QUARTILE: 3, FOURTH_QUARTILE: 4 };

let previousData;
try {
  previousData = JSON.parse(await readFile(outputUrl, "utf8"));
} catch {
  previousData = undefined;
}

function calculateStreaks(days) {
  let longestStreak = 0;
  let runningStreak = 0;
  for (const day of days) {
    if (day.count > 0) {
      runningStreak += 1;
      longestStreak = Math.max(longestStreak, runningStreak);
    } else {
      runningStreak = 0;
    }
  }

  let currentStreak = 0;
  let index = days.length - 1;
  if (index >= 0 && days[index].count === 0) index -= 1;
  while (index >= 0 && days[index].count > 0) {
    currentStreak += 1;
    index -= 1;
  }

  return { currentStreak, longestStreak };
}

if (!token) {
  console.warn("GITHUB_TOKEN is unavailable; keeping cached Contributions data.");
} else {
  try {
    const query = `query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          restrictedContributionsCount
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays { date contributionCount contributionLevel }
            }
          }
        }
      }
    }`;
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "User-Agent": "daxiaamu-github-pages-build",
      },
      body: JSON.stringify({ query, variables: { login } }),
    });
    const payload = await response.json();
    if (!response.ok || payload.errors?.length) {
      throw new Error(payload.errors?.[0]?.message ?? `GitHub GraphQL returned ${response.status}`);
    }

    const collection = payload.data?.user?.contributionsCollection;
    const calendar = collection?.contributionCalendar;
    if (!calendar?.weeks) throw new Error("Contribution calendar is missing");

    const weeks = calendar.weeks.map((week) => ({
      days: week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: levelMap[day.contributionLevel] ?? 0,
      })),
    }));
    const days = weeks.flatMap((week) => week.days);
    const streaks = calculateStreaks(days);
    const data = {
      login,
      totalContributions: calendar.totalContributions,
      restrictedContributions: collection.restrictedContributionsCount,
      ...streaks,
      weeks,
      updatedAt: new Date().toISOString(),
    };

    await writeFile(outputUrl, `${JSON.stringify(data, null, 2)}\n`, "utf8");
    console.log(`Updated ${data.totalContributions} Contributions across ${days.length} days.`);
  } catch (error) {
    if (!previousData) throw error;
    console.warn(`Keeping cached Contributions data: ${error.message}`);
  }
}
