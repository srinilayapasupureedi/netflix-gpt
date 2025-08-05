import React from 'react'

const VideoTitle = ({title ,overview}) => {
  return (
    <div className=' w-screen aspect-video pt-[20%] px-24 absolute text-white'>
      <h1 className='text-6xl font-bold mb-2'>
        {title}
      </h1>
      <p className='py-6 text-md w-1/4'>
        {overview}
      </p>
      <div>
      <button className='bg-white text-black  p-2 px-12 text-xl hover:bg-opacity-50 rounded-lg mr-3'>
      <a href="https://www.flaticon.com/free-icons/play" title="play icons">Play</a>
    
      </button>
      <button className='bg-gray-500 text-white p-2 px-12 text-xl bg-opacity-50 rounded-lg'>
        More Info
      </button>
      </div>
    </div>
  );
}

export default VideoTitle;