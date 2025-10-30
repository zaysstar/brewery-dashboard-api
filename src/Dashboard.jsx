import React, { useState, useEffect, useMemo } from 'react';
import './Dashboard.css';

const API_URL = 'https://api.openbrewerydb.org/v1/breweries?per_page=50';

function Dashboard() {
  // State for all data fetched from API
  const [allData, setAllData] = useState([]);
  // State for data that gets displayed (after filtering)
  const [filteredData, setFilteredData] = useState([]);

  // === FILTER STATES ===
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); // 'all' means no filter

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setAllData(data);
        // We no longer setFilteredData here; the other effect will handle it
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); // Empty dependency array means this runs once on mount

  // This useEffect handles all filtering logic
  useEffect(() => {
    let currentData = [...allData];

    // 1. Filter by Search Term
    if (searchTerm) {
      currentData = currentData.filter(brewery =>
        brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. Filter by Brewery Type
    if (filterType !== 'all') {
      currentData = currentData.filter(
        brewery => brewery.brewery_type === filterType
      );
    }

    setFilteredData(currentData);
  }, [searchTerm, filterType, allData]); // Re-run when these change

  // === SUMMARY STATISTICS ===
  const totalBreweries = useMemo(() => allData.length, [allData]);
  
  const totalMicroBreweries = useMemo(() => {
    return allData.filter(b => b.brewery_type === 'micro').length;
  }, [allData]);

  const totalInCalifornia = useMemo(() => {
    return allData.filter(b => b.state === 'California').length;
  }, [allData]);

  return (
    <div className="dashboard-container">
      <h2>Brewery Data Dashboard</h2>

      <div className="summary-stats">
        <div className="stat-card">
          <h3>Total Breweries</h3>
          <p>{totalBreweries}</p>
        </div>
        <div className="stat-card">
          <h3>Micro Breweries</h3>
          <p>{totalMicroBreweries}</p>
        </div>
        <div className="stat-card">
          <h3>Breweries in CA</h3>
          <p>{totalInCalifornia}</p>
        </div>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <select value={filterType} onChange={e => setFilterType(e.target.value)}>
          <option value="all">All Types</option>
          <option value="micro">Micro</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
          <option value="contract">Contract</option>
        </select>
      </div>

      <div className="data-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map(brewery => (
                <tr key={brewery.id}>
                  <td>{brewery.name}</td>
                  <td>{brewery.city}, {brewery.state}</td>
                  <td>{brewery.brewery_type}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3">No breweries found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;