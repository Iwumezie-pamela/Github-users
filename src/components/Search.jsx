import React, { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import axios from '../axios';
import User from './User';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // users fetched from API
  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`/search/users?q=${searchQuery}`);
      return data?.items;
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery) {
      setUsers(await fetchUsers());
      setSearchQuery('');
    } else {
      alert('Your query is empty');
    }
  };

  return (
    <section className='flex flex-col max-w-md h-screen mx-auto py-4 px-3 md:px-0 lg:px-0 md:py-8 lg:py-10 relative'>
      {/* search  container */}
      <div className='bg-blue-500 '>
        <form className=''>
          {/* header */}
          <h2 className='text-xl text-slate-100 text-center mt-7 mb-2 tracking-wide'>
            Search
          </h2>
          <p className='text-base text-center text-gray-300 mb-6'>
            {users.length} Results
          </p>

          {/* input and search icon*/}
          <div className='flex items-center mb-6 px-7'>
            <input
              type='text'
              placeholder='Insert Username'
              className='bg-white text-slate-500 w-full h-11 outline-none p-3'
              value={searchQuery}
              onChange={handleChange}
            />

            <button
              type='submit'
              className='absolute right-10 cursor-pointer pt-1'
              onClick={handleSearch}
            >
              <BiSearch size={28} style={{ color: 'gray' }} />
            </button>
          </div>
        </form>
      </div>

      {/* user */}
      <div className='bg-white px-8 '>
        {users ? (
          users.map((user) => {
            return <User user={user} key={user?.id} />;
          })
        ) : (
          <h2>There is nothing to display</h2>
        )}
      </div>
    </section>
  );
};

export default Search;
