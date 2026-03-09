export const getDatesInRange = (
  startDate: string,
  endDate: string
): string[] => {
  const dates: string[] = [];

  const current = new Date(startDate + "T00:00:00");
  const end = new Date(endDate + "T00:00:00");

  while (current < end) {
    dates.push(current.toISOString().split("T")[0]);
    current.setDate(current.getDate() + 1);
  }

  return dates;
};

export const checkAvailability = (
  roomId: string,
  startDate: string,
  endDate: string,
  bookingIndex: Map<string, Set<string>>
): boolean => {
  const roomDates = bookingIndex.get(roomId);

  if (!roomDates) return true;

  const current = new Date(startDate + "T00:00:00");
  const end = new Date(endDate + "T00:00:00");

  while (current <= end) {
    const date = current.toISOString().split("T")[0];

    if (roomDates.has(date)) {
      return false;
    }

    current.setDate(current.getDate() + 1);
  }

  return true;
};

export const calculateNights = (startDate: string, endDate: string): number => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = end.getTime() - start.getTime();
  return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export const isRoomAvailableOnDate = (
  roomId: string,
  filterDate: string,
  bookingIndex: Map<string, Set<string>>
): boolean => {
  const date = new Date(filterDate + "T00:00:00")
    .toISOString()
    .split("T")[0];

  const roomBookings = bookingIndex.get(roomId);

  if (!roomBookings) return true;

  return !roomBookings.has(date);
};