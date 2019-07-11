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
          <li><a href='#stadium' onclick="return false;"> Stadium </a></li>
          <li><a href='#players' onclick="return false;"> Players </a></li>
          <li><a href='#social' onclick="return false;"> Social </a></li>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default Header