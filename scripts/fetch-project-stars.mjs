import { readFile, writeFile } from "node:fs/promises";

const owner = "daxiaamu";
const repositoriesUrl = new URL("../app/project-repositories.json", import.meta.url);
const starsUrl = new URL("../app/project-stars.generated.json", import.meta.url);
const repositories = JSON.parse(await readFile(repositoriesUrl, "utf8"));

let previousStars = {};
try {
  previousStars = JSON.parse(await readFile(starsUrl, "utf8"));
} catch {
  // The first build has no cached Star data yet.
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
    if (!Number.isInteger(data.stargazers_count)) {
      throw new Error(`${repository}: stargazers_count is missing`);
    }

    return [repository, data.stargazers_count];
  })
);

const stars = { ...previousStars };
for (const result of results) {
  if (result.status === "fulfilled") {
    const [repository, starCount] = result.value;
    stars[repository] = starCount;
  } else {
    console.warn(`Keeping cached Star count: ${result.reason.message}`);
  }
}

const orderedStars = Object.fromEntries(
  repositories.map((repository) => [repository, stars[repository] ?? 0])
);

await writeFile(starsUrl, `${JSON.stringify(orderedStars, null, 2)}\n`, "utf8");
console.log(`Updated Stars for ${results.filter((result) => result.status === "fulfilled").length}/${repositories.length} projects.`);
