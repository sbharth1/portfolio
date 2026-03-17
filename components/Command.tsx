"use client";

import { ReactNode, useEffect, useRef, useState, RefObject } from "react";
import { commands } from "@/utils/command";

type HistoryItem = {
  command: string;
  output: ReactNode;
};

interface CommandProps {
  terminalRef: RefObject<HTMLDivElement | null>;
}

export default function Command({ terminalRef }: CommandProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const availableCommands = [
    "help",
    "about",
    "projects",
    "contact",
    "clear",
    "resume",
    "whoami",
    "skills"
  ];

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTo({
        top: terminalRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [history, terminalRef]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();

      if (!input) return;

      const matchedCommand = availableCommands.find((cmd) => 
        cmd.startsWith(input.toLowerCase())
      );

      if (matchedCommand) {
        setInput(matchedCommand);
      }
    }

    if (e.key === "Enter") {
      const cmd = input.trim().toLocaleLowerCase();

      if (cmd === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      if (cmd === "resume") {
        window.open(
          "https://drive.google.com/file/d/1wTrgNJOu8DzBGSlwzbGZ0D49griZg3He/preview",
          "_blank",
        );

        setHistory([
          ...history,
          {
            command: cmd,
            output: (
              <div className="my-6 text-[#05CE91]">
                Opening resume in a new tab...
              </div>
            ),
          },
        ]);
        setInput("");
        setTimeout(() => {
          inputRef.current?.focus();
        }, 0);
        return;
      }

      const output = commands[cmd] || ` command not found :- ${input}`;

      setHistory([...history, { command: cmd, output }]);
      setInput("");
    }
  };

  return (
    <>
      <div className="h-full w-full bg-[#0d1117] text-[#58a6ff] font-mono p-4">
        <div className="max-w-3xl mx-auto">
          {history.map((item, i) => (
            <div key={i}>
              <div className="flex flex-row mb-0.5">
                <div
                  className="text-[#CBD5E1] font-bold"
                  style={{ paddingLeft: "16px" }}
                >
                  <span className="text-yellow-500">visitor</span>@
                  <span className="text-[#05CE91]">terminal.sid</span>:~$
                </div>
                <div
                  style={{ paddingLeft: "16px" }}
                  className="ml-2 mb-2 font-mono text-[#c9d1d9]"
                >
                  {item.command}
                </div>
              </div>
              <div
                className="font-mono text-left ml-6 mb-4 text-[#c9d1d9]"
                style={{ paddingLeft: "16px" }}
              >
                {item.output}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row relative">
          <div
            className="text-[#CBD5E1] font-bold"
            style={{ paddingLeft: "16px" }}
          >
            <span className="text-yellow-500">visitor</span>@
            <span className="text-[#05CE91]">terminal.sid</span>:~$
          </div>
          <div className="relative flex-1">
            <input
              className="bg-transparent outline-none border-none  text-[#c9d1d9] w-full"
              style={{ paddingLeft: "10px" }}
              type="text"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              autoFocus
              id="command-input"
              onKeyDownCapture={handleCommand}
            />
          </div>
        </div>
      </div>
    </>
  );
}
