import React, { Component } from 'react';

class Home extends React.Component {
    render() {
        if (this.props.data) {
            var profilepic = "images/" + this.props.data.image;
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
                        <li><a className="smoothscroll" href="#contact">Hire Me</a></li>
                    </ul>

                </nav>


                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm Manikant Prasad.</h1>
                        { /*<div className="sect sect--white">
                            <div className="container">
                                <div className="head">
                                </div>
                                <div className="row row--margin row--text-center">
                                    <div className="col-md-8 col-sm-10 col-xs-12 row__carousel">
                                        <div id="myCarousel" className="carousel slide" data-ride="carousel">

                                            

                                            <div className="carousel-inner">
                                                <div className="item active">
                                                    <div className="item__content">
                                                    <div className="row">
                            <div className="test">
                                <img className="profile-pic" src={profilepic} alt="Manikant Prasad" />
                            </div>
                            </div>
                            
                                                    <h6>I'm a Software Developer, currently pursuing Masters in Software Engineering in San Jose State University.
                            My passion is to build robust and scalable web applications using modern Web technologies and host them on any Cloud.
                            I am looking for the internship opportunities in the area of Web and Cloud technologies in San Jose/San Francisco Bay Area.
                        </h6>
                        
                                                    </div>
                                               
                                                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                                    <img className="carousel-control__img" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjQ5NCAzMS40OTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjQ5NCAzMS40OTQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij4KPHBhdGggZD0iTTEwLjI3Myw1LjAwOWMwLjQ0NC0wLjQ0NCwxLjE0My0wLjQ0NCwxLjU4NywwYzAuNDI5LDAuNDI5LDAuNDI5LDEuMTQzLDAsMS41NzFsLTguMDQ3LDguMDQ3aDI2LjU1NCAgYzAuNjE5LDAsMS4xMjcsMC40OTIsMS4xMjcsMS4xMTFjMCwwLjYxOS0wLjUwOCwxLjEyNy0xLjEyNywxLjEyN0gzLjgxM2w4LjA0Nyw4LjAzMmMwLjQyOSwwLjQ0NCwwLjQyOSwxLjE1OSwwLDEuNTg3ICBjLTAuNDQ0LDAuNDQ0LTEuMTQzLDAuNDQ0LTEuNTg3LDBsLTkuOTUyLTkuOTUyYy0wLjQyOS0wLjQyOS0wLjQyOS0xLjE0MywwLTEuNTcxTDEwLjI3Myw1LjAwOXoiIGZpbGw9IiM2Zjc5ZmYiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==" />

                                                </a>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                        <h3>I'm a Software Developer, currently pursuing Masters in Software Engineering in San Jose State University.
                            My passion is to build robust and scalable web applications using modern Web technologies and host them on any Cloud.
                            I am looking for the internship opportunities in the area of Web and Cloud technologies in San Jose/San Francisco Bay Area.
        </h3>*
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