import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className = 'page-container'>
            <div className = 'about__background'>
                <div className = 'about__body'>
                 <h1 className = 'about__heading-main'><i className="fas fa-broadcast-tower"></i> streamr</h1>
                 <p>STREAMR is a project that tries to emulate aspects of a commercial music streaming service by using the Last.fm API. The app features a fully functional search system, artist recommendations and library creation. 
                 <br />
                 <br />
                 Music playback functionality has not been implemented, nor has persistent storage for user libraries. All saved data will be erased upon page refresh.</p>
                </div>
            </div>
            
            
            <div className = 'container-1000'>
                <h2 className = 'heading'>Features</h2>
                <ul className = 'about__list'>
                    <li>Browse a near-exhaustive selection of music.</li>
                    <li>Save favorites into personal library by <Link to = '/mytracks'>tracks</Link>, <Link to = '/myalbums'>albums</Link> and <Link to = '/myartists'>artists.</Link></li>
                    <li>Discover music through <Link to = '/tag/pop'>tags</Link>, recommendations and search.</li>
                    <li>Browse actively updated popular music from the home page.</li>
                    <li>Mobile-Friendly.</li>
                </ul>
                <br />
                <br />
                <h2 className = 'heading'>Tools Used</h2>
                <div className = 'about__grid'>
                    <i className="fab fa-node-js"></i>
                    <i className="fab fa-react"></i>
                </div>
                <br />
                <br />
                <ul className = 'about__list'>
                    <li>Express</li>
                    <li>Redux</li>
                    <li>React Router</li>
                    <li>Webpack</li>
                </ul>
                
                <br />
                <br />
                <h2 className = 'heading'><i className="fab fa-github"></i> GitHub</h2>
                <a className = 'about__link' href = 'https://github.com/oliverbth05'>https://github.com/oliverbth05</a>
                <br />
                <br />
                <br />
            </div>
        </div>   
    )
}

export default About;