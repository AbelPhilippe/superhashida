"use client"

import { useState } from "react"

type Props = {
  onExecute: (value: string) => void
}

export default function SearchBar({ onExecute }: Props) {
  const [value, setValue] = useState("")

  return (
    <div className="mt-12">
      <div className="bg-white/5
                      backdrop-blur-lg
                      border border-zinc-800
                      rounded-xl
                      p-6
                      flex
                      items-center
                      gap-4">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Write a target domain bro (e.g. example.com)"
          className="flex-1 bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
        />
        <button
          onClick={() => onExecute(value)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-3 rounded-lg transition-colors"
        >
          EXECUTE
        </button>
      </div>
    </div>
  )
}