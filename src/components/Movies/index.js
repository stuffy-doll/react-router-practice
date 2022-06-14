import MovieDetails from "../MovieDetails";

const { Route, NavLink, Switch } = require("react-router-dom");

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        {movies.map((item) => (
          <NavLink to={`/movies/${item.id}`}>{item.title}</NavLink>
        ))}
      </nav>
      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movies={movies} />
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
