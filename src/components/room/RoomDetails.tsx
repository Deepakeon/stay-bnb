import { Star, Users, MapPin } from "lucide-react";
import type { Room } from "@/types/room";

interface RoomDetailsProps {
  room: Room;
}

export default function RoomDetails({ room }: RoomDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">{room.title}</h1>
        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm">
          <span className="flex items-center gap-1 font-semibold">
            <Star className="h-4 w-4 fill-foreground text-foreground" />
            {room.rating}
          </span>
          <span className="text-muted-foreground">·</span>
          <span className="flex items-center gap-1 text-muted-foreground underline">
            <MapPin className="h-4 w-4" />
            {room.location}
          </span>
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <div className="flex items-center gap-3 mb-4">
          <Users className="h-5 w-5 text-foreground" />
          <span className="text-foreground font-medium">Up to {room.maxGuests} guests</span>
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <h2 className="text-lg font-semibold text-foreground mb-3">About this place</h2>
        <p className="text-foreground leading-relaxed">{room.description}</p>
      </div>
    </div>
  );
}
