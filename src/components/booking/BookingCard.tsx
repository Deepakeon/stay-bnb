import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";
import type { Booking } from "@/types/booking";
import { mockRooms } from "@/data/rooms";

interface BookingCardProps {
  booking: Booking;
}

export default function BookingCard({ booking }: BookingCardProps) {
  const room = mockRooms.find((r) => r.id === booking.roomId);
  if (!room) return null;

  return (
    <div className="airbnb-card flex flex-col sm:flex-row overflow-hidden animate-fade-in">
      <div className="sm:w-64 h-48 sm:h-auto flex-shrink-0">
        <img
          src={room.images[0]}
          alt={room.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-1 p-5 space-y-2">
        <h3 className="font-semibold text-lg text-foreground">{room.title}</h3>
        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" /> {room.location}
        </p>
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          {format(new Date(booking.startDate), "MMM d, yyyy")} –{" "}
          {format(new Date(booking.endDate), "MMM d, yyyy")}
        </div>
        <p className="text-foreground font-semibold text-lg pt-1">
          Total: ${booking.totalPrice}
        </p>
      </div>
    </div>
  );
}
