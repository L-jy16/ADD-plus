import React from 'react'

import Seoul from './localmap/Seoul';
import Gyeonggi from './localmap/Gyeonggi';
import Gangwon from './localmap/Gangwon';
import Incheon from './localmap/Incheon';
import Chungcheongnam from './localmap/Chungcheongnam';
import Chungcheongbuk from './localmap/Chungcheongbuk';
import Daejeon from './localmap/Daejeon';
import Gyeongsangnam from './localmap/Gyeongsangnam';
import Gyeongsangbuk from './localmap/Gyeongsangbuk';
import Daegu from './localmap/Daegu';
import Busan from './localmap/Busan';
import Ulsan from './localmap/Ulsan';
import Jeollabuk from './localmap/Jeollabuk';
import Jeollanam from './localmap/Jeollanam';
import Gwangju from './localmap/Gwangju';
import Jeju from './localmap/Jeju';

const MapDetail = (props) => {
  const { region } = props;

  let regionComponent;

  switch (region) {
    case '서울':
      regionComponent = <Seoul />;
      break;
    case '경기':
      regionComponent = <Gyeonggi />;
      break;
    case '강원':
      regionComponent = <Gangwon />;
      break;
    case '인천':
      regionComponent = <Incheon />;
      break;
    case '충남':
      regionComponent = <Chungcheongnam />;
      break;
    case '충북':
      regionComponent = <Chungcheongbuk />;
      break;
    case '대전':
      regionComponent = <Daejeon />;
      break;
    case '경북':
      regionComponent = <Gyeongsangbuk />;
      break;
    case '경남':
      regionComponent = <Gyeongsangnam />;
      break;
    case '대구':
      regionComponent = <Daegu />;
      break;
    case '부산':
      regionComponent = <Busan />;
      break;
    case '울산':
      regionComponent = <Ulsan />;
      break;
    case '전북':
      regionComponent = <Jeollabuk />;
      break;
    case '전남':
      regionComponent = <Jeollanam />;
      break;
    case '광주':
      regionComponent = <Gwangju />;
      break;
    case '제주':
      regionComponent = <Jeju />;
      break;
    default:
      regionComponent = null; // 알 수 없는 탭일 경우 처리
  }

  return (
    <div className='mapdetail__wrap'>
      <div className="map_desc">
        <span>대학명을 클릭하시면 대학별 정보(주소/학제/설립/캠퍼스/목표 대학 선택 회원수)를 확인할 수 있습니다.</span>
        <span>대학정보 + 를 클릭하시면 더 자세한 정보를 확인할 수 있습니다.</span>
      </div>

      {regionComponent}

    </div>
  )
}

export default MapDetail