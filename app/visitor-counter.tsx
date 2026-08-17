"use client";

import { useEffect, useState } from "react";

const counterEndpoint = "https://daxiaamu-visitor-counter.daxiaamu.workers.dev/api/visit";
const sessionKey = "daxiaamu-homepage-visit-counted";

type CounterResponse = {
  count?: number;
  counted?: boolean;
};

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const alreadyCounted = window.sessionStorage.getItem(sessionKey) === "true";
    const method = alreadyCounted ? "GET" : "POST";
    const controller = new AbortController();

    fetch(counterEndpoint, {
      method,
      cache: "no-store",
      credentials: "omit",
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) throw new Error(`Counter returned ${response.status}`);
        return response.json() as Promise<CounterResponse>;
      })
      .then((data) => {
        if (typeof data.count !== "number") return;
        setCount(data.count);
        if (method === "POST" && data.counted !== false) {
          window.sessionStorage.setItem(sessionKey, "true");
        }
      })
      .catch((error: unknown) => {
        if (error instanceof DOMException && error.name === "AbortError") return;
        console.warn("Visitor counter is temporarily unavailable.");
      });

    return () => controller.abort();
  }, []);

  return (
    <span className="visitor-counter" aria-live="polite">
      累计访问 <strong>{count === null ? "—" : count.toLocaleString("zh-CN")}</strong> 次
    </span>
  );
}
