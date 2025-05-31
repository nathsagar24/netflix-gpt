import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
        <div>
            <div className='fixed md:absolute -z-10'>
        <img className='h-screen w-screen object-cover' src={BG_URL}
    alt='logo'/>
    </div>
    <div className=''>
        </div>
        <GPTSearchBar/>
        <GPTMovieSuggestions/>
    </div>
    </>
  )
}

export default GPTSearch