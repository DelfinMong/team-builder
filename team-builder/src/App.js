import React, { useState }from 'react';
import logo from './logo.svg';
import data from "./Data";
import Formlist from "./Formlist.js";
import Form from "./Form";
import './App.css';

function App() {

  const [teams, setTeams] = useState(data);

   const AddNewteam = team => {
       const Newteam = {
             id: Date.now(),
             name: team.name,
             email: team.email,
             role: team.role
       }
    const newTeam = [...teams, Newteam];
    setTeams(newTeam)   
  }

  return ( 
    <div>
      <h1>My Dream Team</h1>
      <Formlist AddNewteam={AddNewteam}/>
      <Form teams={teams}/>
    </div>
    )
}

export default App;
