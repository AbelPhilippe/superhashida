export default function SearchBar() {
    return (
        <div className="mt-12">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex rounded-lg items-center gap-4">
            <input
                type="text"
                placeholder="-> example.com"
                className="flex-1 bg-black border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-4 py-3 rounded-lg transition-colors">
                EXECUTE
            </button>
            </div>
        </div>
    )
}