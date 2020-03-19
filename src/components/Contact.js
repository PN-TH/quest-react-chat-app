import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
};

function Contact(props){

    function isConnected(){
        if (props.status) {
            return (
            <div className="status">
                <div class="status-online"></div> 
                <p class="status-text">online</p>
            </div>
            );
        } else {
            return (
                <div className="status">
                    <div class="status-offline"></div> 
                    <p class="status-text">offline</p>
                </div>
            );
        }
    }

return (
    <div className="Contact">
        <img className="avatar" src={props.avatar} alt={props.name} />
        <div>
            <h4 className="name">{props.name}</h4>
                {isConnected(props.status)}
        </div>
    </div>
    );
}



export default Contact;