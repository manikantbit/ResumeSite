import React, { Component } from 'react';

class Contact extends React.Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var message = this.props.data.contactmessage;
        }
        return (
            <section id="contact">
                <div className="row section-head">

                    <div className="two columns header-col">

                        <h1><span>Get In Touch.</span></h1>

                    </div>

                    <div className="ten columns">

                        <p className="lead">{message}</p>

                    </div>
                    
                    <div className="text-center">
                        <h2 style = {{width:"850px"}}>Contact Details</h2>
                        <p className="address">
                            <span>{name}</span><br />
                            <span>{street}<br />
                                {city} {state}, {zip}
                            </span><br />
                            <span>{phone}</span><br />
                            <span>{email}</span>
                        </p>
                    </div>
                    </div>
                    
               
                
                
            </section>
        )
    }
}

export default Contact;