const MoviesBox = ({ title, moviesImg }) => {
  return (
    <div className="category-box">
      <h2>{title}</h2>
      <div className="caroussel-box">
        {moviesImg.map((element) => {
          return (
            <div className="movie-box">
              <img src={element} alt="image de film" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoviesBox;
