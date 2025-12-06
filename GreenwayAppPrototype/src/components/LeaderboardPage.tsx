import { ArrowLeft } from "lucide-react";
import { useState } from "react";

interface LeaderboardPageProps {
  onBack: () => void;
}

const leaderboardData = [
  { rank: 1, name: "Carissa", points: 463, isUser: false },
  { rank: 2, name: "Elizabeth", points: 456, isUser: false },
  { rank: 3, name: "Megan", points: 437, isUser: false },
  { rank: 4, name: "Charlotte", points: 362, isUser: true },
  { rank: 5, name: "Bella", points: 359, isUser: false },
  { rank: 6, name: "Tom", points: 114, isUser: false },
  { rank: 7, name: "James", points: 98, isUser: false },
  { rank: 8, name: "Sophie", points: 87, isUser: false },
  { rank: 9, name: "Oliver", points: 76, isUser: false },
  { rank: 10, name: "Emma", points: 65, isUser: false },
];

export function LeaderboardPage({ onBack }: LeaderboardPageProps) {
  const [activeTab, setActiveTab] = useState<"location" | "national" | "global">("location");

  return (
    <div className="flex h-full w-full flex-col bg-white">
      {/* Header */}
      <div className="bg-[#f5e6e8] px-4 py-3">
        <div className="mb-2 flex items-center gap-2">
          <button onClick={onBack} className="text-[#8b4789]">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <h1 className="text-[#8b4789]">Leaderboard</h1>
        </div>
        <p className="text-center text-[#5b9bd5]">Big Investment Company</p>
      </div>

      {/* Date Info */}
      <div className="flex items-center justify-between border-b border-[#8b4789] bg-[#f5e6e8] px-4 py-2">
        <p className="text-[#8b4789]">November 2025</p>
        <p className="text-[#8b4789]">26 days remaining</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#8b4789] bg-[#f5e6e8]">
        <button
          onClick={() => setActiveTab("location")}
          className={`flex-1 border-r border-[#8b4789] px-4 py-2 ${
            activeTab === "location" ? "bg-white text-[#8b4789]" : "text-[#8b4789]"
          }`}
        >
          My Location
        </button>
        <button
          onClick={() => setActiveTab("national")}
          className={`flex-1 border-r border-[#8b4789] px-4 py-2 ${
            activeTab === "national" ? "bg-white text-[#8b4789]" : "text-[#8b4789]"
          }`}
        >
          National
        </button>
        <button
          onClick={() => setActiveTab("global")}
          className={`flex-1 px-4 py-2 ${
            activeTab === "global" ? "bg-white text-[#8b4789]" : "text-[#8b4789]"
          }`}
        >
          Global
        </button>
      </div>

      {/* Leaderboard List */}
      <div className="flex-1 overflow-y-auto bg-[#f5e6e8] px-4 pb-20 pt-3">
        {activeTab === "location" && (
          <>
            <p className="mb-2 text-right text-xs text-[#8b4789]">5PH2/15 EARNED</p>
            {leaderboardData.map((entry) => (
              <div
                key={entry.rank}
                className={`mb-2 flex items-center justify-between py-1 ${
                  entry.isUser ? "" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 text-[#8b4789]">{entry.rank}.</span>
                  <span className="text-[#8b4789]">
                    {entry.name}
                    {entry.isUser && (
                      <span className="ml-2 text-sm text-[#8b4789]">(you)</span>
                    )}
                  </span>
                </div>
                <span className="text-[#8b4789]">{entry.points}</span>
              </div>
            ))}
          </>
        )}
        {activeTab === "national" && (
          <p className="text-center text-[#8b4789]">National leaderboard coming soon...</p>
        )}
        {activeTab === "global" && (
          <p className="text-center text-[#8b4789]">Global leaderboard coming soon...</p>
        )}
      </div>
    </div>
  );
}
