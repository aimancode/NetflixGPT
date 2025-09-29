import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowplayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

// Fetch data from tmdb and update the store
useNowPlayingMovies();

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