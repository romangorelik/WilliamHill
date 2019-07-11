import React from 'react'

function Banner ({stadiumImage}) {
  return (
    <React.Fragment>
      <div class='bannerContainer'>
        <img className='stadiumImage' src={stadiumImage}/>
      </div>
    </React.Fragment>
  )
}

export default Banner