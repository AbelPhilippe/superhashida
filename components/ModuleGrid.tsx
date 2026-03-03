import ModuleCard from "./ModuleCard"
import { modules, type Module } from "@/lib/modules"
type Props = {
  modules: Module[]
  onExecute: (query: string) => void
}
export default function ModuleGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {modules.map((mod) => (
        <ModuleCard
          key={mod.id}
          title={mod.title}
          description={mod.description}
          category={mod.category}
        />
      ))}
    </div>
  )
}