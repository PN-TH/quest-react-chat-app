import React from 'react';
import './Contact.css';

const user = {
    name: 'Carmen Armstrong',
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
    status: false
}

function isConnected(status){
    if (status) {
        return (
        <div className="status-online">
            <p className="status-text">online</p>
        </div> 
        );
    } else {
        return (
        <div className="status-offline">
            <p className="status-text">offline</p>
        </div> 
        );
    }
}

function Contact(){
return (
    <div className="Contact">
        <img className="avatar" src={user.avatar} alt={user.name} />
        <div>
            <h4 className="name">{user.name}</h4>
            <div className="status">
                {isConnected(user.status)}
            </div>
        </div>
    </div>
    );
}

export default Contact;