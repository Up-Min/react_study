import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  /* can get easily querystring  */
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터 프로젝트</p>
      <p> detail : {detail} </p>
      <p>mode : {mode} </p>
      <p>쿼리스트링 : {location.search}</p>
    </div>
  );
};

export default About;
