"use client";

import { useEffect, useRef, useState } from "react";

const restingValues = {
  "--hero-bg-x": "0px",
  "--hero-bg-y": "0px",
  "--hero-card-x": "0px",
  "--hero-card-y": "0px",
  "--hero-card-rx": "0deg",
  "--hero-card-ry": "0deg",
  "--hero-orbit-one-x": "0px",
  "--hero-orbit-one-y": "0px",
  "--hero-orbit-two-x": "0px",
  "--hero-orbit-two-y": "0px",
  "--hero-label-one-x": "0px",
  "--hero-label-one-y": "0px",
  "--hero-label-two-x": "0px",
  "--hero-label-two-y": "0px",
};

export function InteractiveHeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [terminalText, setTerminalText] = useState("");

  useEffect(() => () => {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const reducedMotionTimer = setTimeout(() => setTerminalText("ready to ship"), 0);
      return () => clearTimeout(reducedMotionTimer);
    }

    const typo = "ready to shit";
    const sequence = [
      { text: "", duration: 420 },
      ...Array.from(typo, (_, index) => ({ text: typo.slice(0, index + 1), duration: 82 })),
      { text: typo, duration: 1150 },
      { text: "ready to shi", duration: 380 },
      { text: "ready to ship", duration: 1900 },
    ];
    let step = 0;
    let timer: ReturnType<typeof setTimeout>;

    const play = () => {
      const current = sequence[step];
      setTerminalText(current.text);
      timer = setTimeout(() => {
        step = (step + 1) % sequence.length;
        play();
      }, current.duration);
    };

    play();
    return () => clearTimeout(timer);
  }, []);

  function setValues(values: Record<string, string>) {
    const visual = visualRef.current;
    if (!visual) return;
    for (const [property, value] of Object.entries(values)) {
      visual.style.setProperty(property, value);
    }
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const visual = visualRef.current;
    if (!visual) return;
    const bounds = visual.getBoundingClientRect();
    const x = Math.max(-1, Math.min(1, ((event.clientX - bounds.left) / bounds.width - 0.5) * 2));
    const y = Math.max(-1, Math.min(1, ((event.clientY - bounds.top) / bounds.height - 0.5) * 2));

    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => setValues({
      "--hero-bg-x": `${x * 5}px`,
      "--hero-bg-y": `${y * 5}px`,
      "--hero-card-x": `${x * 9}px`,
      "--hero-card-y": `${y * 7}px`,
      "--hero-card-rx": `${-y * 4}deg`,
      "--hero-card-ry": `${x * 5}deg`,
      "--hero-orbit-one-x": `${-x * 8}px`,
      "--hero-orbit-one-y": `${-y * 6}px`,
      "--hero-orbit-two-x": `${x * 7}px`,
      "--hero-orbit-two-y": `${y * 9}px`,
      "--hero-label-one-x": `${x * 14}px`,
      "--hero-label-one-y": `${y * 11}px`,
      "--hero-label-two-x": `${-x * 12}px`,
      "--hero-label-two-y": `${-y * 9}px`,
    }));
  }

  function handlePointerLeave() {
    if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => setValues(restingValues));
  }

  return (
    <div
      ref={visualRef}
      className="hero-visual"
      aria-hidden="true"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="code-card">
        <div className="code-card-top"><i /><i /><i /><span>build.log</span></div>
        <div className="code-line"><b>01</b><span><em>const</em> idea = <strong>&quot;真实需求&quot;</strong>;</span></div>
        <div className="code-line"><b>02</b><span><em>while</em> (canImprove) {'{'}</span></div>
        <div className="code-line indent"><b>03</b><span>product.<u>iterate</u>();</span></div>
        <div className="code-line"><b>04</b><span>{'}'}</span></div>
        <div className="code-result"><span>✓</span><span className="terminal-text">{terminalText}</span><i className="terminal-cursor" /></div>
      </div>
      <span className="float-label label-android">ANDROID</span>
      <span className="float-label label-detail">DETAILS MATTER</span>
    </div>
  );
}
