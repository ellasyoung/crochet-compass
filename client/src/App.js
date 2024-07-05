import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import About from "./pages/About/index.js";
import BeginnerPathway from "./pages/BeginnerPathway/index.js";
import SearchResults from "./pages/SearchResults/index.js";

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

