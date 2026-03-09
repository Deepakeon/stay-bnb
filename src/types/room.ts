export interface Room {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  rating: number;
  images: string[];
  description: string;
  maxGuests: number;
}
