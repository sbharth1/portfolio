"use client";

import { ReactNode } from "react";

const HelpItem = ({ cmd, desc }: { cmd: string; desc: string }) => (
  <div className="grid grid-cols-[100px_1fr] gap-4">
    <span className="text-[#05CE91] font-bold">{cmd}</span>
    <span className="text-[#CBD5E1]">— {desc}</span>
  </div>
);

const ListItem = ({ label, value }: { label: string; value: ReactNode }) => (
  <div className="grid grid-cols-[120px_1fr] gap-2">
    <span className="text-yellow-400 font-bold">{label}:</span>
    <span className="text-[#CBD5E1]">{value}</span>
  </div>
);

export const commands: Record<string, ReactNode> = {
  help: (
    <div className="space-y-1 mt-2">
      <div className="text-yellow-400 mb-2 font-bold">Available commands:</div>
      <HelpItem cmd="about" desc="Read a little bit about me" />
      <HelpItem cmd="clear" desc="Clear the terminal output" />
      <HelpItem cmd="contact" desc="Get my email and social links" />
      <HelpItem cmd="projects" desc="View my recent development projects" />
      <HelpItem cmd="resume" desc="Download my resume (PDF)" />
      <HelpItem cmd="skills" desc="List of my technical skills and stack" />
      <HelpItem cmd="whoami" desc="Print the current user" />
    </div>
  ),

  about: (
    <div className="space-y-2 mt-2 text-[#CBD5E1]">
      <p>👋 Hi, I&apos;m <span className="text-[#05CE91] font-bold">Siddharth</span>.</p>
      <p>
        I am a Full Stack Developer passionate about building robust web applications.
        I specialize in the modern JavaScript ecosystem, focusing on scalable architectures,
        clean code, and seamless user experiences.
      </p>
    </div>
  ),

  skills: (
    <div className="space-y-2 mt-2 text-[#CBD5E1]">
      <ListItem label="Frontend" value="React, Next.js, TypeScript, Tailwind CSS, shadcn/ui" />
      <ListItem label="Backend" value="Node.js, Express, Python" />
      <ListItem label="Database" value="PostgreSQL, MySQL, MongoDB, Drizzle ORM" />
      <ListItem label="Tools" value="Git, Docker, Linux" />
    </div>
  ),

  projects: (
    <div className="space-y-4 mt-2 text-[#CBD5E1]">
      <div>
        <div className="text-[#05CE91] font-bold flex items-center gap-2">
          🛒 E-commerce Platform
          <a href="#" className="text-blue-400 text-sm underline hover:text-blue-300">GitHub</a>
        </div>
        <div className="text-sm mt-1">
          A full-stack e-commerce site built with React, Node.js, PostgreSQL, Drizzle ORM, and shadcn/ui.
        </div>
      </div>
      
      <div>
        <div className="text-[#05CE91] font-bold flex items-center gap-2">
          🤖 AI Chatbot Application
          <a href="#" className="text-blue-400 text-sm underline hover:text-blue-300">GitHub</a>
        </div>
        <div className="text-sm mt-1">
          A chat interface featuring a Next.js UI, Python backend, and integration with generative AI models.
        </div>
      </div>
    </div>
  ),

  contact: (
    <div className="space-y-2 mt-2 text-[#CBD5E1]">
      <ListItem 
        label="Email" 
        value={<a href="mailto:baghelsiddhath942@gmail.com" className="text-blue-400 underline hover:text-blue-300">baghelsiddhath942@email.com</a>} 
      />
      <ListItem 
        label="GitHub" 
        value={<a href="https://github.com/sbharth1" target="_blank" className="text-blue-400 underline hover:text-blue-300">github.com/sbharth1</a>} 
      />
      <ListItem 
        label="LinkedIn" 
        value={<a href="https://www.linkedin.com/in/siddharth-baghel-122a23273/" target="_blank" className="text-blue-400 underline hover:text-blue-300">linkedin.com/in/siddharth</a>} 
      />
       <ListItem 
        label="Twitter" 
        value={<a href="https://x.com/sbharth01" target="_blank" className="text-blue-400 underline hover:text-blue-300">twitter.com/siddharth</a>} 
      />
    </div>
  ),

  resume: (
    <div className="mt-2">
      <a href="/resume.pdf" target="_blank" className="text-[#05CE91] underline hover:text-green-400">
        📄 Click here to view or download my resume.
      </a>
    </div>
  ),

  whoami: (
    <div className="mt-2 text-[#CBD5E1]">
      visitor
    </div>
  )
};