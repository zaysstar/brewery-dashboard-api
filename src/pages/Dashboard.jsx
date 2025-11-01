import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

// --- Recharts Imports ---
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const API_URL = 'https://api.openbrewerydb.org/v1/breweries?per_page=50';

function Dashboard() {
  // State (same as before)
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all'); 

  // Fetch data (same as before)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        setAllData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); 

  // Filtering logic (same as before)
  useEffect(() => {
    let currentData = [...allData];
    if (searchTerm) {
      currentData = currentData.filter(brewery =>
        brewery.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (filterType !== 'all') {
      currentData = currentData.filter(
        brewery => brewery.brewery_type === filterType
      );
    }
    setFilteredData(currentData);
  }, [searchTerm, filterType, allData]);

  // Summary Stats (same as before)
  const totalBreweries = useMemo(() => allData.length, [allData]);
  
  const totalMicroBreweries = useMemo(() => {
    return allData.filter(b => b.brewery_type === 'micro').length;
  }, [allData]);

  const totalInCalifornia = useMemo(() => {
    return allData.filter(b => b.state === 'California').length;
  }, [allData]);

  // === NEW: CHART 1 DATA (Breweries by Type) ===
  const typeData = useMemo(() => {
    const counts = {};
    allData.forEach(brewery => {
      counts[brewery.brewery_type] = (counts[brewery.brewery_type] || 0) + 1;
    });
    // Format for Recharts Pie Chart
    return Object.keys(counts).map(type => ({
      name: type,
      value: counts[type]
    }));
  }, [allData]);

  // === NEW: CHART 2 DATA (Breweries by State) ===
  const stateData = useMemo(() => {
    const counts = {};
    allData.forEach(brewery => {
      counts[brewery.state] = (counts[brewery.state] || 0) + 1;
    });
    // Format for Recharts Bar Chart
    return Object.keys(counts).map(state => ({
      name: state,
      count: counts[state]
    })).sort((a, b) => b.count - a.count); // Sort descending
  }, [allData]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#FF69B4'];

  return (
    // Use a React Fragment, as the container is in Layout.jsx
    <>
      {/* Summary Stats (same as before) */}

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

      {/* === NEW: CHARTS SECTION === */}
      <div className="charts-section">
        <div className="chart-container">
          <h3>Breweries by Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={typeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {typeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3>Breweries by State</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={stateData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#28acf9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Filters (same as before) */}
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

      {/* Data List (with one change) */}
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
                  
                  {/* === UPDATED: Use Link for navigation === */}
                  <td>
                    <Link to={`/brewery/${brewery.id}`} className="brewery-link">
                      {brewery.name}
                    </Link>
                  </td>
                  
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
    </>
  );
}

export default Dashboard;