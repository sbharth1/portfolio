"use client"

import { useState, useRef, useEffect } from "react"
import TerminalInput from "./TerminalInput"
import TerminalOutput from "./TerminalOutput"
import { HistoryItem } from "@/types/terminal"
import { commands } from "@/data/command"

export default function Terminal() {

  const [history, setHistory] = useState<HistoryItem[]>([])
  const [value, setValue] = useState("")

  const inputRef = useRef<HTMLInputElement>(null)

  const runCommand = (command: string) => {

    const cmd = command.trim().toLowerCase()

    if (cmd === "clear") {
      setHistory([])
      return
    }

    const output = commands[cmd] || "Command not found. Type 'help'"

    setHistory((prev) => [
      ...prev,
      { command: cmd, output }
    ])
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const focusTerminal = () => {
    inputRef.current?.focus()
  }

  return (

    <div
      onClick={focusTerminal}
      className="w-full max-w-5xl h-[70vh] flex flex-col bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl shadow-2xl cursor-text"
    >

      {/* Header */}

      <div className="flex gap-2 px-4 py-3 border-b border-zinc-800">

        <div className="w-3 h-3 bg-red-500 rounded-full"/>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
        <div className="w-3 h-3 bg-green-500 rounded-full"/>

      </div>

      {/* Body */}

      <div className="flex-1 overflow-y-auto p-5 text-green-400 font-mono text-sm">

        <TerminalOutput history={history} />

        <TerminalInput
          inputRef={inputRef}
          value={value}
          setValue={setValue}
          onCommand={runCommand}
        />

      </div>

    </div>

  )

}