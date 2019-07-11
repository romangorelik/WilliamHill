import React from 'react'

function TeamInfo ({teamName, teamDescription, teamLogo}) {
  return (
    <div className='teamInfoContainer'>
      <div className='infoContainer'>
        <img src={teamLogo} id='team'/>
        <h1 className='teamName'> {teamName} </h1>
      </div>
      <div className='descriptionContainer'>
        <p className='teamDescription'> {teamDescription} </p>
      </div>
    </div>
  )
}

export default TeamInfo