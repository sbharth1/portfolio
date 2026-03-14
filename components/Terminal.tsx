"use client";

import { useRef } from "react";
import Header from "./Header";
import Command from "./Command";

export default function Terminal() {
  const terminalRef = useRef<HTMLDivElement>(null);

  const handleFocus = () => {
    document.getElementById("command-input")?.focus();
  };

  return (
    <div
      ref={terminalRef}
      className="h-full w-full overflow-y-auto cursor-text"
      onClick={handleFocus}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <div className="max-full mx-auto pb-10">
        <Header />
        <Command terminalRef={terminalRef} />
      </div>
    </div>
  );
}
