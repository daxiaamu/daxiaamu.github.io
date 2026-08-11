import contributions from "./github-contributions.generated.json";

type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

type ContributionWeek = {
  days: ContributionDay[];
};

const data = contributions as {
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  weeks: ContributionWeek[];
};

export function GithubContributions() {
  return (
    <section className="contributions-section" aria-labelledby="contributions-title">
      <div className="contributions-heading">
        <div>
          <p className="eyebrow">GITHUB CONTRIBUTIONS</p>
          <h2 id="contributions-title">持续创造</h2>
        </div>
        <a href="https://github.com/daxiaamu" target="_blank" rel="noreferrer">
          查看 GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>

      <div className="contribution-stats">
        <div><strong>{data.totalContributions.toLocaleString("en-US")}</strong><span>近一年贡献</span></div>
        <div><strong>{data.currentStreak}</strong><span>当前连续天数</span></div>
        <div><strong>{data.longestStreak}</strong><span>最长连续天数</span></div>
      </div>

      <div className="contribution-panel">
        <div className="contribution-scroll">
          <div className="contribution-grid" role="img" aria-label={`近一年共 ${data.totalContributions} 次 GitHub 贡献`}>
            {data.weeks.map((week, weekIndex) => (
              <div className="contribution-week" key={weekIndex}>
                {week.days.map((day) => (
                  <span
                    className={`contribution-day level-${day.level}`}
                    title={`${day.date}：${day.count} 次贡献`}
                    key={day.date}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="contribution-legend" aria-hidden="true">
          <span>少</span>
          {[0, 1, 2, 3, 4].map((level) => <i className={`contribution-day level-${level}`} key={level} />)}
          <span>多</span>
        </div>
      </div>
    </section>
  );
}
