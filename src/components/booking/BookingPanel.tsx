import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Star, Calendar, DollarSign, CheckCircle } from "lucide-react";
import { useBookings } from "@/hooks/useBookings";
import type { Room } from "@/types/room";

type BookingStatus = "idle" | "loading" | "success" | "error";

interface BookingPanelProps {
  room: Room;
}

export default function BookingPanel({ room }: BookingPanelProps) {
  const navigate = useNavigate();
  const { getNextDay, getPricing, isRoomAvailable, reserveRoom } = useBookings();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [status, setStatus] = useState<BookingStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const isAvailable = useMemo(
    () => isRoomAvailable(room.id, startDate, endDate),
    [room.id, startDate, endDate, isRoomAvailable]
  );

  const pricing = useMemo(
    () => getPricing(startDate, endDate, room.pricePerNight),
    [startDate, endDate, room.pricePerNight, getPricing]
  );

  const handleStartDateChange = (value: string) => {
    setStartDate(value);

    const next = getNextDay(value);
    setEndDate((prev) => (!prev || prev <= value ? next : prev));

    setStatus("idle");
  };

  const handleReserve = async () => {
    if (!startDate || !endDate) {
      setErrorMessage("Please select check-in and check-out dates.");
      setStatus("error");
      return;
    }

    if (!isAvailable) {
      setErrorMessage("Selected dates are not available.");
      setStatus("error");
      return;
    }

    setStatus("loading");

    await reserveRoom(
      room.id,
      "1",
      startDate,
      endDate,
      pricing.grandTotal
    );

    setStatus("success");
    navigate("/bookings")
  };

  return (
    <div className="airbnb-panel sticky top-28">
      <div className="flex items-baseline justify-between mb-6">
        <div>
          <span className="text-xl font-bold flex items-center gap-2">
            <DollarSign className="w-5 h-5" />
            ${room.pricePerNight}
          </span>
          <span> night</span>
        </div>

        <div className="flex items-center gap-1 text-sm">
          <Star className="h-4 w-4 fill-foreground text-foreground" />
          <span className="font-semibold">{room.rating}</span>
        </div>
      </div>

      <div className="border border-border rounded-xl overflow-visible mb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x divide-border">

          <div className="p-3 space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Check-in
            </label>

            <input
              type="date"
              value={startDate}
              onChange={(e) => handleStartDateChange(e.target.value)}
              min={today}
              className="w-full min-w-0 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="p-3 space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              Checkout
            </label>

            <input
              type="date"
              value={endDate}
              onChange={(e) => {
                setEndDate(e.target.value);
                setStatus("idle");
              }}
              min={getNextDay(startDate || today)}
              className="w-full min-w-0 px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

        </div>
      </div>

      {!isAvailable && startDate && endDate && (
        <p className="text-destructive text-sm mb-3">
          These dates are not available.
        </p>
      )}

      {status === "error" && (
        <p className="text-destructive text-sm mb-3">{errorMessage}</p>
      )}

      {status === "success" && (
        <p className="text-sm mb-3 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-green-500" />
          Booking confirmed! Redirecting...
        </p>
      )}

      <button
        onClick={handleReserve}
        disabled={!isAvailable || status === "loading" || status === "success"}
        className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:brightness-95 disabled:opacity-50"
      >
        {status === "loading" ? "Processing..." : "Reserve"}
      </button>

      {pricing.nights > 0 && isAvailable && (
        <div className="mt-5 space-y-3 text-sm">
          <p className="text-center text-muted-foreground">
            You won't be charged yet
          </p>

          <div className="flex justify-between">
            <span className="underline">
              ${room.pricePerNight} × {pricing.nights} nights
            </span>
            <span>${pricing.totalPrice}</span>
          </div>

          <div className="flex justify-between">
            <span className="underline">Service fee</span>
            <span>${pricing.serviceFee}</span>
          </div>

          <div className="flex justify-between font-semibold border-t pt-3">
            <span>Total</span>
            <span>${pricing.grandTotal}</span>
          </div>
        </div>
      )}
    </div>
  );
}