import React from 'react';

const Form = ({teams})  => { 
    //console.log(props);
    // props
    return (
        <div >
            {
            teams.map( team => {
             return ( <div className="team" key={team.id}>
                        <h2>{team.name}</h2>
                        <p>{team.email}</p>
                        <p>{team.role}</p>
                      </div>
             )
            })}
        </div>
    );
};


export default Form;