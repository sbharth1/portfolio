"use client"

import { useState } from "react"

type Props = {
  onCommand: (command: string) => void
}

export default function TerminalInput({ onCommand }: Props) {

  const [value, setValue] = useState("")

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === "Enter") {
      onCommand(value)
      setValue("")
    }

  }

  return (

    <div className="flex mt-2">

      <span className="text-green-400">$</span>

      <input
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleEnter}
        className="bg-transparent outline-none flex-1 ml-2"
      />

    </div>

  )

}