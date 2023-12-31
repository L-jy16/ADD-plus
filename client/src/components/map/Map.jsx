import React, { useState } from 'react';
// import { useParams } from 'react-router-dom'

import { PiMagnifyingGlassBold } from "react-icons/pi";
import MapDetail from './MapDetail';
import MapSide from './MapSide';
// import Mapdepartment from './Mapdepartment';



const Map = () => {

    // const { region } = useParams();
    const [activeTap, setActiveTap] = useState('전국');
    const [activemenu, setActiveMenu] = useState('전체 지도');

    const handleTapClick = (tap) => {
        setActiveTap(tap);
        // region(tap)
    };

    const handleClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <div className='info__wrap'>
            <MapSide onTabClick={handleClick} activeMenu={activemenu} />
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
                    {activeTap === '전국' ? (
                        <>
                            <div className="koreaMap">
                                {[
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
                                ].map((name) => (
                                    <button type='button' key={name} className={`localName ${name}`} onClick={() => handleTapClick(name)}>
                                        {name}
                                    </button>
                                ))}
                                <span className='localName 독도'>독도</span>
                            </div>

                        </>
                    ) : (<MapDetail region={activeTap} />)}

                </div>


            </div>
        </div >
    )
}

export default Map