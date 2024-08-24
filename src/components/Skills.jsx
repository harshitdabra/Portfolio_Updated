import React from 'react';

import Solidity from '../assets/solidity.png';
import Web3js from '../assets/web3js.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Hardhat from '../assets/hardhat.png';
import Truffle from '../assets/truffle.png';
import Dune from '../assets/dune.png';
import Sanbase from '../assets/sanbase.png';
import Nansen from '../assets/nansen.png';
import GitHub from '../assets/github.png';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'></p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-6 text-center py-10'>
          {/* Skill Item */}
          {[
            { src: HTML, alt: 'HTML icon', name: 'HTML' },
            { src: CSS, alt: 'CSS icon', name: 'CSS' },
            { src: JavaScript, alt: 'JavaScript icon', name: 'JavaScript' },
            { src: ReactImg, alt: 'React icon', name: 'React' },
            { src: GitHub, alt: 'GitHub icon', name: 'GitHub' },
            { src: Solidity, alt: 'Solidity icon', name: 'Solidity' },
            { src: Web3js, alt: 'Web3.js icon', name: 'Web3.js' },
            { src: Hardhat, alt: 'Hardhat icon', name: 'Hardhat' },
            { src: Truffle, alt: 'Truffle icon', name: 'Truffle' },
            { src: Dune, alt: 'Dune icon', name: 'Dune' },
            { src: Sanbase, alt: 'Sanbase icon', name: 'Sanbase' },
            { src: Nansen, alt: 'Nansen icon', name: 'Nansen' }
          ].map((skill, index) => (
            <div
              key={index}
              className='flex flex-col items-center justify-center p-4 bg-[#112240] rounded-lg shadow-lg transition-transform duration-300 ease-in-out border-2 border-transparent hover:scale-105 hover:border-pink-600 hover:shadow-xl'
            >
              <img className='w-16 h-16 object-contain mb-4' src={skill.src} alt={skill.alt} />
              <p className='text-lg font-semibold'>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
