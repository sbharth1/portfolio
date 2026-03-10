import { HistoryItem } from "@/types/terminal"

type Props = {
  history: HistoryItem[]
}

export default function TerminalOutput({ history }: Props) {

  return (
    <div className="space-y-2">

      {history.map((item, index) => (

        <div key={index}>

          <div>
            <span className="text-green-400">$ </span>
            {item.command}
          </div>

          <div className="text-gray-300 whitespace-pre-wrap">
            {item.output}
          </div>

        </div>

      ))}

    </div>
  )
}