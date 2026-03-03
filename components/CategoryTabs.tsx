"use client"

import { useState } from "react"

export default function CategoryTabs() {
  const [activeTab, setActiveTab] = useState(0)
  
  const tabs = [
    "All Modules",
    "Browser",
    "Recon & Subdomains",
    "Archives & History",
    "OSINT & Intelligence",
  ]

  return (
    <div className="flex flex-wrap gap-3 mt-10 justify-center">
      {tabs.map((tab, index) => (
        <button
          key={index}
          onClick={() => setActiveTab(index)}
          className={`
            px-5 py-2 
            rounded-full 
            text-sm 
            backdrop-blur-md
            bg-white/5
            border border-white/10
            transition-all duration-300
            ${activeTab === index
                ? "atext-white bg-cyan-500/80 border-cyan-400 shadow-[0_0_15px_rgba(0,255,255,0.5)]"
                : "text-zinc-300 hover:scale-105 hover:border-cyan-400 hover:text-white hover:shadow-[0_0_12px_rgba(0,255,255,0.4)]"
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}