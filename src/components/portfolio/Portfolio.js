import React from 'react';
import Navigation from './navigation/Navigation';
import Landing from './landing/Landing';
import About from './about/About';
import './style.scss';

function Portfolio () {
    let sectionHeaders = [
        { name: "About", slug: About },
    ];
    return (
        <div>
            <Navigation />
            <div className="page-content">
                <Landing />
                {sectionHeaders.map(header =>
                    <div className="section" id={header.name}>
                        <h2 className="section__header section__header--numbered">
                            {header.name}
                        </h2>
                        <header.slug />
                    </div>
                )}
            </div>
        </div>
    );
}

export default Portfolio;
