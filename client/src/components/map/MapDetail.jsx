import React from 'react'

import MapDetailImg from '../../assets/img/map/강원.png'

const MapDetail = (region) => {
  return (
    <div className='mapdetail__wrap'>
      <div className="map__img">
        <img src={MapDetailImg} alt="강원도 지도" />
      </div>
      <div className="map__un__info">
        
      </div>
    </div>
  )
}

export default MapDetail