import React from 'react'

function Footer ({teamWebsite, teamFacebook, teamTwitter, teamInstagram, teamYoutube}) {
  return (
    <React.Fragment>
      <footer className='footerContainer' id='social'>
        <div className="social-btns">
          <a className="btn website" href={'https://' + teamWebsite} target='_blank'><i className="fas fa-laptop-code"></i></a>
          <a className="btn facebook" href={'https://' + teamFacebook} target='_blank'><i className="fab fa-facebook-f"></i></a>
          <a className="btn twitter" href={'https://' + teamTwitter} target="_blank"><i className="fab fa-twitter"></i></a>
          <a className="btn instagram" href={'https://' + teamInstagram} target="_blank"><i className="fab fa-instagram"></i></a>
          <a className="btn youtube" href={'https://' + teamYoutube} target="_blank"><i className="fab fa-youtube"></i></a>
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Footer
