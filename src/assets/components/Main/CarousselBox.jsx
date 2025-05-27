const CarousselBox = ({ moviesImg }) => {
  return (
    <div className="caroussel-box">
      {moviesImg.map((element) => {
        return (
          <div className="movie-box">
            <img src={element} alt="image de film" />
          </div>
        );
      })}
    </div>
  );
};

export default CarousselBox;
