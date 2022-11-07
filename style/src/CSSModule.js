import React from 'react';
import styles from './CSSModule.module.css';

const CSSModule = () => {
  return (
    <div className={styles.wrapper}>
      안녕하세요 <span className="something"> css module </span> 입니다.
    </div>
  );
};

export default CSSModule;
