import BookingCard from "@/components/booking/BookingCard";
import EmptyState from "@/components/ui/EmptyState";
import { Calendar } from "lucide-react";
import { useBookingsStore } from "@/store/bookingsStore";

export default function BookingsPage() {
  const { bookings } = useBookingsStore();

  return (
       <>
        <h1 className="text-2xl font-bold text-foreground mb-6">My Bookings</h1>
        {bookings.length === 0 ? (
          <EmptyState
            message="You have no bookings yet"
            icon={<Calendar className="h-12 w-12 mb-4 opacity-40 text-muted-foreground" />}
          />
        ) : (
          <div className="space-y-4">
            {bookings.map((b) => (
              <BookingCard key={b.id} booking={b} />
            ))}
          </div>
        )}</>
  );
}
