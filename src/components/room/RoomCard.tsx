import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Room } from "@/types/room";

interface RoomCardProps {
  room: Room;
}

const RoomCard = React.memo(function RoomCard({ room }: RoomCardProps) {
  const navigate = useNavigate();

  return (
    <div
      className="group cursor-pointer animate-fade-in"
      onClick={() => navigate(`/rooms/${room.id}`)}
    >
      {/* Image */}
      <div className="relative aspect-square rounded-xl overflow-hidden mb-3">
        <img
          src={room.images[0]}
          alt={room.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div className="space-y-0.5">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-foreground text-[15px] truncate pr-2">
            {room.title}
          </h3>
          <div className="flex items-center gap-1 flex-shrink-0">
            <Star className="h-3.5 w-3.5 fill-foreground text-foreground" />
            <span className="text-sm font-medium text-foreground">{room.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{room.location}</p>
        <p className="text-sm text-muted-foreground">Up to {room.maxGuests} guests</p>
        <p className="text-[15px] text-foreground mt-1">
          <span className="font-semibold">${room.pricePerNight}</span>{" "}
          <span className="font-normal">night</span>
        </p>
      </div>
    </div>
  );
});

export default RoomCard;
