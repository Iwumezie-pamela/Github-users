import React, { state, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { AiOutlineMessage } from 'react-icons/ai';
import human from '../assets/human.avif';

const Home = () => {
  const [name, setName] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  console.log(name);
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setName('');
    console.log('i got clicked');
  };

  return (
    <section>
      <div className='flex flex-col max-w-md h-screen mx-auto py-10 relative '>
        <form className='bg-blue-500'>
          <h2 className='text-xl text-slate-100 text-center mt-7 mb-2 tracking-wide'>
            Search
          </h2>
          <p className='text-base text-center text-gray-300 mb-6'>
            count Results
          </p>
          <div className='flex items-center mb-6 px-7'>
            <input
              type='text'
              placeholder='input name'
              className='bg-white text-slate-500 w-full h-10 outline-none p-3'
              value={name}
              onChange={handleChange}
            />
            <BiSearch
              size={28}
              style={{ color: 'gray' }}
              className='absolute right-10 cursor-pointer'
              onClick={handleSearch}
            />
          </div>
        </form>
        <div className='bg-white h-screen px-8 '>
          <div className=' flex my-3'>
            <img
              src={human}
              alt='image'
              className='w-14 h-14 mr-4 rounded-full'
            />
            <div className=''>
              <p>Iwumezie Pamela</p>
              <small className='text-gray-400'>Lagos</small>
            </div>
            <div className='ml-auto'>
              <AiOutlineMessage
                size={25}
                style={{ color: 'gray' }}
                className=' cursor-pointer '
              />
            </div>
          </div>
          <hr />
        </div>
      </div>
    </section>
  );
};

export default Home;
