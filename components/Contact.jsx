import React, { useState, useEffect } from 'react';

import axios from 'axios';
import './Contact.css'
function UserList() {

 const [users, setUsers] = useState([]);

 const [newUser, setNewUser] = useState({ name: '', email: '',msg:'' });

 useEffect(() => {

  axios.get('http://localhost:5000/api/users')

   .then(response => setUsers(response.data))

   .catch(err => console.error(err));

 }, []);

 const handleSubmit = async (e) => {

  e.preventDefault();

  await axios.post('http://localhost:5000/api/users', newUser);

  setNewUser({ name: '', email: '',msg:'' });

  const updatedUsers = await axios.get('http://localhost:5000/api/users');

  setUsers(updatedUsers.data);

 };

 return (
  <div className="c1">
     
  <header className="c2">
    <div className="c3">
      
      <h1>CONTACT US</h1>
      
    </div>
  </header>
  

  <div>

   <h1>WE ARE READY LET'S TALK.</h1>

   <form onSubmit={handleSubmit}>

    <input type="text" placeholder=" your Name" value={newUser.name}  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}/>
    <input type="email" placeholder="Email Address" value={newUser.email} onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}/>
    <input type="text" placeholder="Message" value={newUser.msg} onChange={(e) => setNewUser({ ...newUser, msg: e.target.value })}/>
    <button type="submit">Send message</button>

   </form>

  
   </div>

  </div>

 );

}

export default UserList;

