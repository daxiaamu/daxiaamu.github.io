CREATE TABLE IF NOT EXISTS site_counters (
  key TEXT PRIMARY KEY,
  value INTEGER NOT NULL DEFAULT 0 CHECK (value >= 0),
  updated_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT OR IGNORE INTO site_counters (key, value)
VALUES ('homepage', 0);
