import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header';
import Userlist from './components/Userlist';
import Adduser from './components/Adduser';
import axios from './axios';

function App() {

  const [modal, setModal] = useState(false);
 
  

  const toggle = () => setModal(!modal);
  const [users, setUsers] = useState([]);

  async function fetchData() {
    const req = await axios.get('/api/v1/users');
  
    setUsers(req.data.data);
  }

  useEffect(() => {
    
    fetchData();
  }, []);


  const handleSubmit = async (data) => {
    toggle();
  
   axios.post('/api/v1/user', data).then((response) => {
     console.log(response);
   
     alert('success')
    
     fetchData();
  }, (error) => {
       console.log(error);
      
       
  });
   
  }

  
  return (
    <div className="App">
      <Header toggle={toggle}/>
      <Adduser modal={modal} toggle={toggle} handleSubmit={handleSubmit}/>
      <Userlist users={users} />
      
     
    </div>
  );
}

export default App;
