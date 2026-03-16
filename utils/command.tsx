"use client";

import { ReactNode } from "react";

const HelpItem = ({ cmd, desc }: { cmd: string; desc: string }) => (
  <div className="grid grid-cols-[100px_1fr] gap-4" style={{marginTop:6,marginBottom:2}}>
    <span className="text-[#05CE91] font-bold ">{cmd}</span>
    <span className="text-[#CBD5E1] ">— {desc}</span>
  </div>
);

const ListItem = ({ label, value }: { label: string; value: ReactNode }) => (
  <div className="grid grid-cols-[120px_1fr] gap-4" style={{marginTop:6,marginBottom:4}}>
    <span className="text-yellow-400 font-bold">{label}:</span>
    <span className="text-[#CBD5E1]">{value}</span>
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
      <ListItem label="Languages" value="TypeScript, JavaScript, C++" />
      <ListItem
        label="Frameworks"
        value="React.js, Next.js, Express.js, React Native"
      />
      <ListItem
        label="Tools"
        value="Git, MySQL, Redis, MongoDB, PostgreSQL, Kafka"
      />
      <ListItem
        label="DevOps"
        value="Docker, Kubernetes, AWS ECS, AWS EC2, AWS Lambda"
      />
    </div>
  ),

  projects: (
    <div className="space-y-4 my-6 text-[#CBD5E1]">
      <div>
        <div className="text-[#05CE91] font-bold flex items-center gap-2">
          Terminal-portfolio
          <a
            href="https://github.com/sbharth1/portfolio.git"
            className="text-blue-400 text-sm underline hover:text-blue-300"
          >
            GitHub
          </a>
        </div>
        <div className="text-sm mt-1">
          A Terminal Portfolio built with Next Js and Docker.
        </div>
      </div>

      <div>
        <div className="text-[#05CE91] font-bold flex items-center gap-2">
           AI Chatbot Application
          <a
            href="https://github.com/sbharth1/chat-bot.git"
            className="text-blue-400 text-sm underline hover:text-blue-300"
          >
            GitHub
          </a>
        </div>
        <div className="text-sm mt-1">
          A chat interface featuring a Next.js UI and 
          integration with generative AI models.
        </div>
      </div>
    </div>
  ),

  contact: (
    <div className="space-y-4 my-6 text-[#CBD5E1]">
      <ListItem
        label="Email"
        value={
          <a
            href="mailto:baghelsiddhath942@gmail.com"
            className="text-blue-400 underline hover:text-blue-300"
          >
            baghelsiddhath942@gmail.com
          </a>
        }
      />
      <ListItem
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

  // resume ---

  whoami: <div className="my-6 text-[#CBD5E1]">visitor</div>,
};
