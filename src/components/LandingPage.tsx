import { useState, useEffect } from "react";
import { fetchDestinations } from "../api/actions"; // Import the mock API function
import type { Destination } from "../api/models/destination"; // Import the Destination model
// Import the Destination model

function LandingPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);

  // Fetch data from the mock API
  useEffect(() => {
    const getDestinations = async () => {
      const data = await fetchDestinations();
      setDestinations(data);
    };
    getDestinations();
  }, []);

  return (
    <div>
      <h1>Welcome to the Product Landing Page</h1>
      <p>Explore our destinations!</p>

      {/* Display the fetched destinations */}
      <ul>
        {destinations.map((destination) => (
          <li key={destination.id}>
            <h2>{destination.location}</h2>
            <p>{destination.desc}</p>
            <a href="/destination">View Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LandingPage;
