import { useState, useMemo } from "react";
import { Search, X, Calendar } from "lucide-react";
import RoomGrid from "@/components/room/RoomGrid";
import { mockRooms } from "@/data/rooms";
import { useBookingsStore } from "@/store/bookingsStore";
import { isRoomAvailableOnDate } from "@/lib/utils";

export default function DashboardPage() {
  const { bookingIndex } = useBookingsStore();
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const filteredRooms = useMemo(() => {
    let rooms = mockRooms;

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      rooms = rooms.filter(
        (room) =>
          room.title.toLowerCase().includes(query) ||
          room.location.toLowerCase().includes(query)
      );
    }

    if (filterDate) {
      rooms = rooms.filter((room) =>
        isRoomAvailableOnDate(room.id, filterDate, bookingIndex)
      );
    }

    return rooms;
  }, [searchQuery, filterDate, bookingIndex]);

  const hasActiveFilters = searchQuery.trim() || filterDate;
  return (
    <>
      <div className="mb-8 space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name or location..."
              className="w-full pl-11 pr-10 py-3 border border-border rounded-full text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:shadow-md transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="relative">
            <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
            <input
              type="date"
              value={filterDate}
              min={today}
              onChange={(e) => setFilterDate(e.target.value)}
              className="pl-11 pr-10 py-3 border border-border rounded-full text-sm text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-ring focus:shadow-md transition-all min-w-[200px]"
            />
            {filterDate && (
              <button
                onClick={() => setFilterDate("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {hasActiveFilters && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground animate-fade-in">
            <span>
              {filteredRooms.length} {filteredRooms.length === 1 ? "place" : "places"} found
            </span>
            {hasActiveFilters && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setFilterDate("");
                }}
                className="text-primary font-semibold hover:underline"
              >
                Clear all
              </button>
            )}
          </div>
        )}
      </div>

      <RoomGrid rooms={filteredRooms} /></>
  );
}
