import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi there! I’m Harshit Dabra, a passionate Blockchain Developer & Research Analyst.</p>
          </div>
          <div>
            <p className='text-lg'>
              With deep expertise in blockchain technologies, consensus protocols, and smart contract development, I specialize in both Layer 1 and Layer 2 protocols. My extensive experience with Solidity and the EVM environment has led to innovative solutions and significant achievements.
              <br /><br />
              I have spearheaded research initiatives that contributed to impressive growth and use of on-chain tools to deliver outstanding ROI for crypto portfolios. As a Cryptocurrency Portfolio Manager, I have consistently developed strategies that resulted in a 45% ROI.
              <br /><br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
