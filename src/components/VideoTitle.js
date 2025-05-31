import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/3 hidden md:inline-block'>{overview}</p>
        <div className='my-4 md:m-0'>
        <button className='bg-white text-black my-2 py-1 md:py-4 px-3 md:px-12 text-xl hover:bg-opacity-80 rounded-lg'>Play</button>
        <button className='mx-2 bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg hidden md:inline-block'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle