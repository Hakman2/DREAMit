import React from 'react';
import './mainContent.css';

const MainContent = () => {
    return (
        <div className="main-content">
            <h2>Dashboard Overview</h2>
            <div className="widgets">
                <div className="widget">
                    <h3>Widget 1</h3>
                    <p>Information about Widget 1.</p>
                </div>
                <div className="widget">
                    <h3>Widget 2</h3>
                    <p>Information about Widget 2.</p>
                </div>
                <div className="widget">
                    <h3>Widget 3</h3>
                    <p>Information about Widget 3.</p>
                </div>
            </div>
        </div>
    );
};

export default MainContent;