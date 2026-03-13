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

  return (<>
    <div className="h-full w-full bg-[#0d1117] text-[#58a6ff] font-mono p-4">
      <div>hello</div>
    </div>
  </>);
}
