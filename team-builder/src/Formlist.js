import React, { useState } from 'react';

const FormList = ({AddNewteam}) => {
    
    const [addteam, setAddTeam] = useState({name:'',email:'',role:''})
    
    const handleChanges = (event) => {
    setAddTeam({...addteam, [event.target.name]: event.target.value})
    };

    const submitForm = event => {
        event.preventDefault()
        AddNewteam(addteam);
        setAddTeam({name:'',email:'',role:''})
      }


    return (
        <div>
           <form onSubmit={submitForm}>
           <label htmlFor="name">Name</label><br/>
           <input 
           id="name" 
           type="text" 
           name="name" 
           placeholder="Enter a Name" 
           onChange={handleChanges}
           value={addteam.name}
           />
           <br/>
           <label htmlFor="email">Email</label><br/>
           <input 
           id="email" 
           type="text" 
           name="email" 
           placeholder="Enter a Email" 
           onChange={handleChanges}
           value={addteam.email}
           />
           <br/>
           <label htmlFor="role">Role</label><br/>
           <input 
           id="role" 
           type="text" 
           name="role" 
           placeholder="Enter your role" 
           onChange={handleChanges}
           value={addteam.role}
           />
           <br/>
           <button>Submit</button>
           </form>
        </div>
    );
};

export default FormList;