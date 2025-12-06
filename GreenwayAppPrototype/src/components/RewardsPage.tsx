import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Gift, Clock, MapPin } from "lucide-react";

const rewards = [
  {
    id: 1,
    title: "20% Off at Green Cafe",
    description: "Get 20% discount on all beverages when you show your eco-points",
    image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDF8fHx8MTc2MzUyNDU5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    points: 150,
    validTill: "31 Dec 2025",
    location: "Downtown Branch",
    category: "Food & Beverage",
  },
  {
    id: 2,
    title: "Free Meal Upgrade",
    description: "Upgrade your meal to premium at participating restaurants",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZHxlbnwxfHx8fDE3NjM0MzMwMDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    points: 200,
    validTill: "28 Feb 2026",
    location: "Multiple Locations",
    category: "Food & Beverage",
  },
  {
    id: 3,
    title: "15% Shopping Voucher",
    description: "Save 15% on sustainable products at eco-friendly stores",
    image: "https://images.unsplash.com/photo-1601924623211-3f19dc356e42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMHJldGFpbHxlbnwxfHx8fDE3NjM0NjYyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    points: 180,
    validTill: "31 Jan 2026",
    location: "EcoMart Stores",
    category: "Shopping",
  },
  {
    id: 4,
    title: "Free Gym Day Pass",
    description: "Enjoy a complimentary day pass at premium fitness centers",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzfGVufDF8fHx8MTc2MzU0MDg2Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    points: 100,
    validTill: "30 Nov 2025",
    location: "FitZone Gyms",
    category: "Fitness",
  },
  {
    id: 5,
    title: "Spa Treatment Discount",
    description: "Get 25% off on spa treatments and wellness packages",
    image: "https://images.unsplash.com/photo-1554424518-336ec861b705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjM0NjU4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    points: 250,
    validTill: "31 Mar 2026",
    location: "Serenity Spa",
    category: "Wellness",
  },
  {
    id: 6,
    title: "Movie Ticket Offer",
    description: "Buy 1 Get 1 free on movie tickets at select theaters",
    image: "https://images.unsplash.com/photo-1739433437912-cca661ba902f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMGNpbmVtYXxlbnwxfHx8fDE3NjM1MjAwNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    points: 120,
    validTill: "31 Dec 2025",
    location: "CineMax Theaters",
    category: "Entertainment",
  },
];

export function RewardsPage() {
  return (
    <div className="flex h-full w-full flex-col bg-white">
      {/* Header */}
      <div className="bg-[#10B981] px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white">Rewards</p>
            <p className="text-sm text-white/90">Redeem your eco-points</p>
          </div>
          <div className="rounded-lg bg-white/20 px-3 py-2">
            <p className="text-xs text-white/90">Your Points</p>
            <p className="text-white">1320</p>
          </div>
        </div>
      </div>

      {/* Rewards List */}
      <div className="flex-1 overflow-y-auto px-4 pb-24 pt-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-sm text-gray-600">Available Offers</p>
          <button className="text-sm text-[#10B981]">Filter</button>
        </div>

        {/* Reward Cards */}
        <div className="space-y-3">
          {rewards.map((reward) => (
            <div
              key={reward.id}
              className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="flex gap-3 p-3">
                {/* Image */}
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                  <ImageWithFallback
                    src={reward.image}
                    alt={reward.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col">
                  <div className="mb-1 flex items-start justify-between gap-2">
                    <p className="text-black">{reward.title}</p>
                    <div className="flex items-center gap-1 rounded-full bg-[#10B981] px-2 py-0.5">
                      <Gift className="h-3 w-3 text-white" />
                      <span className="text-xs text-white">{reward.points}</span>
                    </div>
                  </div>

                  <p className="mb-2 text-xs text-gray-600">{reward.description}</p>

                  <div className="mt-auto space-y-1">
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      <span>Valid till {reward.validTill}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <MapPin className="h-3 w-3" />
                      <span>{reward.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redeem Button */}
              <div className="border-t border-gray-100 bg-gray-50 px-3 py-2">
                <button className="w-full rounded-md bg-[#10B981] py-2 text-sm text-white transition-colors hover:bg-[#0d9668]">
                  Redeem Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="mt-4 rounded-lg bg-[#f0fdf4] p-4">
          <p className="mb-2 text-sm text-black">How to earn more points?</p>
          <p className="text-xs text-gray-600">
            Take eco-friendly routes, use public transport, walk or cycle to earn more points
            and unlock exclusive rewards!
          </p>
        </div>
      </div>
    </div>
  );
}
