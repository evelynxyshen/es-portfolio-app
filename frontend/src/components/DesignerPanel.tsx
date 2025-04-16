import React from 'react';

const DesignerPanel: React.FC = () => {
    return (
        <div className="panel bg-gray-100 h-screen flex justify-center items-center">
            <div className="content text-center">
                <h2 className="text-5xl font-bold mb-4">Designer</h2>
                <p className="text-lg">
                    I value simple content structure, clean design patterns, and thoughtful interactions.
                </p>
                <p className="mt-4">
                    Tools I use:
                    <ul className="list-none mt-2">
                        <li>Figma</li>
                        <li>Sketch</li>
                        <li>Adobe XD</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default DesignerPanel;
