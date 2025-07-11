import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';

const useMovieTrailer = (movieId) => {
 const dispatch = useDispatch();
 const trailer = useSelector(store=>store.movies.trailer);

 const getMovieVideos = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTIONS);
     const json = await data.json();
     const filterData = json.results.filter(video => video.type==="Trailer");
     const trailer = filterData.length ? filterData[0] : json.results[0];
     dispatch(addTrailerVideo(trailer));
   }
 
   useEffect(()=>{
    !trailer && getMovieVideos();
   }, [])
}

export default useMovieTrailer;