import React from 'react';
import './Contact.css';

const user = {
    name: 'Carmen Armstrong',
    avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
    status: true
}

function isConnected(status){
    if (status) {
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