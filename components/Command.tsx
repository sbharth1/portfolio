"use client";

import { ReactNode, useRef, useState } from "react";
import { commands } from "@/utils/command";

type HistoryItem = {
  command: string;
  output: ReactNode;
};

export default function Command() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const cmd = input.trim().toLocaleLowerCase();

      if (cmd === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      const output = commands[cmd] || ":- command not found";

      setHistory([...history, { command: cmd, output }]);
      setInput("");
    }
  };

  return (
    <>
      <div className="h-full w-full overflow-x-hidden bg-[#0d1117] text-[#58a6ff] font-mono p-4">
        <div className="max-w-3xl mx-auto">
          {history.map((item, i) => (
            <div key={i}>
              <div className="flex flex-row mb-0.5">
                <div
                  className="text-[#CBD5E1] font-bold"
                  style={{ paddingLeft: "5px" }}
                >
                <span className="text-yellow-500">visitor</span>@<span className="text-[#05CE91]">terminal.sid</span>:~$
                </div>
                <div
                  style={{ paddingLeft: "10px" }}
                  className="ml-2 font-mono text-[#c9d1d9]"
                >
                  {item.command}
                </div>
              </div>
              <div
                className="font-mono text-left ml-6 mb-3 text-[#c9d1d9]"
                style={{ paddingLeft: "10px" }}
              >
                {item.output}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row relative">
          <div
            className="text-[#CBD5E1] font-bold"
            style={{ paddingLeft: "5px" }}
          >
            <span className="text-yellow-500">visitor</span>@<span className="text-[#05CE91]">terminal.sid</span>:~$
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
              onKeyDown={handleCommand}
            />
          </div>
        </div>
      </div>
    </>
  );
}
