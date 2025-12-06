import imgCharityShop2 from "figma:asset/bc285124116f723b905ffee92f651583dfe0e3b8.png";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef } from "react";

interface SearchHeaderProps {
  onDestinationEnter?: (destination: string) => void;
}

export function SearchHeader({ onDestinationEnter }: SearchHeaderProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2; // Scroll speed multiplier
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div className="absolute left-0 right-0 top-0 z-20">
      {/* Green background container */}
      <div className="rounded-b-lg bg-[#97c692] px-2 pb-2 pt-1">
        {/* Search bar */}
        <div className="mb-2.5 mt-2.5 flex items-center gap-2 rounded-lg bg-[#dae5d9] px-4 py-2">
          <Search className="h-4 w-4 text-gray-700" />
          <input
            type="text"
            placeholder="Search for places"
            className="flex-1 border-none bg-transparent text-black outline-none placeholder:text-gray-700"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter" && onDestinationEnter) {
                onDestinationEnter(searchValue);
              }
            }}
          />
        </div>

        {/* Quick access chips */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`mb-2 flex gap-2 overflow-x-auto scrollbar-hide ${
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Work chip */}
          <button className="flex flex-shrink-0 items-center gap-1 rounded-lg bg-[#dae5d9] px-2.5 py-1.5">
            <span className="text-lg">💼</span>
            <span className="text-black">Work</span>
          </button>

          {/* Cafe chip */}
          <button className="flex flex-shrink-0 items-center gap-1 rounded-lg bg-[#dae5d9] px-2.5 py-1.5">
            <span className="text-lg">☕</span>
            <span className="text-black">Cafe</span>
          </button>

          {/* Shopping chip */}
          <button className="flex flex-shrink-0 items-center gap-1 rounded-lg bg-[#dae5d9] px-2.5 py-1.5">
            <span className="text-lg">🛍️</span>
            <span className="text-black">Shopping</span>
          </button>

          {/* Restaurant chip */}
          <button className="flex flex-shrink-0 items-center gap-1 rounded-lg bg-[#dae5d9] px-2.5 py-1.5">
            <span className="text-lg">🍴</span>
            <span className="text-black">Restaurant</span>
          </button>

          {/* Charity shop chip */}
          <button className="flex flex-shrink-0 items-center gap-1 rounded-lg bg-[#dae5d9] px-2.5 py-1.5 pl-0.5">
            <img
              src={imgCharityShop2}
              alt="Charity shop"
              className="h-8 w-8 object-cover"
            />
            <span className="text-black">Charity shop</span>
          </button>
        </div>

        {/* Toggle Arrow */}
        <div className="flex justify-center">
          <button
            onClick={() => setIsOptionsOpen(!isOptionsOpen)}
            className="rounded-full bg-[#dae5d9] p-1 transition-transform hover:bg-[#cdd9cc]"
          >
            <ChevronDown
              className={`h-5 w-5 text-gray-700 transition-transform duration-300 ${
                isOptionsOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Options Panel - Slides down/up */}
      <div
        className={`overflow-hidden bg-[#dae5d9] transition-all duration-300 ease-in-out ${
          isOptionsOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-4 pb-3 pt-3">
          {/* Preferred modes */}
          <div className="mb-3">
            <p className="mb-2 text-black">Preferred modes:</p>
            <div className="grid grid-cols-2 gap-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-400 accent-[#2d5a2d]"
                />
                <span className="text-sm text-black">Walk</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-gray-400 accent-[#2d5a2d]"
                />
                <span className="text-sm text-black">Bus</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-gray-400 accent-[#2d5a2d]"
                />
                <span className="text-sm text-black">
                  Bicycle
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-gray-400 accent-[#2d5a2d]"
                />
                <span className="text-sm text-black">
                  Train
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-400 accent-[#2d5a2d]"
                />
                <span className="text-sm text-black">
                  Coach
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-400 accent-[#2d5a2d]"
                />
                <span className="text-sm text-black">
                  Car pool
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-400 accent-[#2d5a2d]"
                />
                <span className="text-sm text-black">Taxi</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="h-4 w-4 rounded border-gray-400 accent-[#2d5a2d]"
                />
                <span className="text-sm text-black">
                  Private car
                </span>
              </label>
            </div>
          </div>

          {/* Depart at */}
          <div className="mb-3 flex items-center gap-2">
            <select className="rounded border border-gray-400 bg-white px-2 py-1 text-sm text-black">
              <option>Depart at</option>
              <option>Arrive by</option>
            </select>
            <select className="rounded border border-gray-400 bg-white px-2 py-1 text-sm text-black">
              <option>Today</option>
              <option>Tomorrow</option>
            </select>
            <select className="rounded border border-gray-400 bg-white px-2 py-1 text-sm text-black">
              <option>11:30 am</option>
              <option>12:00 pm</option>
              <option>1:00 pm</option>
            </select>
          </div>

          {/* Add suggested pit stops */}
          <div className="mb-3">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                defaultChecked
                className="h-4 w-4 rounded border-gray-400 accent-[#2d5a2d]"
              />
              <span className="text-sm text-black">
                Add suggested pit stops?
              </span>
            </label>
          </div>

          {/* Business travel toggle */}
          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-400 accent-[#2d5a2d]"
              />
              <span className="text-sm text-black">
                Business travel
              </span>
            </label>
          </div>
        </div>

        {/* Close Arrow */}
        <div className="flex justify-center pb-2">
          <button
            onClick={() => setIsOptionsOpen(false)}
            className="rounded-full bg-[#97c692] p-1 transition-transform hover:bg-[#87b682]"
          >
            <ChevronUp className="h-5 w-5 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}