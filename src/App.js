import React from 'react';
import Contact from './components/Contact'
import ContactList from './components/ContactList'
import './App.css';

function App() {
  return (
    <div className="App">
      <Contact 
        name="Carmen Armstrong"
        avatar="https://randomuser.me/api/portraits/women/26.jpg"
        status={true} 
      />
      <Contact 
        name="Victoria Tucker"
        avatar="https://randomuser.me/api/portraits/women/94.jpg"
        status={false}
      />
      <Contact 
        name="Camila Guterriez"
        avatar="https://randomuser.me/api/portraits/women/24.jpg"
        status={true}
      />
      <ContactList />
    </div>
  );
}

export default App;

sudo chown -R 'thomas' /home/'thomas'/.composer