import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useParams } from 'react-router-dom';
/* 유저 파라미터 이용 */

const NewPage = () => {
  const params = useParams();
  const category = params.category || 'all';
  /* params에서 경로를 받는 category를 선언. 웹 링크 뒤에 /sports등 
    기사 홈페이지 별 붙이는 것을 표시함 
    카테코리가 값이 있는 경우 받은 params.category를 그대로 보내주고
    카테고리가 빈 값일 경우. all을 넣어줘서 대체 시킴 */
  console.log(category);

  return (
    <>
      {/* header가 될 부분 */}
      <Categories />

      {/* props로 자료 넘겨주기 const category => NewsList category */}
      <NewsList category={category} />
    </>
  );
};

export default NewPage;
