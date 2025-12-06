import { ArrowLeft, Bus, Train, Car, MapPin, Calendar, Leaf, Briefcase } from "lucide-react";
import { useState } from "react";

interface ProfilePageProps {}

const recentRoutes = [
  {
    id: 1,
    date: "Nov 18, 2025",
    time: "8:45 AM",
    from: "Home",
    to: "Office",
    mode: "Bus",
    icon: Bus,
    distance: "5.2 km",
    duration: "22 min",
    co2Saved: "2.8 kg",
    points: 45,
    color: "#5b9bd5",
  },
  {
    id: 2,
    date: "Nov 17, 2025",
    time: "6:30 PM",
    from: "Office",
    to: "City Centre",
    mode: "Train",
    icon: Train,
    distance: "8.4 km",
    duration: "15 min",
    co2Saved: "3.2 kg",
    points: 52,
    color: "#7f8c8d",
  },
  {
    id: 3,
    date: "Nov 17, 2025",
    time: "9:15 AM",
    from: "Home",
    to: "Shopping Mall",
    mode: "Bus",
    icon: Bus,
    distance: "3.8 km",
    duration: "18 min",
    co2Saved: "1.9 kg",
    points: 38,
    color: "#5b9bd5",
  },
];

export function ProfilePage({}: ProfilePageProps) {
  const totalCO2Saved = recentRoutes.reduce((sum, route) => sum + parseFloat(route.co2Saved), 0);
  const totalPoints = recentRoutes.reduce((sum, route) => sum + route.points, 0);
  const [businessTravel, setBusinessTravel] = useState<{ [key: number]: boolean }>({ 2: true });

  return (
    <div className="flex h-full w-full flex-col bg-white">
      {/* Header */}
      <div className="bg-[#10B981] px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="relative h-16 w-16 overflow-hidden rounded-full bg-white flex items-center justify-center">
            <span className="text-[#10B981] text-2xl">CC</span>
          </div>
          <div className="flex-1">
            <p className="text-white">Charlotte</p>
            <p className="text-sm text-white/90">charlotte@example.com</p>
            <div className="mt-1 flex items-center gap-1 text-white">
              <Leaf className="h-4 w-4" />
              <span className="text-sm">Eco Warrior • 1320 points</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 gap-3 bg-[#f0fdf4] px-4 py-4">
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <p className="mb-1 text-xs text-gray-600">Total Trips</p>
          <p className="text-[#10B981]">124</p>
        </div>
        <div className="rounded-lg bg-white p-3 shadow-sm">
          <p className="mb-1 text-xs text-gray-600">This Month</p>
          <p className="text-[#10B981]">52 kg CO2</p>
        </div>
      </div>

      {/* Recent History */}
      <div className="flex-1 overflow-y-auto px-4 pb-24 pt-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-black">Recent Navigation History</h2>
        </div>

        {/* Summary Card */}
        <div className="mb-4 rounded-lg bg-[#dae5d9] p-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-700">Last 3 routes saved</p>
              <p className="text-black">{totalCO2Saved.toFixed(1)} kg CO2</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-700">Points earned</p>
              <p className="text-[#10B981]">{totalPoints}</p>
            </div>
          </div>
        </div>

        {/* Route Cards */}
        {recentRoutes.map((route) => {
          const ModeIcon = route.icon;
          return (
            <div key={route.id} className="mb-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              {/* Date and Time */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{route.date}</span>
                </div>
                <span className="text-sm text-gray-600">{route.time}</span>
              </div>

              {/* Route Details */}
              <div className="mb-3">
                <div className="mb-2 flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-2 w-2 rounded-full bg-[#10B981]" />
                    <div className="h-8 w-0.5 bg-gray-300" />
                    <MapPin className="h-3 w-3 text-[#10B981]" />
                  </div>
                  <div className="flex-1">
                    <p className="mb-2 text-sm text-black">{route.from}</p>
                    <p className="text-sm text-black">{route.to}</p>
                  </div>
                </div>
              </div>

              {/* Mode and Stats */}
              <div className="mb-3 flex items-center gap-2 rounded-md bg-gray-50 p-2">
                <div 
                  className="flex h-8 w-8 items-center justify-center rounded-full"
                  style={{ backgroundColor: route.color + '20' }}
                >
                  <ModeIcon className="h-4 w-4" style={{ color: route.color }} />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-black">{route.mode}</p>
                  <p className="text-xs text-gray-600">{route.distance} • {route.duration}</p>
                </div>
              </div>

              {/* Impact */}
              <div className="flex items-center justify-between rounded-md bg-[#f0fdf4] p-2">
                <div className="flex items-center gap-1">
                  <Leaf className="h-4 w-4 text-[#10B981]" />
                  <span className="text-sm text-gray-700">CO2 saved:</span>
                  <span className="text-sm text-[#10B981]">{route.co2Saved}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm text-gray-700">Points:</span>
                  <span className="text-sm text-[#10B981]">+{route.points}</span>
                </div>
              </div>

              {/* Business Travel Toggle */}
              <div className="mt-3 flex items-center gap-2 rounded-md border border-gray-200 bg-gray-50 p-2">
                <Briefcase className="h-4 w-4 text-gray-600" />
                <span className="flex-1 text-sm text-gray-700">Business travel</span>
                <label className="relative inline-flex cursor-pointer items-center">
                  <input
                    type="checkbox"
                    checked={businessTravel[route.id] || false}
                    onChange={(e) => setBusinessTravel({ ...businessTravel, [route.id]: e.target.checked })}
                    className="peer sr-only"
                  />
                  <div className="peer h-5 w-9 rounded-full bg-gray-300 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#10B981] peer-checked:after:translate-x-4 peer-focus:outline-none"></div>
                </label>
              </div>
            </div>
          );
        })}

        {/* View All Button */}
        <button className="w-full rounded-lg bg-[#10B981] py-3 text-white">
          View Full History
        </button>
      </div>
    </div>
  );
}