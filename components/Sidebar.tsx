"use client"

type Props = {
  onExecute: (value: string) => void
}

import { useState } from "react"

export default function SearchBar({ onExecute }: Props) {
  const [value, setValue] = useState("")

  return (
    <div className="mt-8 flex justify-center gap-4">
      <input
        type="text"
        placeholder="Write a domain (ex: bugbounty.com)"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-black border border-zinc-700 px-4 py-2 rounded-lg text-white w-80"
      />

      <button
        onClick={() => onExecute(value)}
        className="bg-cyan-500 text-black px-4 py-2 rounded-lg hover:scale-105 transition"
      >
        Executar
      </button>
    </div>
  )
}