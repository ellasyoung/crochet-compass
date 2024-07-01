import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const handleSearch = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get(`http://localhost:5001/api/patterns?search=${query}`);
          setResults(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for patterns..."
            />
            <button type="submit">Search</button>
          </form>
          <div>
            {results.map((pattern) => (
              <div key={pattern._id}>
                <h3>{pattern.title}</h3>
                <p>{pattern.desc}</p>
                <p>Tags: {pattern.tags.join(', ')}</p>
              </div>
            ))}
          </div>
        </div>
    );
};

export default SearchBar;