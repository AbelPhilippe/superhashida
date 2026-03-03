"use client"

type Props = {
  title: string
  description: string
  category: string
  query: string
  target: string
}

export default function ModuleCard({
  title,
  description,
  category,
  query,
  target,
}: Props) {

  function handleClick() {
    if (!target) {
      alert("Write a target domain first BROOOO!")
      return
    }

    const finalQuery = query.replace("(site)", target)

    const url = `https://www.google.com/search?q=${encodeURIComponent(finalQuery)}`

    window.open(url, "_blank")
  }

  return (
    <div
      onClick={handleClick}
      className="
        bg-white/5 backdrop-blur-lg
        border border-white/10
        rounded-2xl p-6
        transition-all duration-300
        hover:scale-105
        hover:border-cyan-400
        hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]
        cursor-pointer
      "
    >
      <h3 className="text-white font-semibold text-lg">
        {title}
      </h3>

      <p className="text-zinc-400 text-sm mt-2">
        {description}
      </p>

      <span className="text-xs mt-4 inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-cyan-400">
        {category}
      </span>
    </div>
  )
}