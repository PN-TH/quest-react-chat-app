import Contact from "./Contact";
import React from 'react';

const users = [
    {
    name: 'Robert Reyes',
    avatar: 'https://randomuser.me/api/portraits/men/28.jpg',
    status: false
    },
    {
    name: 'Nellie Caldwell',
    avatar: 'https://randomuser.me/api/portraits/women/17.jpg',
    status: true
    },
    {
    name: 'Vernon Mason',
    avatar: 'https://randomuser.me/api/portraits/men/84.jpg',
    status: true
    },
    {
    name: 'Erica Hunt',
    avatar: 'https://randomuser.me/api/portraits/women/87.jpg',
    status: false
    },
    {
    name: 'Juanita Phillips',
    avatar: 'https://randomuser.me/api/portraits/women/55.jpg',
    status: true
    }
];

const ContactList = () => (
    <div>
        {users.map(user => (
            <Contact key={user} name={user.name} avatar={user.avatar} status={user.status} />
    ))}
    </div>
);


export default ContactList;