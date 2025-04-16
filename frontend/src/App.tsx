import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Homepage from "./components/Homepage";
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './assets/styles/main_output.css';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main className="pt-16"> {/* Add padding-top to account for the header height */}
                <Routes>
                    <Route path="/about" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Homepage />} /> {/* Default route */}
                </Routes>
            </main>
            <footer className="text-center py-4">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </footer>
        </Router>
    );
};

export default App;