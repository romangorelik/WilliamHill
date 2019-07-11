import React from 'react'

function Stadium ({stadiumName, stadiumDescription, stadiumLocation, stadiumCapacity, stadiumImage}) {
  return (
    <div className='stadiumContainer' id='stadium'>
      <div className='stadiumImageContainer'>
        <img className='stadiumImage2' src={stadiumImage}/>
      </div>
      <div> 
        <div className='stadiumInfo'>
          <h1>{stadiumName}</h1>
          <h2>{stadiumLocation}</h2>
          <h3>{stadiumCapacity} available seats</h3>
        </div>
        <div className='stadiumDescription'>
          <p>{stadiumDescription}</p>
        </div>
      </div>
    </div>
  )
}

export default Stadium