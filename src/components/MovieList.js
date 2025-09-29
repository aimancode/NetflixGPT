import MovieCart from "./MovieCart";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="p-6">
      <h1 className="text-3xl py-2 text-white">{title}</h1>

      {/* Scrollable container */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-2">
          {movies?.map((movie) => (
            <MovieCart key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
