"use client"

import { useState } from "react"
import ModuleGrid from "../components/ModuleGrid"
import SearchBar from "../components/SearchBar"
import CategoryTabs from "../components/CategoryTabs"
import MatrixBackground from "@/components/MatrixBackground"

export default function Home() {
  const [target, setTarget] = useState("")

  return (
    <>
      <MatrixBackground />

      <main className="min-h-screen text-white relative z-10">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">

          <h1 className="text-6xl font-bold tracking-wide">
            SUPER{" "}
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,255,255,0.8)]">
              HASHIDA
            </span>
          </h1>

          <p className="text-zinc-400 mt-5 tracking-widest text-sm">
            [ THE • PHANTOM • EXTENSION ]
          </p>

          <SearchBar onExecute={(value) => setTarget(value)} />

          <CategoryTabs />

          <ModuleGrid target={target} />

        </div>
      </main>
    </>
  )
}

