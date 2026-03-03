"use client"

import ModuleCard from "./ModuleCard"
import { modules } from "@/lib/modules"

type Props = {
  target: string
}

export default function ModuleGrid({ target }: Props) {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {modules.map((mod) =>
        mod.dorks.map((dork) => (
          <ModuleCard
            key={dork.id}
            title={mod.title}
            description={mod.description}
            category={mod.category}
            query={dork.query}
            target={target}
          />
        ))
      )}
    </div>
  )
}