import React from 'react';
import { AiOutlineMessage } from 'react-icons/ai';

const User = ({ user }) => {
  const { login, avatar_url: image, type, html_url: url } = user;
  return (
    <>
      <div className=' flex my-3'>
        <img src={image} alt={login} className='w-14 h-14 mr-4 rounded-full' />
        <div className=''>
          <p className='capitalize'>{login}</p>
          <small className='text-gray-400'>{type}</small>
        </div>
        <div className='ml-auto'>
          <a href={url}>
            <AiOutlineMessage
              size={25}
              style={{ color: 'gray' }}
              className=' cursor-pointer '
            />
          </a>
        </div>
      </div>
      <hr />
    </>
  );
};

export default User;
