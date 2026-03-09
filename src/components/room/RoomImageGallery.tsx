import type { Room } from "@/types/room";

interface RoomImageGalleryProps {
  room: Room;
}

export default function RoomImageGallery({ room }: RoomImageGalleryProps) {
  return (
    <div className="rounded-xl overflow-hidden">
      <img
        src={room.images[0]}
        alt={room.title}
        className="w-full h-[300px] sm:h-[400px] lg:h-[480px] object-cover"
      />
    </div>
  );
}
