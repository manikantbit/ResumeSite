import React, { Component } from 'react';

class Home extends React.Component {
    render() {
        if (this.props.data) {
            var networks = this.props.data.social.map(network => {
                return <li key={network.name}><a href={network.url} target='_blank'><i className={network.className}></i></a></li>
            })
        }
        return (
            <header id="home">
                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                        <li><a className="smoothscroll" href="#about">About</a></li>
                        <li><a className="smoothscroll" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll" href="#project">Projects</a></li>
                        <li><a className="smoothscroll" href="#contact">Contact</a></li>
                    </ul>

                </nav>
                
                
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm Manikant Prasad.</h1>
                        <h3>I'm a Software Developer, currently pursuing Masters in Software Engineering in San Jose State University.
                            My passion is to build robust and scalable web applications using modern Web technologies and host them on any Cloud.
                            I am looking for the internship opportunities in the area of Web and Cloud technologies in San Jose/San Francisco Bay Area.
                        </h3>
                        <hr />
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div> 
                

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>

            </header>
        )
    }
}

export default Home;