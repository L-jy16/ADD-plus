import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom'

import korea__map from '../../assets/img/map/map.png'

import { FaRegMap } from "react-icons/fa";
import { FiTable } from "react-icons/fi";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import MapDetail from './MapDetail';



const Map = () => {

    const {region} = useParams();
    // const [activeTap, setActiveTap] = useState('전국');
    const [activeTap, setActiveTap] = useState(region || '전국');

    const handleTapClick = (tap) => {
        setActiveTap(tap);
    };

    return (
        <div className='info__wrap'>
            <div className='menu__info'>
                <h3 className='menu__title'>add map</h3>
                <div className="menu__Detail">
                    <ul>
                        <li className='active'><Link to="/"> <FaRegMap /> 전제 지도</Link></li>
                        <li><Link to="/"> <FiTable /> 학과 정보</Link></li>
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
                        {[
                            '전국',
                            '서울',
                            '경기',
                            '강원',
                            '인천',
                            '충남',
                            '충북',
                            '대전',
                            '경북',
                            '경남',
                            '대구',
                            '부산',
                            '울산',
                            '전북',
                            '전남',
                            '광주',
                            '제주',
                        ].map((tap) => (
                            <li
                                key={tap}
                                className={activeTap === tap ? 'activeTap' : ''}
                            >
                                <button type='button' onClick={() => handleTapClick(tap)}>
                                    {tap}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="local__UN">
                    { activeTap === '전국' ? <img src={korea__map} alt="한국 지도" /> : <MapDetail region={activeTap}/> }
                    
                </div>
            </div>
        </div>
    )
}

export default Map