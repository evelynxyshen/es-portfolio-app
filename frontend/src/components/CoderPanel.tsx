import React from 'react';

const CoderPanel: React.FC = () => {
    return (
        <div className="panel bg-gradient-to-br from-green-500 to-green-700 text-white h-screen flex justify-center items-center">
            <div className="content text-center">
                <h2 className="text-5xl font-bold mb-4">Coder</h2>
                <p className="text-lg">
                    I enjoy bringing ideas to life in the browser with clean, efficient code.
                </p>
                <p className="mt-4">
                    Tools I use:
                    <ul className="list-none mt-2">
                        <li>React</li>
                        <li>TypeScript</li>
                        <li>Node.js</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default CoderPanel;
