import MoviesBox from "./MoviesBox";
import data from "../../json/movies_rnexgr.json";
import "./Main.css";
const Main = () => {
  return (
    <main>
      <div className="container">
        {data.map((element, index) => {
          return (
            <MoviesBox
              title={element.category}
              moviesImg={element.images}
              key={element.category + index}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Main;
