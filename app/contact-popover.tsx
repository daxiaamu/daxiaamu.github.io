"use client";

import { useEffect, useRef, useState } from "react";

export function ContactPopover({ email }: { email: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const contacts = [
    { label: "邮箱", detail: email, mark: "@", href: `mailto:${email}` },
    { label: "哔哩哔哩", detail: "大侠阿木", mark: "B", href: "https://space.bilibili.com/317357319" },
    { label: "微博", detail: "@daxiaamu", mark: "W", href: "https://weibo.com/daxiaamu" },
    { label: "酷安", detail: "大侠阿木", mark: "C", href: "https://coolapk.com/u/%E5%A4%A7%E4%BE%A0%E9%98%BF%E6%9C%A8" },
  ];

  return (
    <div className="contact-popover" ref={rootRef}>
      <button
        className="button button-secondary"
        type="button"
        aria-expanded={isOpen}
        aria-controls="contact-options"
        onClick={() => setIsOpen((current) => !current)}
      >
        聊聊你的想法 <span aria-hidden="true">{isOpen ? "×" : "↗"}</span>
      </button>
      {isOpen ? (
        <div className="contact-menu-panel" id="contact-options" aria-label="选择联系方式">
          {contacts.map((contact) => (
            <a
              className="contact-option"
              href={contact.href}
              target={contact.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={contact.href.startsWith("mailto:") ? undefined : "noreferrer"}
              key={contact.label}
              onClick={() => setIsOpen(false)}
            >
              <span className="contact-mark" aria-hidden="true">{contact.mark}</span>
              <span><strong>{contact.label}</strong><small>{contact.detail}</small></span>
              <i aria-hidden="true">↗</i>
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
