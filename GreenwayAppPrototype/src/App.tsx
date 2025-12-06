import { MapView } from "./components/MapView";
import { SearchHeader } from "./components/SearchHeader";
import { BottomNav } from "./components/BottomNav";
import { SummaryPage } from "./components/SummaryPage";
import { LeaderboardPage } from "./components/LeaderboardPage";
import { ProfilePage } from "./components/ProfilePage";
import { RewardsPage } from "./components/RewardsPage";
import { NavigationHeader } from "./components/NavigationHeader";
import { NavigationView } from "./components/NavigationView";
import { RouteDetailsCard } from "./components/RouteDetailsCard";
import { useState } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"map" | "summary" | "leaderboard" | "profile" | "rewards">("map");
  const [isNavigating, setIsNavigating] = useState(false);
  const [destination, setDestination] = useState("");
  const [from, setFrom] = useState("Bristol Temple Meads");
  const [selectedRoute, setSelectedRoute] = useState<"route1" | "route2">("route1");

  const handleDestinationEnter = (dest: string) => {
    if (dest.trim()) {
      setDestination(dest);
      setIsNavigating(true);
    }
  };

  const handleSwap = () => {
    const temp = from;
    setFrom(destination);
    setDestination(temp);
  };

  const handleBackToSearch = () => {
    setIsNavigating(false);
    setDestination("");
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900">
      <div className="relative h-full w-full max-w-[360px] overflow-hidden bg-white">
        {currentPage === "map" ? (
          <>
            {isNavigating ? (
              <>
                <NavigationView 
                  selectedRoute={selectedRoute}
                  onRouteSelect={setSelectedRoute}
                />
                <NavigationHeader
                  from={from}
                  to={destination}
                  onSwap={handleSwap}
                  onBack={handleBackToSearch}
                />
                <RouteDetailsCard selectedRoute={selectedRoute} onClose={handleBackToSearch} />
              </>
            ) : (
              <>
                <MapView />
                <SearchHeader onDestinationEnter={handleDestinationEnter} />
              </>
            )}
          </>
        ) : currentPage === "summary" ? (
          <SummaryPage 
            onNavigateToLeaderboard={() => setCurrentPage("leaderboard")}
          />
        ) : currentPage === "leaderboard" ? (
          <LeaderboardPage onBack={() => setCurrentPage("summary")} />
        ) : currentPage === "rewards" ? (
          <RewardsPage />
        ) : (
          <ProfilePage />
        )}
        {currentPage !== "leaderboard" && (
          <BottomNav 
            currentPage={currentPage === "map" || currentPage === "summary" || currentPage === "profile" || currentPage === "rewards" ? currentPage : "map"} 
            onPageChange={(page) => setCurrentPage(page)} 
          />
        )}
      </div>
    </div>
  );
}