import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  SearchBarCont,
  SearchInput,
  SearchButton
} from "./NavSearchBarElements";
import { FaSearch } from 'react-icons/fa';

const NavSearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`https://us-central1-crochetcompass.cloudfunctions.net/app/api/patterns?search=${query}`);
            navigate('/search-results', { state: { results: response.data, query: query } });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div>
            <SearchBarCont onSubmit={handleSearch}>
                <SearchInput
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for patterns..."
                />
                <SearchButton type="submit">
                    <FaSearch />
                </SearchButton>
            </SearchBarCont>
        </div>
    );
};

export default NavSearchBar;
