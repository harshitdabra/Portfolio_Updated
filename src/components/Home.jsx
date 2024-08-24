import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div id='home' className='w-full h-screen bg-[#0a192f] flex items-center'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-center md:text-left'>
        <p className='text-pink-600 text-lg uppercase tracking-widest mb-4 md:mb-6'>
          Hi, my name is
        </p>
        <h1 className='text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#ccd6f6] my-2'>
          Harshit Dabra
        </h1>
        <h2 className='text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#8892b0] mb-4'>
          I'm a Blockchain Developer and Research Analyst.
        </h2>
        <p className='text-[#8892b0] py-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-[700px] mx-auto md:mx-0'>
          Creating blockchain solutions with a focus on dApps and smart contracts, I blend technical skills with insightful research for meaningful results.
        </p>
        <div className='flex justify-center md:justify-start mt-6'>
          <Link to='work' smooth={true} duration={500}>
            <button className='text-white group border-2 border-pink-600 px-6 py-3 flex items-center bg-pink-600 hover:bg-pink-700 transition duration-300 ease-in-out rounded-lg shadow-lg transform hover:scale-105'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
