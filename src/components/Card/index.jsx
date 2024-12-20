import React from 'react';

const Card = () => {
  return (
    <article className='bg-white shadow-card  border-2 border-black flex flex-col justify-center items-center w-[90%] max-w-80 md:max-w-[21rem] py-5 px-4 rounded-xl transition duration-300 ease-in-out transform  hover:shadow-card-hover'>
      <div className=''>
        <img
          src='/illustration-article.svg'
          alt='article illustration'
          className='rounded-xl'
        />
      </div>
      <div>
        <div className='py-4 md:py-3  text-gray-950'>
          <span className='bg-yellow rounded-sm text-[12px] font-bold px-3 py-1'>
            Learning
          </span>
          <p className='text-[12px] py-3 text-gray-950'>
            Published 21 Dec 2023
          </p>
          <h2 className='text-[20px] font-bold hover:text-yellow cursor-pointer pb-3 md:pb-2 text-gray-950'>
            HTML & CSS foundations
          </h2>
          <p className='text-[14px] text-gray-500'>
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className='flex items-center gap-3 font-bold'>
          <img src='/image-avatar.webp' className='w-8' alt='Avatar' />
          <p className='text-gray-950'>Greg Hooper</p>
        </div>
      </div>
    </article>
  );
};

export default Card;
