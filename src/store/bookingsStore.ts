import { create } from "zustand";
import { Booking } from "@/types/booking";
import { getDatesInRange } from "@/lib/utils";

interface BookingsStore {
  bookings: Booking[];
  bookingIndex: Map<string, Set<string>>;
  createBooking: (booking: Omit<Booking, "id">) => Promise<void>;
  setSelectedRoom: (room: unknown) => void;
  setSelectedDate: (date: string) => void;
  setSelectedTimeSlot: (timeSlot: string | null) => void;
  selectedRoom: unknown;
  selectedDate: string;
  selectedTimeSlot: string | null;
}

export const useBookingsStore = create<BookingsStore>((set) => ({
  bookings: [],
  creatingBooking: false,
  bookingIndex: new Map(),
  createBooking: async (bookingData) => {
    const newBooking: Booking = {
      ...bookingData,
      id: Date.now().toString(),
    };
    set((state) => {
      const newBookings = [...state.bookings, newBooking];
      const newBookingIndex = new Map(state.bookingIndex);

      if (!newBookingIndex.has(newBooking.roomId)) {
        newBookingIndex.set(newBooking.roomId, new Set());
      }

      const roomDates = newBookingIndex.get(newBooking.roomId)!;
      const dates = getDatesInRange(newBooking.startDate, newBooking.endDate);

      dates.forEach((date) => roomDates.add(date));

      return {
        bookings: newBookings,
        bookingIndex: newBookingIndex,
      };
    });
  },
  selectedRoom: null,
  selectedDate: "",
  selectedTimeSlot: null,
  setSelectedRoom: (room) => set({ selectedRoom: room }),
  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedTimeSlot: (timeSlot) => set({ selectedTimeSlot: timeSlot }),
}));
