import { ArrowUpDown } from "lucide-react";

interface NavigationHeaderProps {
  from: string;
  to: string;
  onSwap: () => void;
  onBack: () => void;
}

export function NavigationHeader({ from, to, onSwap, onBack }: NavigationHeaderProps) {
  return (
    <div className="absolute left-0 right-0 top-0 z-20">
      <div className="rounded-b-lg bg-[#97c692] px-2 pb-3 pt-2">
        {/* From field */}
        <div className="mb-2 rounded-lg bg-[#dae5d9] px-4 py-2">
          <p className="text-black">From: {from}</p>
        </div>

        {/* To field */}
        <div className="rounded-lg bg-[#dae5d9] px-4 py-2">
          <p className="text-black">To: {to}</p>
        </div>

        {/* Swap button */}
        <button
          onClick={onSwap}
          className="absolute right-4 top-[28px] rounded-lg bg-[#dae5d9] p-2 transition-colors hover:bg-[#cdd9cc]"
        >
          <ArrowUpDown className="h-5 w-5 text-black" />
        </button>
      </div>
    </div>
  );
}
