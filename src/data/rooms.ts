import room1 from "@/assets/rooms/room1.jpg";
import room2 from "@/assets/rooms/room2.jpg";
import room3 from "@/assets/rooms/room3.jpg";
import room4 from "@/assets/rooms/room4.jpg";
import room5 from "@/assets/rooms/room5.jpg";
import room6 from "@/assets/rooms/room6.jpg";
import room7 from "@/assets/rooms/room7.jpg";
import room8 from "@/assets/rooms/room8.jpg";
import type { Room } from "@/types/room";

export const mockRooms: Room[] = [
  {
    id: "1",
    title: "Modern City Apartment with Panoramic Views",
    location: "New York, United States",
    pricePerNight: 185,
    rating: 4.92,
    images: [room1],
    description: "Experience luxury living in this stunning modern apartment featuring floor-to-ceiling windows with breathtaking city views. The space includes a designer kitchen, premium furnishings, and a cozy reading nook. Located in the heart of Manhattan, you're steps away from world-class dining and entertainment.",
    maxGuests: 4,
  },
  {
    id: "2",
    title: "Beachfront Villa with Ocean Views",
    location: "Tulum, Mexico",
    pricePerNight: 320,
    rating: 4.97,
    images: [room2],
    description: "Wake up to the sound of waves in this stunning beachfront villa. Featuring white linens, tropical plants, and direct beach access. The perfect getaway for those seeking sun, sand, and serenity.",
    maxGuests: 6,
  },
  {
    id: "3",
    title: "Cozy Mountain Cabin with Fireplace",
    location: "Aspen, Colorado",
    pricePerNight: 275,
    rating: 4.89,
    images: [room3],
    description: "Escape to this charming mountain cabin featuring a roaring stone fireplace, rustic wooden beams, and panoramic mountain views. Curl up with a book or hit the slopes — adventure and relaxation await.",
    maxGuests: 8,
  },
  {
    id: "4",
    title: "Industrial Loft in Downtown",
    location: "Brooklyn, New York",
    pricePerNight: 165,
    rating: 4.85,
    images: [room4],
    description: "A stylish urban loft with exposed brick walls, industrial lighting, and a fully equipped modern kitchen. Enjoy stunning city skyline views from the oversized factory windows.",
    maxGuests: 3,
  },
  {
    id: "5",
    title: "Mediterranean Villa with Pool",
    location: "Santorini, Greece",
    pricePerNight: 450,
    rating: 4.98,
    images: [room5],
    description: "A breathtaking Mediterranean villa with a private infinity pool, sun-drenched terrace, and bougainvillea-covered walls. Watch unforgettable sunsets from your own paradise.",
    maxGuests: 8,
  },
  {
    id: "6",
    title: "Traditional Japanese Ryokan Suite",
    location: "Kyoto, Japan",
    pricePerNight: 210,
    rating: 4.94,
    images: [room6],
    description: "Immerse yourself in Japanese culture with this serene ryokan-style suite. Tatami mats, shoji screens, and a private zen garden view create the ultimate peaceful retreat.",
    maxGuests: 2,
  },
  {
    id: "7",
    title: "Tropical Jungle Treehouse",
    location: "Ubud, Bali",
    pricePerNight: 145,
    rating: 4.91,
    images: [room7],
    description: "Live among the treetops in this enchanting bamboo treehouse surrounded by lush tropical jungle. Features handcrafted furniture, hanging lanterns, and an open-air living experience.",
    maxGuests: 2,
  },
  {
    id: "8",
    title: "Scandinavian Design Studio",
    location: "Copenhagen, Denmark",
    pricePerNight: 130,
    rating: 4.87,
    images: [room8],
    description: "A beautifully curated Scandinavian apartment with light wood floors, designer furniture, and abundant natural light. Minimalist yet warm, it's the perfect base for exploring Copenhagen.",
    maxGuests: 2,
  },
];
