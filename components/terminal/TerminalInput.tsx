"use client"

import { useState,useRef } from "react"

type Props = {
  onCommand: (command: string) => void
}

export default function TerminalInput({ onCommand }: Props) {

  const [value, setValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === "Enter") {

      if (!value.trim()) return

      onCommand(value)
      setValue("")

    }

  }

  const focusInput = () => {
    inputRef.current?.focus();
  }

  return (

    <div className="flex items-center mt-2">

      <span className="text-green-400 mr-2">$</span>

      <input
        ref={inputRef}
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleEnter}
        className="bg-transparent outline-none flex-1 text-green-300 caret-green-400"
      />

    </div>

  )

}