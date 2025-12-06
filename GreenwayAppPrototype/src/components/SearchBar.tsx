import { Search, SlidersHorizontal } from "lucide-react";

export function SearchBar() {
  return (
    <div className="absolute left-0 right-0 top-0 z-20 px-3 pt-4">
      <div className="flex items-center gap-2">
        <div className="flex flex-1 items-center gap-2 rounded-xl bg-white px-3 py-2.5 shadow-lg">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Where to?"
            className="flex-1 border-none bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
          />
        </div>
        <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-lg">
          <SlidersHorizontal className="h-4 w-4 text-gray-700" />
        </button>
      </div>
    </div>
  );
}
