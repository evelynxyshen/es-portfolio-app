import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Portfolio from "./components/Portfolio"; // Import the Portfolio component
import ProjectPage from "./components/ProjectPage"; // Import the ProjectPage component
import About from "./components/About"; // Import the About component
import Header from './components/Header';
import Footer from './components/Footer'; // Import the Footer component
import './assets/styles/main_output.css';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main className="pt-16"> {/* Add padding-top to account for the header height */}
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/about" element={<About />} /> {/* About page route */}
                    <Route path="/portfolio" element={<Portfolio />} /> {/* Portfolio page route */}
                    <Route path="/project/:id" element={<ProjectPage />} /> {/* Dynamic route for project pages */}
                </Routes>
            </main>
            <Footer /> {/* Use the Footer component */}
        </Router>
    );
};

export default App;