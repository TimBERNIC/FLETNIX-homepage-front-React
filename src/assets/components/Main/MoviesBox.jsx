import CarousselBox from "./CarousselBox";

const MoviesBox = ({ title, moviesImg }) => {
  return (
    <div className="category-box">
      <h2>{title}</h2>
      <CarousselBox moviesImg={moviesImg} />
    </div>
  );
};

export default MoviesBox;
