import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import BeginnerPathway from "./pages/beginnerPathway";
import SearchResults from "./pages/searchResults";

function App() {
    return (
        <Router>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/beginner-pathway" element={<BeginnerPathway />} />
                <Route path="/search-results" element={<SearchResults />} />
            </Routes>
        </Router>
    );
}

export default App;

