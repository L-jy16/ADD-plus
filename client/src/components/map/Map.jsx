import React from 'react'
import { Link } from 'react-router-dom'

import korea__map from '../../asset/img/map.png'

import { FaRegMap } from "react-icons/fa";
import { FiTable } from "react-icons/fi";
import { PiMagnifyingGlassBold } from "react-icons/pi";

const Map = () => {
    return (
        <div className='info__wrap'>
            <div className='menu__info'>
                <h3 className='menu__title'>add map</h3>
                <div className="menu__Detail">
                    <ul>
                        <li className='active'><Link href="/"> <FaRegMap /> 전제 지도</Link></li>
                        <li><Link href="/"> <FiTable /> 학과 정보</Link></li>
                    </ul>
                </div>
            </div>
            <div className="map__info">
                <div className="map__header">
                    <h3 className="map__title">
                        전국 대학 위치도 
                    </h3>
                    <div className="map__search">
                    <div className="search__img"><PiMagnifyingGlassBold /></div>
                        <label htmlFor="MapSearchKeyword" className='blind'>지도 검색 영역</label>
                        <input type="search" name="MapSearchKeyword" id="MapSearchKeyword" placeholder="대학명 또는 학과명 검색" required />
                    </div>
                </div>
                <div className="local__tap">
                        <ul>
                            <li className='tapActive'><Link href="/">전국</Link></li>
                            <li><Link href="/">서울</Link></li>
                            <li><Link href="/">경기</Link></li>
                            <li><Link href="/">강원</Link></li>
                            <li><Link href="/">인천</Link></li>
                            <li><Link href="/">충남</Link></li>
                            <li><Link href="/">충북</Link></li>
                            <li><Link href="/">대전</Link></li>
                            <li><Link href="/">경북</Link></li>
                            <li><Link href="/">경남</Link></li>
                            <li><Link href="/">대구</Link></li>
                            <li><Link href="/">부산</Link></li>
                            <li><Link href="/">울산</Link></li>
                            <li><Link href="/">전북</Link></li>
                            <li><Link href="/">전남</Link></li>
                            <li><Link href="/">광주</Link></li>
                            <li><Link href="/">제주</Link></li>
                        </ul>
                    </div>
                <div className="local__UN">
                    <img src={korea__map} alt="한국 지도" />
                </div>
            </div>
        </div>
    )
}

export default Map