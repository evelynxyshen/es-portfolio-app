import React from 'react';

const AboutPanel: React.FC = () => {
    return (
        <div className="panel bg-about bg-red-500">
            <div className="panel-content">
                <h2 className="panel-title">About</h2>
                <p className="panel-text">
                    Welcome to my portfolio! I am passionate about creating beautiful designs and writing clean, efficient code.
                </p>
            </div>
        </div>
    );
};

export default AboutPanel;
