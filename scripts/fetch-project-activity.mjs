import { readFile, writeFile } from "node:fs/promises";

const owner = "daxiaamu";
const repositoriesUrl = new URL("../app/project-repositories.json", import.meta.url);
const activityUrl = new URL("../app/project-activity.generated.json", import.meta.url);
const repositories = JSON.parse(await readFile(repositoriesUrl, "utf8"));

let previousActivity = {};
try {
  previousActivity = JSON.parse(await readFile(activityUrl, "utf8"));
} catch {
  // The first build has no cached activity data yet.
}

const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "daxiaamu-github-pages-build",
  "X-GitHub-Api-Version": "2022-11-28",
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const results = await Promise.allSettled(
  repositories.map(async (repository) => {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repository}`, { headers });
    if (!response.ok) {
      throw new Error(`${repository}: GitHub API returned ${response.status}`);
    }

    const data = await response.json();
    if (typeof data.pushed_at !== "string") {
      throw new Error(`${repository}: pushed_at is missing`);
    }

    return [repository, data.pushed_at];
  })
);

const activity = { ...previousActivity };
for (const result of results) {
  if (result.status === "fulfilled") {
    const [repository, pushedAt] = result.value;
    activity[repository] = pushedAt;
  } else {
    console.warn(`Keeping cached activity time: ${result.reason.message}`);
  }
}

const orderedActivity = Object.fromEntries(
  repositories.map((repository) => [repository, activity[repository] ?? ""])
);

await writeFile(activityUrl, `${JSON.stringify(orderedActivity, null, 2)}\n`, "utf8");
console.log(`Updated activity for ${results.filter((result) => result.status === "fulfilled").length}/${repositories.length} projects.`);
