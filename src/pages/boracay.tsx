import { useState, useEffect } from "react";
import { fetchDestinations } from "../api/actions"; // Import the mock API function
import type { Destination } from "../api/models/destination"; // Import the Destination model

function Boracay() {
  const [destination, setDestination] = useState<Destination | null>(null);

  // Fetch data from the mock API and filter for Boracay
  useEffect(() => {
    const getDestination = async () => {
      const data = await fetchDestinations();
      const boracayData = data.find((dest) => dest.location === "Boracay");
      if (boracayData) {
        setDestination(boracayData);
      }
    };
    getDestination();
  }, []);

  // Handle loading or not found state
  if (!destination) {
    return <div>Loading or destination not found...</div>;
  }

  return (
    <div>
      <h1>{destination.location} Details</h1>
      <p>{destination.desc}</p>
      {/* Add more details here, e.g., images, pricing, etc., based on your Destination model */}
      <a href="/">Back to Home</a>
    </div>
  );

}

export default Boracay;