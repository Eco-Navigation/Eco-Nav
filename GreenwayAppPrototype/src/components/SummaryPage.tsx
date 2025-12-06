import svgPaths from "../imports/svg-pl48dk2r97";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Trophy } from "lucide-react";

const emissionsData = [
  { name: "Car", value: 89, color: "#e67e22" },
  { name: "Train", value: 28, color: "#7f8c8d" },
  { name: "Bus", value: 42, color: "#5b9bd5" },
  { name: "Walking", value: 0, color: "#27ae60" },
  { name: "Taxi", value: 19, color: "#f39c12" },
];

const totalEmissions = emissionsData.reduce((sum, item) => sum + item.value, 0);

interface SummaryPageProps {
  onNavigateToLeaderboard?: () => void;
}

export function SummaryPage({ onNavigateToLeaderboard }: SummaryPageProps) {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      {/* Summary Cards */}
      <div className="flex-1 overflow-y-auto px-4 pb-24 pt-4">
        {/* Leaderboard Card */}
        <button 
          onClick={onNavigateToLeaderboard}
          className="mb-4 w-full rounded-lg bg-[#dae5d9] p-4 text-left transition-colors hover:bg-[#cdd9cc]"
        >
          <div className="mb-2 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-[#2d5a2d]" />
            <p className="text-black">Company Leaderboard</p>
          </div>
          <p className="mb-3 text-sm text-gray-700">
            See where you rank among your colleagues in eco-friendly travel!
          </p>
          <div className="rounded-lg bg-white p-3">
            <p className="mb-1 text-sm text-black">Your current rank:</p>
            <p className="text-[#2d5a2d]">4th place - 1320 points</p>
          </div>
        </button>

        {/* This Month Card */}
        <div className="mb-4 rounded-lg bg-[#dae5d9] p-4">
          <div className="mb-2 flex items-center gap-2">
            <svg className="h-5 w-5" viewBox={svgPaths.viewBox1}>
              <path d={svgPaths.path1} fill="#2d5a2d" />
            </svg>
            <p className="text-black">This month you saved</p>
          </div>
          <div className="mb-3">
            <p className="text-black">52 kg of CO2</p>
            <p className="text-sm text-gray-700">That's 15% more than last month!</p>
          </div>
          <button className="w-full rounded-lg bg-[#97c692] py-2 text-white">
            See the breakdown
          </button>
        </div>

        {/* Share Your Success Card */}
        <div className="mb-4 rounded-lg bg-[#dae5d9] p-4">
          <div className="mb-2 flex items-center gap-2">
            <svg className="h-5 w-5" viewBox={svgPaths.viewBox2}>
              <path d={svgPaths.path2} fill="#2d5a2d" />
            </svg>
            <p className="text-black">Share your success</p>
          </div>
          <p className="mb-3 text-sm text-gray-700">
            Share your achievements on social media and inspire others to make eco-friendly choices!
          </p>
          <button className="w-full rounded-lg bg-[#97c692] py-2 text-white">
            Share on social media
          </button>
        </div>

        {/* Challenge Card */}
        <div className="mb-4 rounded-lg bg-[#dae5d9] p-4">
          <div className="mb-2 flex items-center gap-2">
            <svg className="h-5 w-5" viewBox={svgPaths.viewBox3}>
              <path d={svgPaths.path3} fill="#2d5a2d" />
            </svg>
            <p className="text-black">Challenge your friends</p>
          </div>
          <p className="mb-3 text-sm text-gray-700">
            Invite your friends to join the eco-challenge and see who can save the most CO2!
          </p>
          <button className="w-full rounded-lg bg-[#97c692] py-2 text-white">
            Invite friends
          </button>
        </div>

        {/* Rewards Card */}
        <div className="mb-4 rounded-lg bg-[#dae5d9] p-4">
          <div className="mb-2 flex items-center gap-2">
            <svg className="h-5 w-5" viewBox={svgPaths.viewBox4}>
              <path d={svgPaths.path4} fill="#2d5a2d" />
            </svg>
            <p className="text-black">Redeem your rewards</p>
          </div>
          <p className="mb-3 text-sm text-gray-700">
            You've earned enough points to redeem exclusive rewards and discounts!
          </p>
          <button className="w-full rounded-lg bg-[#97c692] py-2 text-white">
            View rewards
          </button>
        </div>

        {/* Tips Card */}
        <div className="mb-4 rounded-lg bg-[#dae5d9] p-4">
          <div className="mb-2 flex items-center gap-2">
            <svg className="h-5 w-5" viewBox={svgPaths.viewBox5}>
              <path d={svgPaths.path5} fill="#2d5a2d" />
            </svg>
            <p className="text-black">Eco-friendly tips</p>
          </div>
          <p className="mb-3 text-sm text-gray-700">
            Discover new ways to reduce your carbon footprint and live more sustainably.
          </p>
          <button className="w-full rounded-lg bg-[#97c692] py-2 text-white">
            Read tips
          </button>
        </div>

        {/* Impact Card */}
        <div className="mb-4 rounded-lg bg-[#dae5d9] p-4">
          <div className="mb-2 flex items-center gap-2">
            <svg className="h-5 w-5" viewBox={svgPaths.viewBox6}>
              <path d={svgPaths.path6} fill="#2d5a2d" />
            </svg>
            <p className="text-black">Your environmental impact</p>
          </div>
          <p className="mb-3 text-sm text-gray-700">
            See how your choices are making a difference for the planet.
          </p>
          <button className="w-full rounded-lg bg-[#97c692] py-2 text-white">
            View impact
          </button>
        </div>

        {/* Emissions Pie Chart */}
        <div className="mb-4 rounded-lg bg-[#dae5d9] p-4">
          <p className="mb-4 text-black">Last Week's Emissions</p>
          <div className="flex items-center justify-between gap-4">
            {/* Pie Chart */}
            <div className="relative" style={{ width: '160px', height: '160px', minWidth: '160px', minHeight: '160px' }}>
              <ResponsiveContainer width={160} height={160}>
                <PieChart>
                  <Pie
                    data={emissionsData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={2}
                  >
                    {emissionsData.map((entry) => (
                      <Cell key={`cell-${entry.name}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              {/* Center Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-black">{totalEmissions}kg</p>
                <p className="text-xs text-gray-700">CO2e</p>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-col gap-2">
              {emissionsData.map((item) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div
                    className="h-3 w-3 flex-shrink-0 rounded-sm"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-black">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}