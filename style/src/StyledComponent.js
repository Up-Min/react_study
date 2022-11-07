import React from 'react';
import styled, { css } from 'styled-components';

const Box = styled.div`
  /* 2. input css style */
  background: ${(props) => props.color || 'blue'};
  /* 3. and also, 'background can recieve props' 
    on line 16. defines props color black (has props.value defines 'TRUE')
    as result. color results on line 6 comes out 'black' */
  padding: 1rem;
  display: flex;
`; /* 1. can make 1 div box by styled.div */

const Button = styled.button`
  background: white;
  color: black;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  /* & 문자를 사용하여 Sass 처럼 자기 자신 선택 가능 */
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }

  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => {
  return (
    <Box color="black">
      <button> 안녕하세요 </button>
      <button inverted={true}> 테두리만 </button>
    </Box> /* It relates 'const Box' */
    /* even box can attatch 'props' (color='black') */
  );
};

export default StyledComponent;
