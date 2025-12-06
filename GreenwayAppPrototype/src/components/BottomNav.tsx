import { Award, Map, FileText, User } from "lucide-react";

interface BottomNavProps {
  currentPage: "map" | "summary" | "profile" | "rewards";
  onPageChange: (page: "map" | "summary" | "profile" | "rewards") => void;
}

export function BottomNav({ currentPage, onPageChange }: BottomNavProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-30 bg-white px-2 pb-2 pt-3">
      <div className="flex items-center justify-around gap-2 px-4">
        
        {/* Rewards */}
        <button 
          onClick={() => onPageChange("rewards")}
          className={`flex flex-1 flex-col items-center gap-1 rounded-lg px-3 py-2 transition-colors hover:bg-gray-200 ${
            currentPage === "rewards" ? "bg-[#d9d9d9]" : ""
          }`}
        >
          <Award className="h-8 w-8 text-[#97c692]" strokeWidth={2.5} fill={currentPage === "rewards" ? "currentColor" : "none"} />
          <span className="text-sm text-[#1e1e1e]">Rewards</span>
        </button>

        {/* Map */}
        <button 
          onClick={() => onPageChange("map")}
          className={`flex flex-1 flex-col items-center gap-1 rounded-lg px-3 py-2 transition-colors hover:bg-gray-200 ${
            currentPage === "map" ? "bg-[#d9d9d9]" : ""
          }`}
        >
          <Map className="h-8 w-8 text-[#97c692]" strokeWidth={2.5} fill={currentPage === "map" ? "currentColor" : "none"} />
          <span className="text-sm text-[#1e1e1e]">Map</span>
        </button>

        {/* Summary */}
        <button 
          onClick={() => onPageChange("summary")}
          className={`flex flex-1 flex-col items-center gap-1 rounded-lg px-3 py-2 transition-colors hover:bg-gray-200 ${
            currentPage === "summary" ? "bg-[#d9d9d9]" : ""
          }`}
        >
          <FileText className="h-8 w-8 text-[#97c692]" strokeWidth={2.5} fill={currentPage === "summary" ? "currentColor" : "none"} />
          <span className="text-sm text-[#1e1e1e]">Summary</span>
        </button>

        {/* Profile */}
        <button 
          onClick={() => onPageChange("profile")}
          className={`flex flex-1 flex-col items-center gap-1 rounded-lg px-3 py-2 transition-colors hover:bg-gray-200 ${
            currentPage === "profile" ? "bg-[#d9d9d9]" : ""
          }`}
        >
          <User className="h-8 w-8 text-[#97c692]" strokeWidth={2.5} fill={currentPage === "profile" ? "currentColor" : "none"} />
          <span className="text-sm text-[#1e1e1e]">Profile</span>
        </button>
      </div>
    </div>
  );
}