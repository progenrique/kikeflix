import { URL_IMAGE } from "../const/const";
import "./Cards.css";

const Cards = ({ pelicula, reproductor, setTrailerControl }) => {
  const handleClick = () => {
    reproductor(pelicula);
    setTrailerControl(false);
    //console.log(pelicula);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  let urlImage = pelicula.poster_path
    ? `${URL_IMAGE}${pelicula.poster_path}`
    : "../../../public/Imagen_no_disponible.svg.png";

  // console.log(pelicula);
  return (
    <>
      <figure onClick={() => handleClick()}>
        <img src={urlImage} alt={`portada ${pelicula.original_title}`} />
        <figcaption>{pelicula.original_title} </figcaption>
      </figure>
    </>
  );
};

export default Cards;
