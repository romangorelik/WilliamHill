import React from 'react'

function Banner ({stadiumImage}) {
  return (
    <React.Fragment>
      <img  className='stadiumImageContainer' src={stadiumImage}/>
    </React.Fragment>
  )
}

export default Banner