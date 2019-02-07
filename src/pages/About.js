import React from 'react';

const About = () => {
    return (
        <div className = 'full-section'>
            <div className = 'container'>
            
                <h1 className = 'text-center logo font-light bright m-t-3 m-b-2'><i className="fas fa-broadcast-tower"></i> STREAMER</h1>
                <p>STREAMR is a project that tries to emulate aspects of a commercial music streaming service by using the Last.fm API. The app features a fully functional search system, artist recommendations and library creation. 
                Music playback functionality has not been implemented, nor has persistent storage for user libraries. All saved data will be erased upon page refresh.</p>
    
    
                <h2 className = 'font-light text-center bright m-t-3 m-b-1'>Features</h2>
                <ul className = 'text-center'>
                    <li>Browse a near-exhaustive selection of music.</li>
                    <li>Save favorites into personal library by tracks, albums and artists.</li>
                    <li>Discover music through tags, recommendations and search.</li>
                    <li>Browse actively updated popular music from the home page.</li>
                    <li>Mobile-Friendly.</li>
                </ul>
                    
                <h2 className = 'font-light text-center bright m-t-3 m-b-1'>Tools Used</h2>
                <ul className = 'text-center'>
                    <li>Node</li>
                    <li>React</li>
                    <li>Express</li>
                    <li>Redux</li>
                    <li>React Router</li>
                    <li>Webpack</li>
                </ul>
                
                <h2 className = 'font-light bright m-t-3 m-b-1 text-center'><i className="fab fa-github"></i> GitHub</h2>
                <a className = 'text-center' href = 'https://github.com/oliverbth05'>https://github.com/oliverbth05</a>

            </div>
        </div>
    
    )
}

export default About;