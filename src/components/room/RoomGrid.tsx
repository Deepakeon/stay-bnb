import type { Room } from "@/types/room";
import RoomCard from "./RoomCard";
import EmptyState from "@/components/ui/EmptyState";

interface RoomGridProps {
  rooms: Room[];
}

export default function RoomGrid({ rooms }: RoomGridProps) {
  if (rooms.length === 0) return <EmptyState message="No rooms available" />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {rooms.map((room) => (
        <RoomCard key={room.id} room={room} />
      ))}
    </div>
  );
}
