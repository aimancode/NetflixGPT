import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowplayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';

const Browse = () => {

// Fetch data from tmdb and update the store
useNowPlayingMovies();
usePopularMovies();
useUpcomingMovies();
useTopRatedMovies();

  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
         MainContainer
         - videoBackground
         - videoTitle

         SecondaryContainer
         - MovieList * n
           - cards * n
      
      */}
    </div>
  )
}

export default Browse;