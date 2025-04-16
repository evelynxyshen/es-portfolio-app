import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Hi, I'm Adham Dannaway</h1>
                <p>A UX Designer & Front-End Developer</p>
                <a href="#portfolio" className="btn">View My Work</a>
            </div>
        </section>
    );
};

export default Hero;
