import imgImage1 from "figma:asset/b8a2b677834e526d26ab9ca907bf94c210462802.png";

export function MapView() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-gray-100">
      {/* Map Background */}
      <div className="absolute inset-0">
        <img
          src={imgImage1}
          alt="City map"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}