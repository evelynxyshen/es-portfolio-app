import React from 'react';
import AboutPanel from './AboutPanel';
import DesignerPanel from './DesignerPanel';
import CoderPanel from './CoderPanel';
import FeaturesPanel from './FeaturesPanel';

const About: React.FC = () => {
    return (
        <div>
            <AboutPanel />
            <DesignerPanel />
            <CoderPanel />
            <FeaturesPanel />
        </div>
    );
};

export default About;