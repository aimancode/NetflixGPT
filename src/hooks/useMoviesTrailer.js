import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";


const useMoviesTrailer = ({movieId}) =>{
      const dispatch = useDispatch();
  // fetch trailer video make an api which needs movie id 

  const getMovieVideos = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId +
        '/videos?language=en-US', API_OPTIONS);
    const json = await data.json();
    console.log("TMDB video response:", json.results);

    // filter the video data which has trailer in it
    const filterData = (json.results || []).filter(video => video.type === "Trailer");
 
    // this checks filter data if it does not trailer in it takes the first video of any type 
    const trailer = filterData.length ? filterData[0] : (json.results?.[0] || null);

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() =>{
    getMovieVideos();

  },[]);
}

export default useMoviesTrailer;