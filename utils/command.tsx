"use client";

import { ReactNode } from "react";

const HelpItem = ({ cmd, desc }: { cmd: string; desc: string }) => (
  <div className="grid grid-cols-[100px_1fr] gap-4" style={{marginTop:6,marginBottom:2}}>
    <span className="text-[#05CE91] font-bold ">{cmd}</span>
    <span className="text-[#CBD5E1] ">— {desc}</span>
  </div>
);

const ListItem = ({icon, label, value }: {icon?:ReactNode, label: string; value: ReactNode }) => (
  <div className="grid grid-cols-[120px_1fr] gap-4" style={{marginTop:6,marginBottom:4}}>
    <span className="text-yellow-400 font-bold flex items-center gap-2"> 
      <span className="text-[#CBD5E1] font-normal">
        {icon}
      </span>
      {label}:
    </span>
    <span className="text-[#CBD5E1] flex items-center">{value}</span>
  </div>
);


export const commands: Record<string, ReactNode> = {
  help: (
    <div className="space-y-4 my-6">
      <div className="text-yellow-400 text mb-6 font-bold">Available commands:</div>
      <HelpItem cmd="about" desc="Read a little bit about me" />
      <HelpItem cmd="clear" desc="Clear the terminal output" />
      <HelpItem cmd="contact" desc="Get my email and social links" />
      <HelpItem cmd="projects" desc="View my recent development projects" />
      <HelpItem cmd="resume" desc="Download my resume (PDF)" />
      <HelpItem cmd="skills" desc="List of my technical skills and stack" />
      <HelpItem cmd="whoami" desc="Print the current user" />
      <p className="mt-3">Tab =&gt; autocompletes the command.</p>
    </div>
  ),

  about: (
    <div className="space-y-4 my-6 text-[#CBD5E1]">
      <p>
        <span className="font-bold">Hi, my name is Siddharth!</span>
      </p>
      <p>
        I&apos;m a full-stack developer. I am passionate about writing codes and
        developing web applications to solve real-life challenges.
      </p>
    </div>
  ),

skills: (
    <div className="space-y-4 my-6 text-[#CBD5E1]">
      <ListItem 
        label="Languages" 
        value="TypeScript, JavaScript, C++" 
      />
      <ListItem
        label="Frameworks"
        value="React.js, Next.js, Express.js, React Native"
      />
      <ListItem
        label="Tools & Databases"
        value="MySQL, MongoDB, PostgreSQL, Git, GitHub Actions, Redis, Kafka"
      />
      <ListItem
        label="DevOps / OS"
        value="Linux (Ubuntu), Docker, Kubernetes, AWS (ECS, EC2, Lambda, S3)"
      />
    </div>
  ),
projects: (
    <div className="space-y-6 my-6 text-[#CBD5E1]">
      <div>
        <div className="text-[#05CE91] font-bold flex items-center gap-2 text-lg">
          Terminal-portfolio
          <a
            href="https://github.com/sbharth1/portfolio.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm underline hover:text-blue-300 ml-2"
          >
            [GitHub]
          </a>
        </div>
        <div className="text-sm mt-2 space-y-1">
          <p>• Built an interactive, Linux-themed developer portfolio using Next.js.</p>
          <p>• Containerized with Docker and hosted on an AWS EC2.</p>
          <p>• Architected a fully automated CI/CD pipeline using GitHub Actions.</p>
        </div>
      </div>

      <div>
        <div className="text-[#05CE91] font-bold flex items-center gap-2 text-lg">
          AI Chatbot Application
          <a
            href="https://github.com/sbharth1/chat-bot.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 text-sm underline hover:text-blue-300 ml-2"
          >
            [GitHub]
          </a>
        </div>
        <div className="text-sm mt-2 space-y-1">
          <p>• Developed an AI-powered chatbot using Next.js.</p>
          <p>• Implemented dynamic routing, message history, and custom API routes.</p>
        </div>
      </div>

      <div>
        <div className="text-[#05CE91] font-bold flex items-center gap-2 text-lg">
          Notes V2
        </div>
        <div className="text-sm mt-2 space-y-1">
          <p>• A React Native app for creating, updating, viewing, and deleting notes.</p>
          <p>• Uses SQLite for local data storage and full offline access.</p>
        </div>
      </div>
    </div>
  ),

contact: (
    <div className="space-y-4 my-6 text-[#CBD5E1]">
      <ListItem
        icon={
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        }
        label="Email"
        value={
          <a
            href="mailto:baghelsiddharth942@gmail.com"
            className="text-blue-400 underline hover:text-blue-300"
          >
            baghelsiddharth942@gmail.com
          </a>
        }
      />
      <ListItem
        icon={
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
          </svg>
        }
        label="GitHub"
        value={
          <a
            href="https://github.com/sbharth1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            github.com/sbharth1
          </a>
        }
      />
      <ListItem
        icon={
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        }
        label="LinkedIn"
        value={
          <a
            href="https://www.linkedin.com/in/siddharth-baghel-122a23273/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            linkedin.com/in/siddharth
          </a>
        }
      />
      <ListItem
        icon={
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        }
        label="Twitter"
        value={
          <a
            href="https://x.com/sbharth01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline hover:text-blue-300"
          >
            twitter.com/siddharth
          </a>
        }
      />
    </div>
  ),

  whoami: <div className="my-6 text-[#CBD5E1]">visitor</div>,
};
