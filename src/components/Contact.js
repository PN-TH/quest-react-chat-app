import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';





class Contact extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
        status: props.status
        
        };
    }

    isConnected(){
        if (this.state.status) {
            return (
            <div className="status">
                <div className="status-online"></div> 
                <p className="status-text">online</p>
            </div>
            );
        } else {
            return (
                <div className="status">
                    <div className="status-offline"></div> 
                    <p className="status-text">offline</p>
                </div>
            );
        }
    }

    render() {
    return (
        <div className="Contact">
            <img className="avatar" src={this.props.avatar} alt={this.props.name} />
            <div 
            onClick={event => {
                const newStatus = !this.state.status
                this.setState({status: newStatus})
            }}>
                <h4 className="name">{this.props.name}</h4>
                    {this.isConnected(this.state.status)}
            </div>
        </div>
        );
    }
}

export default Contact;