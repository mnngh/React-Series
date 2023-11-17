import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
  const data = useLoaderData();

  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch('https://api.github.com/users/mnngh')
  //       .then((response) => response.json())
  //       .then((data) => setData(data));
  //   }, []);
  return (
    <div className='text-center m-4 p-4 text-white text-3xl bg-gray-600'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt='Git Picture' width={300} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/mnngh');
  return response.json();
};
