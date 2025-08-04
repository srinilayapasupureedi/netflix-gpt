import React from 'react'

const VideoTitle = ({title ,overview}) => {
  return (
    <div className='pt-36 px-12 absolute text-white'>
      <h1 className='text-6xl font-bold mb-2'>
        {title}
      </h1>
      <p className='mb-3'>
        {overview}
      </p>
      <div>
      <button className='bg-gray-500 text-white p-2 px-12 text-xl bg-opacity-50 rounded-lg mr-3'>
       ▶️ Play
      </button>
      <button className='bg-gray-500 text-white p-2 px-12 text-xl bg-opacity-50 rounded-lg'>
        More Info
      </button>
      </div>
    </div>
  );
}

export default VideoTitle;