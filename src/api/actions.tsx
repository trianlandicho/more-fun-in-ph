import type { Destination } from "./models/destination";

// Mock data for destinations
const mockDestinations: Destination[] = [
  {
    id: 1,
    desc: "A premier tropical paradise, Boracay is world-famous for its stunning 4-kilometer White Beach, featuring powdery white sand and crystal-clear turquoise waters.",
    shortDesc: "A tropical paradise famed for its powdery white sand beaches.",
    location: "Boracay",
    howToGetThere:
      "Fly into Caticlan Airport (MPH), take a tricycle to the jetty port, and then a 15-minute ferry to the island.",
    activities: [
      "Relaxing on White Beach",
      "Sunset paraw sailing",
      "Water sports (parasailing, jet skiing)",
      "Island hopping to Puka Beach",
      "Exploring the shops at D'Mall",
    ],
    accommodations: [
      "Shangri-La Boracay",
      "The Lind Boracay",
      "Henann Crystal Sands Resort",
      "Coast Boracay",
      "Mad Monkey Boracay",
    ],
  },
  {
    id: 2,
    desc: "Experience a nature lover's paradise in Bohol, famous for the unique Chocolate Hills, the tiny Philippine Tarsier, and the beautiful white-sand beaches of Panglao Island.",
    shortDesc:
      "An island of natural wonders, from the Chocolate Hills to pristine beaches.",
    location: "Bohol",
    howToGetThere:
      "Fly directly into Bohol-Panglao International Airport (TAG), located on Panglao Island for easy access to beach resorts.",
    activities: [
      "Bohol Countryside Tour (Chocolate Hills & Tarsiers)",
      "Loboc River Cruise",
      "Diving and snorkeling at Balicasag Island",
      "Relaxing on Alona Beach",
      "Exploring Hinagdanan Cave",
    ],
    accommodations: [
      "Amorita Resort",
      "Henann Resort Alona Beach",
      "Bohol Beach Club",
      "The Bellevue Resort",
      "Fox & The Firefly Cottages",
    ],
  },
  {
    id: 3,
    desc: "A world-class destination in Palawan, El Nido is renowned for its stunning Bacuit Archipelago, featuring towering limestone karst cliffs, hidden lagoons, and dozens of pristine white-sand beaches.",
    shortDesc: "A paradise of limestone cliffs, lagoons, and pristine beaches.",
    location: "El Nido, Palawan",
    howToGetThere:
      "Fly directly to Lio Airport (ENI) via select airlines, or fly to Puerto Princesa (PPS) and take a 5-6 hour van ride to El Nido town.",
    activities: [
      "Island hopping tours (Tour A, B, C, D)",
      "Kayaking in the Big and Small Lagoons",
      "Snorkeling and diving in Bacuit Bay",
      "Relaxing on Nacpan Beach",
      "Chasing waterfalls like Kuang-kuang",
    ],
    accommodations: [
      "El Nido Resorts Lagen Island",
      "El Nido Resorts Miniloc Island",
      "Seda Lio",
      "Maremegmeg Beach Club",
      "Spin Designer Hostel",
    ],
  },
  {
    id: 4,
    desc: "As the 'Queen City of the South,' Cebu offers a perfect blend of urban excitement, rich Spanish colonial history, and stunning natural attractions like waterfalls and world-class dive spots.",
    shortDesc:
      "A vibrant hub blending city life with incredible natural wonders.",
    location: "Cebu",
    howToGetThere:
      "Fly into Mactan-Cebu International Airport (CEB), a major international gateway with numerous domestic and international flights.",
    activities: [
      "Canyoneering at Kawasan Falls",
      "Diving with the sardine run in Moalboal",
      "Swimming with whale sharks in Oslob",
      "Visiting historical sites like Magellan's Cross",
      "Island hopping in Mactan",
    ],
    accommodations: [
      "Shangri-La Mactan, Cebu",
      "Crimson Resort and Spa Mactan",
      "Radisson Blu Cebu",
      "Seda Central Bloc Cebu",
      "Mad Monkey Cebu City",
    ],
  },
  {
    id: 5,
    desc: "As the main hub of Mindanao, Davao is a bustling urban center known for its fresh produce like the famous Durian, its proximity to Mount Apo, and the endangered Philippine Eagle.",
    shortDesc: "A bustling urban center known for durian and Mount Apo.",
    location: "Davao",
    howToGetThere:
      "Fly directly into Francisco Bangoy International Airport (DVO), which serves numerous domestic and some international flights.",
    activities: [
      "Visiting the Philippine Eagle Center",
      "Exploring Eden Nature Park",
      "Island hopping to Samal Island",
      "Trying durian and other local fruits",
      "Visiting the Davao Crocodile Park",
    ],
    accommodations: [
      "Seda Abreeza Davao",
      "DusitD2 Davao",
      "Park Inn by Radisson Davao",
      "Acacia Hotel Davao",
      "Pearl Farm Beach Resort (Samal Island)",
    ],
  },
  {
    id: 6,
    desc: "Known as the 'Summer Capital of the Philippines,' Baguio is a mountain city famed for its cool climate, pine-scented air, vibrant parks, and rich indigenous culture.",
    shortDesc:
      "The 'Summer Capital of the Philippines' with a cool mountain climate.",
    location: "Baguio",
    howToGetThere:
      "Typically reached by a 4-6 hour bus ride from Metro Manila, with daily trips from several major terminals.",
    activities: [
      "Boating at Burnham Park",
      "Visiting Camp John Hay",
      "Strawberry picking at La Trinidad",
      "Exploring the BenCab Museum",
      "Shopping at Baguio City Market",
    ],
    accommodations: [
      "The Manor at Camp John Hay",
      "Grand Sierra Pines Baguio",
      "The Forest Lodge at Camp John Hay",
      "Microtel by Wyndham Baguio",
      "G1 Lodge",
    ],
  },
  {
    id: 7,
    desc: "Recognized as the 'Surfing Capital of Northern Luzon,' La Union ('Elyu') is a coastal province famous for its consistent waves, lively surf culture, and a growing scene of artisanal cafes.",
    shortDesc: "The vibrant 'Surfing Capital of Northern Luzon.'",
    location: "La Union",
    howToGetThere:
      "Accessible via a 4-5 hour bus ride or private car from Metro Manila, with San Juan being the main tourist drop-off point.",
    activities: [
      "Surfing lessons in San Juan",
      "Visiting Tangadan Falls",
      "Food trip at local cafes and restaurants",
      "Grape picking at local farms",
      "Enjoying the laid-back beach nightlife",
    ],
    accommodations: [
      "Aureo La Union",
      "Kahuna Beach Resort and Spa",
      "The Escape San Juan",
      "Flotsam and Jetsam Artist Beach Hostel",
      "Urbiztondoz Beach Resort",
    ],
  },

  {
    id: 8,
    desc: "Crowned the 'Surfing Capital of the Philippines,' Siargao is a tear-drop shaped island famous for its world-class waves like Cloud 9, vast coconut palm forests, and crystal-clear lagoons.",
    shortDesc:
      "The 'Surfing Capital of the Philippines' with world-class waves.",
    location: "Siargao",
    howToGetThere:
      "Fly directly to Siargao's Sayak Airport (IAO) and take a 45-minute van ride to the main tourist area of General Luna.",
    activities: [
      "Surfing at Cloud 9",
      "Tri-island hopping (Naked, Daku, Guyam)",
      "Swimming at Magpupungko Rock Pools",
      "Kayaking in Sugba Lagoon",
      "Exploring the Tayangban Cave Pool",
    ],
    accommodations: [
      "Nay Palad Hideaway",
      "Siama Hotel Siargao",
      "Bravo Beach Resort",
      "Kermit Surf Resort and Restaurant",
      "Mad Monkey Siargao",
    ],
  },

  {
    id: 9,
    desc: "The capital of the Philippines, Manila is a bustling metropolis and a city of contrasts, where modern skyscrapers stand alongside Spanish colonial-era architecture. It is the country's economic, political, and cultural heart.",
    shortDesc: "The historic and bustling capital city of the Philippines.",
    location: "Manila",
    howToGetThere:
      "Fly into Ninoy Aquino International Airport (NAIA), the country's main international gateway, connecting Manila to the world.",
    activities: [
      "Exploring the walled city of Intramuros",
      "Visiting the National Museum Complex",
      "Watching the sunset at Manila Bay",
      "Shopping at SM Mall of Asia",
      "Going on a food tour in Binondo Chinatown",
    ],
    accommodations: [
      "The Peninsula Manila",
      "Conrad Manila",
      "Sofitel Philippine Plaza Manila",
      "Okada Manila",
      "Red Planet Manila Bay",
    ],
  },
  {
    id: 10,
    desc: "The northernmost province of the Philippines, Batanes is an breathtaking archipelago famous for its dramatic landscapes, rolling hills, rugged coastlines, and unique Ivatan stone houses.",
    shortDesc:
      "Breathtaking northern province with rolling hills and stone houses.",
    location: "Batanes",
    howToGetThere:
      "Fly to Basco Airport (BSO) from Manila or Clark. Flights are limited and subject to weather conditions.",
    activities: [
      "Touring North and South Batan Island",
      "Visiting the traditional Ivatan stone houses",
      "Taking photos at the rolling hills and lighthouses",
      "Exploring the stunning island of Sabtang",
      "Biking around Batan island",
    ],
    accommodations: [
      "Fundacion Pacita Batanes Nature Lodge",
      "Amboy Hometel",
      "Bernardo's Hotel",
      "Shanedel's Inn & Cafe",
      "Dive Batanes Lodge",
    ],
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
