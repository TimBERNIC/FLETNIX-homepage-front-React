const CarousselBox = ({ moviesImg }) => {
  return (
    <div className="caroussel-box">
      {moviesImg.map((elementUrl) => {
        return (
          <div className="movie-box">
            <img src={elementUrl} alt="image de film" />
          </div>
        );
      })}
    </div>
  );
};

export default CarousselBox;
