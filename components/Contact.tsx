"use client";

import { useState } from "react";
import GridBackground from "./GridBackground";
import Reveal from "./Reveal";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact-bg">
      <GridBackground />
      <div className="wrap">
        <div className="contact-inner">
          <Reveal as="div">
            <div className="eyebrow">
              <span className="bracket">|</span>Contact
              <span className="bracket">|</span>
            </div>
            <h2>Let&apos;s build something that works better.</h2>
            <p className="hero-sub">
              Tell us where the friction is. We&apos;ll tell you what
              we&apos;d do about it, no deck, no pitch, just a conversation.
            </p>
          </Reveal>

          <Reveal as="div">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Your name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="project">Project</label>
                <textarea
                  id="project"
                  rows={2}
                  placeholder="A line or two about what you're building"
                />
              </div>
              <button className="btn btn-primary" type="submit">
                {sent ? "Message sent" : "Start a conversation"}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
