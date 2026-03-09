import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import RoomImageGallery from "@/components/room/RoomImageGallery";
import RoomDetails from "@/components/room/RoomDetails";
import BookingPanel from "@/components/booking/BookingPanel";
import { mockRooms } from "@/data/rooms";

export default function RoomDetailPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const navigate = useNavigate();

  const room = mockRooms.find((r) => r.id === roomId);

  if (!room) {
    return (
      <p className="text-center text-muted-foreground py-20">Room not found.</p>
    );
  }

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-1 text-sm font-semibold text-foreground mb-4 hover:underline"
      >
        <ArrowLeft className="h-4 w-4" /> Back
      </button>

      <RoomImageGallery room={room} />

      <div className="mt-8 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <RoomDetails room={room} />
        </div>
        <div className="w-full lg:w-[380px] flex-shrink-0">
          <BookingPanel room={room} />
        </div>
      </div></>
  );
}
