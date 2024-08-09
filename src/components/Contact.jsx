import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action="https://getform.io/f/bmdpgxza" className='flex flex-col max-w-[600px] w-full bg-[#1a2238] p-8 rounded-lg shadow-lg'>
        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 border-pink-600 text-gray-300 mb-4'>Contact</p>
          <p className='text-gray-300 mb-8'>Feel free to submit the form below or drop me an email at <a href="mailto:dabraharshit@gmail.com" className='text-pink-600 underline'>dabraharshit@gmail.com</a>.</p>
        </div>
        <input 
          className='bg-[#2d3142] text-white p-3 rounded-md border border-[#3b4e6d] focus:outline-none focus:border-pink-600 transition-colors duration-300'
          type="text" 
          placeholder='Name' 
          name='name' 
          required 
        />
        <input 
          className='my-4 bg-[#2d3142] text-white p-3 rounded-md border border-[#3b4e6d] focus:outline-none focus:border-pink-600 transition-colors duration-300' 
          type="email" 
          placeholder='Email' 
          name='email' 
          required 
        />
        <textarea 
          className='bg-[#2d3142] text-white p-3 rounded-md border border-[#3b4e6d] focus:outline-none focus:border-pink-600 transition-colors duration-300' 
          name="message" 
          rows="6" 
          placeholder='Message' 
          required 
        ></textarea>
        <button 
          className='bg-pink-600 text-white border-2 border-pink-600 px-6 py-3 mt-8 mx-auto rounded-md hover:bg-pink-700 transition-colors duration-300 flex items-center'
        >
          <span className='mr-2'>Let's Collaborate</span>
        </button>
      </form>
    </div>
  );
};

export default Contact;
