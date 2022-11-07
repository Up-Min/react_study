import React from 'react';
import styled, { css } from 'styled-components';

const NewsItemBlock = styled.div`
  display: flex;

  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  console.log(article);
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <a href={url}>
            <img src={urlToImage} alt="썸네일" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          {/* noopener noreferrer : 새창으로 링크를 띄울 시 보안 취약점 방지, 성능 up */}
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
