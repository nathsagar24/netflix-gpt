import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovieResults } from '../utils/gptSlice';

const GPTSearchBar = () => {
  const langKey = useSelector(store=> store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query: " + searchText.current?.value + ". Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

  const searchMovieTmdb = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleGPTSearchClick = async () => {
    const gptResults = await openai.chat.completions.create({
        messages: [{role: 'user', content: gptQuery}],
        model: 'gpt-3.5-turbo'
    })
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = gptMovies.map(movie => searchMovieTmdb(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(addGPTMovieResults({movieNames: gptMovies, movieResults: tmdbResults}))
  }

  return (
    <div className='pt-{10%} flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder} />
            <button className='m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-3' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar