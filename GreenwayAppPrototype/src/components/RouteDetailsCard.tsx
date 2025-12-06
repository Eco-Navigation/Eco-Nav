import { Clock, Leaf, Bus, TrendingDown, X } from "lucide-react";

interface RouteDetailsCardProps {
  selectedRoute: "route1" | "route2";
  onClose?: () => void;
}

const routeData = {
  route1: {
    duration: "45 min",
    co2Saved: "850g",
    modes: ["Bus", "Walk"],
    distance: "4.2 km",
    emissions: "120g CO₂",
    steps: [
      { type: "walk", duration: "12 min", description: "Walk to Bus Stop" },
      { type: "bus", duration: "25 min", description: "Bus 48 via City Loop" },
      { type: "walk", duration: "8 min", description: "Walk to destination" }
    ]
  },
  route2: {
    duration: "32 min",
    co2Saved: "450g",
    modes: ["Bus", "Walk"],
    distance: "6.8 km",
    emissions: "320g CO₂",
    steps: [
      { type: "walk", duration: "8 min", description: "Walk to Bus Stop" },
      { type: "bus", duration: "18 min", description: "Bus 72 to City Centre" },
      { type: "walk", duration: "6 min", description: "Walk to destination" }
    ]
  }
};

export function RouteDetailsCard({ selectedRoute, onClose }: RouteDetailsCardProps) {
  const route = routeData[selectedRoute];

  return (
    <div className="absolute bottom-16 left-0 right-0 z-20 mx-3 mb-3 rounded-lg bg-white p-4 shadow-lg">
      {/* Main stats */}
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-[#10B981]" />
          <div>
            <p className="text-black">{route.duration}</p>
            <p className="text-xs text-gray-600">{route.distance}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Leaf className="h-5 w-5 text-[#10B981]" />
          <div>
            <p className="text-black">{route.co2Saved} saved</p>
            <p className="text-xs text-gray-600">vs. driving</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <TrendingDown className="h-5 w-5 text-[#10B981]" />
          <div>
            <p className="text-black">{route.emissions}</p>
            <p className="text-xs text-gray-600">emissions</p>
          </div>
        </div>
      </div>

      {/* Route steps */}
      <div className="border-t border-gray-200 pt-3">
        <p className="mb-2 text-sm text-black">Route Details</p>
        <div className="space-y-2">
          {route.steps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f0fdf4]">
                {step.type === "bus" ? (
                  <Bus className="h-4 w-4 text-[#10B981]" />
                ) : (
                  <span className="text-sm">🚶</span>
                )}
              </div>
              <div className="flex-1">
                <p className="text-sm text-black">{step.description}</p>
                <p className="text-xs text-gray-600">{step.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action button */}
      <button className="mt-4 w-full rounded-lg bg-[#10B981] py-3 text-white transition-colors hover:bg-[#0d9668]">
        Start Navigation
      </button>

      {/* Close button */}
      {onClose && (
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          <X className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}