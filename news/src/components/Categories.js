import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
/* 네비게이션에 링크를 거는  
component를 변수에 직접 지정해서 스타일 지정 가능*/

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'science',
    text: '과학',
  },
  {
    name: 'sports',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const CategoriesBlock = styled.div`
/* css블록 적용 */
display: flex;
padding: 1rem;
width: 768px;
margin: 0 auto;
@media screen and (max-width: 768px) {
width: 100%;
overflow-x: auto;
`;

const Category = styled(NavLink)`
  font-size: 1.125rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }

  &.active {
    font-weight: 600;
    border-bottom: 2px soild #22b8cf;
    color: #22b8cf;
    &:hover {
      color: #3bc9db;
    }
  }

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {' '}
      {/* 위에서 적용한 하나하나를 다 스타일 해줌. */}
      {categories.map((c) => {
        return (
          <Category
            key={c.name}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
            /* isActive : 현재 사이트의 경로가 맞게 활성화 되어있는지를 
                true/false로 구분시키는 isActive
                만약에 active가 되어있는 경우, 맞게 css스타일이 적용 됨. */
            to={c.name === 'all' ? '/' : `/${c.name}`}
          >
            {/* 어디로 보낼지 경로를 만들어주는 to 
                    c.name이 all인지 아닌지를 판단하여 root 경로로 이동시킬지,
                    지정한 카테고리로 이동시킬지 선택시킴*/}
            {c.text}
          </Category>
        );
      })}
    </CategoriesBlock>
  );
};

export default Categories;
