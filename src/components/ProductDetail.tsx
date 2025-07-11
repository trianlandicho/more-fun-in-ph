import { useEffect, useState } from "react";
import { fetchDestinations } from "../api/actions";
import type { Destination } from "../api/models/destination";

function ProductDetail() {
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
    return <div style={styles.loading}>Loading or destination not found...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{destination.location} Details</h1>
      <img src={destination.image} alt={destination.location} style={styles.image} />
      <p style={styles.description}>{destination.desc}</p>
      <p style={styles.shortDesc}>{destination.shortDesc}</p>
      <p style={styles.section}>
        <strong>How to Get There:</strong> {destination.howToGetThere}
      </p>
      <p style={styles.section}>
        <strong>Activities:</strong> {destination.activities.join(", ")}
      </p>
      <p style={styles.section}>
        <strong>Accommodations:</strong> {destination.accommodations.join(", ")}
      </p>
      {/* Add more details here, e.g., pricing, etc., based on your Destination model */}
      <a href="/" style={styles.backLink}>Back to Home</a>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  shortDesc: {
    fontSize: '16px',
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '20px',
  },
  section: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  backLink: {
    display: 'block',
    textAlign: 'center',
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    color: '#888',
    marginTop: '50px',
  },
};

export default ProductDetail;