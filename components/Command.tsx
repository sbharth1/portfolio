"use client";

import { ReactNode, useState } from "react";
import { commands } from "@/data/command";

type HistoryItem = {
  command: string;
  output: ReactNode;
};

export default function Command() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "enter") {
      const cmd = input.trim().toLocaleLowerCase();

      if (cmd === "clear") {
        setHistory([]);
        setInput("");
        return;
      }

      const output = commands[cmd] || "command not found";

      setHistory([...history, { command: cmd, output }]);
      setInput("");
    }
  };

  return (
    <div className="mt-6 font-mono text-green-400">
      <div className="space-y-2">
        {history.map((item, i) => (
          <div key={i}>
            <div>
              {" "}
              <span className="text-green-500">$</span>
            </div>

            <div className="ml-4 text-gray-300 whitespace-pre-wrap">
              {item.output}
            </div>
          </div>
        ))}
      </div>

      <div className="flex mt-2 space-y-2">
        <span className="text-green-500">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
          className="bg-transparent outline-none ml-2 flex-1"
          autoFocus
        />
      </div>
    </div>
  );
}
