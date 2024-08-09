import React from 'react';
import { data } from "../data/data.js";

const Work = () => {
  // Projects file
  const project = data;

  // Ensure 9 items (7 projects + 2 placeholders for coming soon)
  const placeholders = new Array(9 - project.length).fill(null);
  const allProjects = [...project, ...placeholders];

  // Placeholder image (same as project image for consistency)
  const placeholderImage = project[0] ? project[0].image : 'default-placeholder.jpg'; // Fallback image if project array is empty

  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Work
          </p>
          <p className='py-6'></p>
        </div>

        {/* Container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {allProjects.map((item, index) => (
            <div
              key={index}
              style={{ 
                backgroundImage: `url(${item ? item.image : placeholderImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
              className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div h-60 w-full"
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100 w-full h-full flex flex-col justify-center items-center bg-black bg-opacity-50 transition-opacity duration-300">
                <span className="text-2xl font-bold text-white tracking-wider">
                  {item ? item.name : 'Coming Soon'}
                </span>
                {item && item.live ? (
                  <div className="pt-8 text-center">
                    {/* Visit Button */}
                    <a href={item.live} target="_blank" rel="noopener noreferrer">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg"
                      >
                        Visit
                      </button>
                    </a>
                  </div>
                ) : (
                  <div className="pt-8 text-center">
                    {/* Coming Soon Placeholder */}
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2 bg-gray-600 text-white font-bold text-lg"
                    >
                      Coming Soon
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
