"use client"

import { useState } from "react"

export default function Command() {
  const [input, setInput] = useState("")
  const [history, setHistory] = useState<string[]>([])

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setHistory([...history, input])
      setInput("")
    }
  }

  return (
    <div className="mt-6 font-mono text-green-400">

      <div className="space-y-2">
        {history.map((cmd, i) => (
          <div key={i}>
            <span className="text-green-500">$ </span>
            {cmd}
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
  )
}