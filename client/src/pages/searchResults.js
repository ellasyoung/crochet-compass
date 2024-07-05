import React from 'react';
import { useLocation } from 'react-router-dom';
import NavbarSearch from "../components/NavbarSearch";

const SearchResults = () => {
    const location = useLocation();
    const { results } = location.state || { results: [] };

    return (
        <div>
            <NavbarSearch></NavbarSearch>
            <h1>Search Results</h1>
            <div>
                {results.length > 0 ? (
                    results.map((pattern) => (
                        <div key={pattern._id}>
                            <h3>{pattern.title}</h3>
                            <p>{pattern.desc}</p>
                            <p>Tags: {pattern.tags.join(', ')}</p>
                        </div>
                    ))
                ) : (
                    <p>No results found.</p>
                )}
            </div>
        </div>
    );
};

export default SearchResults;

