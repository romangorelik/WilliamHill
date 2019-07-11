import React from 'react'

function Header ({teamLogo, teamName}) {
  return (
    <React.Fragment>
      <nav className='navBar'>
        <div className='logo'>
          <h1> {teamName} </h1>
          <img src={teamLogo} alt='NYK logo'/>
        </div>
        <ul className='navLinks'>
          <li><a href='#stadium'> Stadium </a></li>
          <li><a href='#players'> Players </a></li>
          <li><a href='#social'> Social </a></li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Header