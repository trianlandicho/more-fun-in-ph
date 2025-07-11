import type { Destination } from "./models/destination";

// Mock data for destinations
const mockDestinations: Destination[] = [
  {
    id: 1,
    desc: "Beautiful beach with crystal clear water.",
    location: "Boracay",
  },
  {
    id: 2,
    desc: "Historic city with stunning architecture.",
    location: "Rome",
  },
  { id: 3, desc: "Snowy mountains perfect for skiing.", location: "Aspen" },
];

// Mock API function to fetch destinations
export const fetchDestinations = async (): Promise<Destination[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDestinations);
    }, 1000); // Simulate network delay
  });
};
