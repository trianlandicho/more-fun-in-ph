import { useState, useEffect } from "react";
import { fetchDestinations } from "../api/actions"; // Import the mock API function
import type { Destination } from "../api/models/destination"; // Import the Destination model

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
    <div
      style={{
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        display: "flex", // Use flexbox for layout
        flexDirection: "column", // Stack content vertically
        background: "#eeeeee", // Gradient background // Gradient background
      }}
    >
      {/* Page Header */}
      <header
        style={{
          backgroundColor: "#ffffff", // White background for a clean look
          padding: "15px 30px", // Increased padding for better spacing
          // borderBottom: "1px solid #eaeaea", // Subtle border for separation
          //boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Slight shadow for depth
          background: "lightblue",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between", // Align items to the left and right
            alignItems: "center", // Vertically center items
          }}
        >
          {/* Logo */}
          <h1
            style={{
              margin: 0,
              fontSize: "24px", // Slightly larger font for the logo
              fontWeight: "bold", // Bold text for emphasis
              fontFamily: "'Arial', sans-serif", // Modern font
              color: "#333", // Dark text for contrast
            }}
          >
            Explore Philippines
          </h1>

          {/* Navigation Links */}
          <ul
            style={{
              listStyleType: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              gap: "20px", // Space between links
            }}
          >
            <li>
              <a
                href="/"
                style={{
                  textDecoration: "none",
                  color: "#007bff", // Blue link color
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/destination"
                style={{
                  textDecoration: "none",
                  color: "#007bff", // Blue link color
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Destinations
              </a>
            </li>
            <li>
              <a
                href="/contact"
                style={{
                  textDecoration: "none",
                  color: "#007bff", // Blue link color
                  fontSize: "16px",
                  fontWeight: "500",
                }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}

      {/* Main Content */}
      <main style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <p>Explore our destinations!</p>
        {/* Display the fetched destinations */}
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {destinations.map((destination) => (
            <li key={destination.id} style={{ marginBottom: "20px" }}>
              <div
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  padding: "15px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                  display: "flex", // Use flexbox for layout
                  gap: "15px", // Space between image and text
                  alignItems: "center", // Center items vertically
                }}
              >
                {/* Text Content */}
                <div style={{ textAlign: "left" }}>
                  {" "}
                  {/* Left-align content */}
                  <h2>{destination.location}</h2>
                  <p>
                    <strong>Short Description:</strong> {destination.shortDesc}
                  </p>
                  <p>
                    <strong>How to Get There:</strong>{" "}
                    {destination.howToGetThere}
                  </p>
                  <p>
                    <strong>Activities:</strong>{" "}
                    {destination.activities.join(", ")}
                  </p>
                  <p>
                    <strong>Accommodations:</strong>{" "}
                    {destination.accommodations.join(", ")}
                  </p>
                  <a href="/destination">View Details</a>
                </div>

                {/* Image Container */}
                <div style={{ flexShrink: 0 }}>
                  <img
                    src={`https://fastly.picsum.photos/id/898/200/300.jpg?hmac=t4CBtj0-seR5dcy3U9f3RETPJo3tVYgUSvwcMV-cL-o`} // Replace with actual image URL
                    alt={destination.location}
                    style={{
                      width: "150px",
                      height: "150px",
                      borderRadius: "8px", // Rounded corners for the image
                      objectFit: "cover", // Ensure the image covers the container
                    }}
                  />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default LandingPage;
