import imgMapBackground from "figma:asset/e91ea341f910781a4e49a0e6db852d5fce59c4bd.png";
import { MapPin } from "lucide-react";

interface NavigationViewProps {
  selectedRoute: "route1" | "route2";
  onRouteSelect: (route: "route1" | "route2") => void;
}

export function NavigationView({ selectedRoute, onRouteSelect }: NavigationViewProps) {
  return (
    <div className="relative h-full w-full">
      {/* Map Background */}
      <div className="absolute inset-0">
        <img
          src={imgMapBackground}
          alt="Map"
          className="h-full w-full object-cover"
          style={{ objectPosition: "20% 50%" }}
        />
      </div>

      {/* Route 1 - Primary route */}
      <svg
        className="absolute left-0 top-0 h-full w-full pointer-events-none"
        viewBox="0 0 360 920"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 195 185 S 210 220, 218 250 T 180 270 C 195 320, 187 345, 170 360 Q 165 380, 182 399 T 199 418 S 217 437, 234 456 S 251 474, 268 493 S 286 512, 303 531 S 320 550, 320 550"
          stroke={selectedRoute === "route1" ? "#00BB28" : "#BCBCBC"}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          strokeDasharray="5 10"
          onClick={() => onRouteSelect("route1")}
          className="cursor-pointer transition-all pointer-events-auto"
          style={{ 
            strokeDasharray: selectedRoute === "route1" ? "none" : "5 10",
            opacity: selectedRoute === "route1" ? 1 : 0.6
          }}
        />

        {selectedRoute === "route1" && (
          <>
            <circle cx="195" cy="185" r="6" fill="#00BB28" />
            <circle cx="210" cy="220" r="6" fill="#00BB28" />
            <circle cx="218" cy="250" r="6" fill="#00BB28" />
            <circle cx="180" cy="270" r="6" fill="#00BB28" />
            <circle cx="195" cy="320" r="6" fill="#00BB28" />
            <circle cx="187" cy="345" r="6" fill="#00BB28" />
            <circle cx="170" cy="360" r="6" fill="#00BB28" />
            <circle cx="165" cy="380" r="6" fill="#00BB28" />
            <circle cx="182" cy="399" r="6" fill="#00BB28" />
            <circle cx="199" cy="418" r="6" fill="#00BB28" />
            <circle cx="217" cy="437" r="6" fill="#00BB28" />
            <circle cx="234" cy="456" r="6" fill="#00BB28" />
            <circle cx="251" cy="474" r="6" fill="#00BB28" />
            <circle cx="268" cy="493" r="6" fill="#00BB28" />
            <circle cx="286" cy="512" r="6" fill="#00BB28" />
            <circle cx="303" cy="531" r="6" fill="#00BB28" />
            <circle cx="320" cy="550" r="6" fill="#00BB28" />
          </>
        )}
      </svg>
      
      {/* Route 2 - Alternative route */}
      <svg
        className="absolute left-0 top-0 h-full w-full pointer-events-none"
        viewBox="0 0 360 920"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M 175 175 S 150 190, 125 200 T 100 210 Q 105 235, 110 260 T 120 290 S 95 302, 70 315 S 45 330, 40 355 S 55 380, 84 420 S 114 445, 143 460 S 173 480, 202 500 S 232 530, 261 570 S 291 550, 320 550"
          stroke={selectedRoute === "route2" ? "#00BB28" : "#BCBCBC"}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          onClick={() => onRouteSelect("route2")}
          className="cursor-pointer transition-all pointer-events-auto"
          style={{ 
            strokeDasharray: selectedRoute === "route2" ? "none" : "5 10",
            opacity: selectedRoute === "route2" ? 1 : 0.6
          }}
        />
        
        {selectedRoute === "route2" && (
          <>
            <circle cx="175" cy="175" r="6" fill="#00BB28" />
            <circle cx="150" cy="190" r="6" fill="#00BB28" />
            <circle cx="125" cy="200" r="6" fill="#00BB28" />
            <circle cx="100" cy="210" r="6" fill="#00BB28" />
            <circle cx="105" cy="235" r="6" fill="#00BB28" />
            <circle cx="110" cy="260" r="6" fill="#00BB28" />
            <circle cx="120" cy="290" r="6" fill="#00BB28" />
            <circle cx="95" cy="302" r="6" fill="#00BB28" />
            <circle cx="70" cy="315" r="6" fill="#00BB28" />
            <circle cx="45" cy="330" r="6" fill="#00BB28" />
            <circle cx="40" cy="355" r="6" fill="#00BB28" />
            <circle cx="55" cy="380" r="6" fill="#00BB28" />
            <circle cx="84" cy="420" r="6" fill="#00BB28" />
            <circle cx="114" cy="445" r="6" fill="#00BB28" />
            <circle cx="143" cy="460" r="6" fill="#00BB28" />
            <circle cx="173" cy="480" r="6" fill="#00BB28" />
            <circle cx="202" cy="500" r="6" fill="#00BB28" />
            <circle cx="232" cy="530" r="6" fill="#00BB28" />
            <circle cx="261" cy="570" r="6" fill="#00BB28" />
            <circle cx="291" cy="550" r="6" fill="#00BB28" />
            <circle cx="320" cy="550" r="6" fill="#00BB28" />
          </>
        )}
      </svg>

      {/* Start marker */}
      <div className="absolute left-[204px] top-[705px]">
        <div className="rounded-full bg-[#00BB28] p-1.5">
          <div className="h-3 w-3 rounded-full bg-white" />
        </div>
      </div>

      {/* End marker */}
      <div className="absolute left-[165px] top-[135px]">
        <MapPin className="h-8 w-8 fill-red-600 text-red-600" />
      </div>

      {/* Destination label */}
      <div className="absolute left-[195px] top-[140px] rounded-md bg-white px-2 py-1 shadow-md">
        <p className="text-xs text-black">Bristol Shopping Quarter</p>
      </div>
    </div>
  );
}