import { useParams } from 'react-router-dom';
import React from 'react';

const data = {
  haseo: {
    name: '김하서',
    description: '강사',
  },
  gildong: {
    name: '홍길동',
    description: '주인공',
  },
};

const Profile = () => {
  const params = useParams();
  console.log(params);
  const Profile = data[params.username];
  /* bring data from up object 'const data' */

  return (
    <div>
      <h1> PROFILE </h1>
      {Profile ? (
        <div>
          <h2>{Profile.name}</h2>
          <p>{Profile.description}</p>
        </div>
      ) : (
        <p> there is no profile </p>
      )}
    </div>
  );
};

export default Profile;
