import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import $ from 'jquery';
import Home from './Component/home';
import About from './Component/about';
import Resume from './Component/resume';
import Contact from './Component/contact';
import Project from './Component/project';
//import Portfolio from './Component/portfolio';
import Footer from './Component/footer';

class App extends Component {
  constructor() {
    super()
    this.state = { resumeData: {} }
    //this.getData = this.getData.bind(this)
  }
  getData() {
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        console.log(data)
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }
  componentDidMount(){
    this.getData();
  }
  render() {
    return (
      <div className="App">
         <Home data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Project data={this.state.resumeData.portfolio} />
        <Contact data={this.state.resumeData.main} />
        <Footer data={this.state.resumeData.main} />
      </div>
    );
  }
}

export default App;
