"use client"

type Props = {
  onCommand: (command: string) => void
  inputRef: React.RefObject<HTMLInputElement | null>
  value: string
  setValue: (v: string) => void
}

export default function TerminalInput({
  onCommand,
  inputRef,
  value,
  setValue
}: Props) {

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === "Enter") {

      if (!value.trim()) return

      onCommand(value)
      setValue("")
    }

  }

  return (

    <div className="flex items-center mt-2">

      <span className="text-green-400 mr-2">$</span>

      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleEnter}
        className="bg-transparent outline-none flex-1 text-green-300 caret-green-400"
      />

    </div>

  )
}