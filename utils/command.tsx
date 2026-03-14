"use client";

import { ReactNode } from "react";

export const commands: Record<string, ReactNode> = {
  help: (
    <div className="space-y-1">
      <div>
        {" "}
        <span className="w-28">about</span>{" "}
        <span className="text-center">— about</span>
      </div>
      <div>
        {" "}
        <span>clear </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <span className="text-center">— clear</span>
      </div>
      <div>
        {" "}
        <span> education</span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <span className="text-left">— education</span>
      </div>
      <div>
        {" "}
        <span>email</span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <span>— email</span>
      </div>
      <div>
        {" "}
        <span>help </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <span>— help</span>
      </div>
      <div>
        {" "}
        <span> history</span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <span className="text-center">— history</span>
      </div>
      <div>
        {" "}
        <span>projects</span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <span className="text-center">— projects</span>
      </div>
      <div>
        {" "}
        <span>socials</span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <span className="text-center">— socials</span>
      </div>
      <div>
        {" "}
        <span>whoami </span>{" "}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
        <span className="text-center">— whoami</span>
      </div>
    </div>
  ),

  skills: (
    <div className="space-y-2">
      <div>
        <span className="text-yellow-400">Frontend</span>
        <div>React • Next.js • TypeScript • Tailwind</div>
      </div>

      <div>
        <span className="text-yellow-400">Backend</span>
        <div>Node.js • Express • REST API</div>
      </div>

      <div>
        <span className="text-yellow-400">Database</span>
        <div>PostgreSQL • MongoDB</div>
      </div>

      <div>
        <span className="text-yellow-400">Tools</span>
        <div>Git • Docker • Linux</div>
      </div>
    </div>
  ),

  about: (
    <div className="space-y-1">
      <div>👋 Hi, I&apos;m Siddharth</div>
      <div>Full Stack Developer</div>
      <div>
        I build modern web applications using React, Next.js and Node.js.
      </div>
    </div>
  ),

  resume: (
    <div className="space-y-1">
      <div>📄 Resume</div>
      <a href="/resume.pdf" target="_blank" className="text-blue-400 underline">
        Download Resume
      </a>
    </div>
  ),

  contact: (
    <div className="space-y-1">
      <div>📧 Email: siddharth@email.com</div>
      <div>💻 GitHub: github.com/siddharth</div>
      <div>🔗 LinkedIn: linkedin.com/in/siddharth</div>
    </div>
  ),
};
