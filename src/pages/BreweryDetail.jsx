// src/pages/BreweryDetail.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './BreweryDetail.css'; // We'll create this CSS file next

function BreweryDetail() {
  const [brewery, setBrewery] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // 1. Get the "id" from the URL
  const { id } = useParams();

  // 2. Fetch data for this specific brewery
  useEffect(() => {
    const fetchBrewery = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://api.openbrewerydb.org/v1/breweries/${id}`);
        if (!response.ok) {
          throw new Error('Brewery not found');
        }
        const data = await response.json();
        setBrewery(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBrewery();
  }, [id]); // Re-run effect if the id changes

  // 3. Handle loading and error states
  if (loading) {
    return <div>Loading brewery details...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!brewery) {
    return <div>Brewery not found.</div>;
  }

  // 4. Render the details
  return (
    <div className="detail-container">
      <Link to="/" className="back-link">
        &larr; Back to Dashboard
      </Link>
      
      <div className="detail-card">
        <h2>{brewery.name}</h2>
        <span className="brewery-type">{brewery.brewery_type}</span>

        <h3>Address</h3>
        <p>{brewery.street || 'N/A'}</p>
        <p>{brewery.city}, {brewery.state} {brewery.postal_code}</p>
        <p>{brewery.country}</p>

        <h3>Contact</h3>
        <p><strong>Phone:</strong> {brewery.phone || 'N/A'}</p>
        <p>
          <strong>Website:</strong> 
          {brewery.website_url ? (
            <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">
              {brewery.website_url}
            </a>
          ) : (
            ' N/A'
          )}
        </p>
      </div>
    </div>
  );
}

export default BreweryDetail;