import { HistoryItem } from "@/types/terminal"

type Props = {
  history: HistoryItem[]
}

export default function TerminalOutput({ history }: Props) {

  return (

    <div className="space-y-3">

      {history.map((item, index) => (

        <div key={index}>

          <div>
            <span className="text-green-400">$ </span>
            <span className="text-white">{item.command}</span>
          </div>

          <div className="text-zinc-400 whitespace-pre-wrap ml-4">
            {item.output}
          </div>

        </div>

      ))}

    </div>

  )

}