import { calculateNights, checkAvailability } from "@/lib/utils";
import { useBookingsStore } from "@/store/bookingsStore";
import { toast } from "sonner";

export const useBookings = () => {
  const bookingIndex = useBookingsStore((state) => state.bookingIndex);
  const createBooking = useBookingsStore((state) => state.createBooking);

  const getNights = (startDate: string, endDate: string) => {
    if (!startDate || !endDate) return 0;
    return calculateNights(startDate, endDate);
  };

  const isRoomAvailable = (
    roomId: string,
    startDate: string,
    endDate: string
  ) => {
    if (!startDate || !endDate) return true;
    return checkAvailability(roomId, startDate, endDate, bookingIndex);
  };

  const getNextDay = (date: string) => {
    if (!date) return "";

    const d = new Date(date);
    d.setDate(d.getDate() + 1);

    return d.toISOString().split("T")[0];
  };

  const getPricing = (
    startDate: string,
    endDate: string,
    pricePerNight: number
  ) => {
    const nights = getNights(startDate, endDate);
    const totalPrice = nights * pricePerNight;
    const serviceFee = Math.round(totalPrice * 0.12);

    return {
      nights,
      totalPrice,
      serviceFee,
      grandTotal: totalPrice + serviceFee,
    };
  };

  const reserveRoom = async (
    roomId: string,
    userId: string,
    startDate: string,
    endDate: string,
    totalPrice: number
  ) => {
    await createBooking({
      roomId,
      userId,
      startDate,
      endDate,
      totalPrice,
    });
    toast.success("Booking confirmed!");
  };

  return {
    getNights,
    getNextDay,
    getPricing,
    isRoomAvailable,
    reserveRoom,
  };
}