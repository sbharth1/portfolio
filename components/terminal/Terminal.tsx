"use client"

import { useState } from "react"
import TerminalInput from "./TerminalInput"
import TerminalOutput from "./TerminalOutput"
import { HistoryItem } from "@/types/terminal"
import { commands } from "@/data/command"

export default function Terminal() {

  const [history, setHistory] = useState<HistoryItem[]>([])

  const runCommand = (command: string) => {

    const cmd = command.trim().toLowerCase()

    if (cmd === "clear") {
      setHistory([])
      return
    }

    if (cmd === "github") {
      window.open("https://github.com", "_blank")
      return
    }

    if (cmd === "linkedin") {
      window.open("https://linkedin.com", "_blank")
      return
    }

    const output = commands[cmd] || "Command not found. Type 'help'"

    setHistory((prev) => [
      ...prev,
      { command: cmd, output }
    ])

  }

  return (

    <div className="bg-black text-green-400 font-mono p-6 rounded-xl shadow-xl w-full max-w-4xl mx-auto">

      {/* Terminal header */}

      <div className="flex gap-2 mb-4">

        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>

      </div>

      <TerminalOutput history={history} />

      <TerminalInput onCommand={runCommand} />

    </div>

  )

}