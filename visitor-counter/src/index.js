const ALLOWED_ORIGINS = new Set([
  "https://daxiaamu.github.io",
]);

const BOT_USER_AGENT = /bot|crawler|spider|slurp|headless|preview|facebookexternalhit|whatsapp|telegrambot|discordbot/i;

function corsHeaders(origin) {
  const headers = {
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store",
    "Content-Type": "application/json; charset=utf-8",
    "Vary": "Origin",
  };

  if (ALLOWED_ORIGINS.has(origin)) {
    headers["Access-Control-Allow-Origin"] = origin;
  }

  return headers;
}

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: corsHeaders(origin),
  });
}

async function currentCount(db) {
  const row = await db.prepare(
    "SELECT value FROM site_counters WHERE key = ?"
  ).bind("homepage").first();

  return Number(row?.value ?? 0);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const origin = request.headers.get("Origin") ?? "";

    if (url.pathname !== "/api/visit") {
      return json({ error: "Not found" }, 404, origin);
    }

    if (request.method === "OPTIONS") {
      if (!ALLOWED_ORIGINS.has(origin)) {
        return json({ error: "Origin not allowed" }, 403, origin);
      }
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (origin && !ALLOWED_ORIGINS.has(origin)) {
      return json({ error: "Origin not allowed" }, 403, origin);
    }

    if (request.method === "GET") {
      return json({ count: await currentCount(env.DB) }, 200, origin);
    }

    if (request.method !== "POST") {
      return json({ error: "Method not allowed" }, 405, origin);
    }

    if (!ALLOWED_ORIGINS.has(origin)) {
      return json({ error: "Origin not allowed" }, 403, origin);
    }

    const userAgent = request.headers.get("User-Agent") ?? "";
    if (!userAgent || BOT_USER_AGENT.test(userAgent)) {
      return json({ count: await currentCount(env.DB), counted: false }, 200, origin);
    }

    const row = await env.DB.prepare(`
      INSERT INTO site_counters (key, value, updated_at)
      VALUES (?, 1, CURRENT_TIMESTAMP)
      ON CONFLICT(key) DO UPDATE SET
        value = value + 1,
        updated_at = CURRENT_TIMESTAMP
      RETURNING value
    `).bind("homepage").first();

    return json({ count: Number(row?.value ?? 0), counted: true }, 200, origin);
  },
};
