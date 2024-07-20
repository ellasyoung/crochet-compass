import React from "react";
import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages";
import Explore from "./pages/Explore/index.js";
import BeginnerPathway from "./pages/BeginnerPathway/index.js";
import SearchResults from "./pages/SearchResults/index.js";
import PatternDetail from "./pages/PatternDetail/index.js";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/explore" element={<Explore />} />
                <Route path="/beginner-pathway" element={<BeginnerPathway />} />
                <Route path="/search-results" element={<SearchResults />} />
                <Route path="/pattern-detail/:id" element={<PatternDetail />} />
            </Routes>
        </Router>
    );
}

export default App;

