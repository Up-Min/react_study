import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
box-sizing: border-box;
padding-bottom: 3rem;
width: 768px;
margin: 0 auto;
margin-top: 2rem;

@media screen and (max-width: 768px) {
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
`;

/* newpage에 있는 props 받아오기 */
const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  /* 로딩 -> 자료 가져오기 전에 '대기중...' 띄우는  */

  /* 컴포넌트 렌더링 될 때 실행되는 useEffect */
  useEffect(() => {
    const fetchData = async () => {
      /*여기서부터 로딩 시작  */
      setLoading(true);
      try {
        const query = category === 'all' ? ' ' : `&category=${category}`;
        /* newsAPI의 카테고리별 요소를 다르게 지정 */
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&{query}&apiKey=4af1b1aee8c448788e1b3cb9460ea2a4`
        );
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };

    fetchData();
  }, [category]);
  /* 맨 처음 한번만 안에있는 코드를 실행시킴 */

  /* axios 사용 (API데이터 불러오기) */

  /* 대기중일때 */
  if (loading) {
    return <NewsListBlock>대기중....</NewsListBlock>;
  }

  /* 기사 받는 부분 대응, 제대로 기사를 못 받았을 때를 대비하여 */
  if (!articles) {
    return null;
  }

  /* 이제 불러온 데이터를 만들어준다 */
  return (
    <NewsListBlock>
      {articles.map((article) => {
        <NewsItem key={article.url} article={article}></NewsItem>;
      })}
      {/* 맵을 돌리면for문처럼 계속 돌려준다 */}
    </NewsListBlock>
  );
};

export default NewsList;
