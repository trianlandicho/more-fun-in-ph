import type { Destination } from "./models/destination";

// Mock data for destinations
const mockDestinations: Destination[] = [
  {
    id: 1,
    desc: "Beautiful beach with crystal clear water.",
    shortDesc: "A tropical paradise with pristine beaches.",
    location: "Boracay",
    howToGetThere:
      "Fly to Honolulu International Airport and drive to the beach.",
    activities: ["Snorkeling", "Surfing", "Sunbathing"],
    accommodations: ["Beach Resort", "Vacation Rentals", "Luxury Hotels"],
  },
  {
    id: 2,
    desc: "Historic city with stunning architecture.",
    shortDesc: "Explore ancient ruins and vibrant culture.",
    location: "Rome",
    howToGetThere:
      "Fly to Leonardo da Vinci–Fiumicino Airport and take a taxi or train to the city center.",
    activities: ["Sightseeing", "Museum Tours", "Food Tasting"],
    accommodations: ["Boutique Hotels", "Luxury Apartments", "Hostels"],
  },
  {
    id: 3,
    desc: "Snowy mountains perfect for skiing.",
    shortDesc: "A winter wonderland for outdoor enthusiasts.",
    location: "Aspen",
    howToGetThere:
      "Fly to Aspen/Pitkin County Airport and take a shuttle to the ski resort.",
    activities: ["Skiing", "Snowboarding", "Hiking"],
    accommodations: ["Ski Lodges", "Cabins", "Luxury Resorts"],
  },
];

// Mock API function to fetch destinations
export const fetchDestinations = async (): Promise<Destination[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDestinations);
    }, 1000); // Simulate network delay
  });
};
