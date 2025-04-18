// pages/about.tsx
import React, { useState, useEffect, useRef } from 'react';
import SkillBar from '../components/SkillBar';

const skills = [
  { name: 'JavaScript', level: 90, color: '#5fb2a8' },
  { name: 'React', level: 85, color: '#e1ae9e' },
  { name: 'TypeScript', level: 80, color: '#dfae36' },
  { name: 'Tailwind CSS', level: 75, color: '#bc8e5b' },
  { name: 'Node.js', level: 70, color: '#ca4544' },
];

const SkillsPanel: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // Trigger animation when the chart is visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the chart is visible
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto mt-10"> {/* Full-width row */}
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
      <div ref={chartRef}>
        <SkillBar skills={skills} animate={animate} />
      </div>
    </div>
  );
};

export default SkillsPanel;
