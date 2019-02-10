import React, { Component } from 'react';

class Project extends React.Component{
    render(){
        if(this.props.data){
            var projects = this.props.data.projects.map(function(projects){
              var projectImage = 'images/'+projects.image;
              return <div key={projects.title} className="columns project-item">
                 <div className="item-wrap">
                  <a href={projects.url} target="_blank" title={projects.title}>
                     <img alt={projects.title} src={projectImage} />
                     <div className="overlay">
                        <div className="project-item-meta">
                       <h5>{projects.title}</h5>
                           <p>{projects.category}</p>
                        </div>
                      </div>
                    <div className="link-icon"><i className="fa fa-link"></i></div>
                  </a>
                </div>
              </div>
            })
          }
        return (
            <section id="project">

            <div className="row">
      
               <div className="twelve columns collapsed">
      
                  <h1>Please look at some of my sample works.(Some Features might be off).</h1>
      
                  <div id="project-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                      {projects}
                  </div>
                </div>
            </div>
         </section>
        )
    }
}

export default Project;