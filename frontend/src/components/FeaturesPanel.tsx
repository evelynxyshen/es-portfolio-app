import React from 'react';

const FeaturesPanel: React.FC = () => {
    return (
        <div className="panel bg-gray-100 h-screen flex justify-center items-center">
            <div className="content text-center">
                <h2 className="text-5xl font-bold mb-4">Features</h2>
                <p className="text-lg">
                    I specialize in creating responsive, user-friendly designs and scalable, maintainable codebases.
                </p>
                <p className="mt-4">
                    Key features:
                    <ul className="list-none mt-2">
                        <li>Responsive Design</li>
                        <li>Cross-Browser Compatibility</li>
                        <li>Performance Optimization</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default FeaturesPanel;
