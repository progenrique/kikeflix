import "./Reproductor.css";
import "../../../public/Imagen_no_disponible.svg.png";
import { URL_IMAGE, URL_API, options, URL_YOUTUBE } from "../const/const";
import { useEffect, useState } from "react";
import { httpHelp } from "../../helpers/helpHttp";

const Reproductor = ({ data, handleControl, trailerControl }) => {
  const [youtube, setYoutube] = useState(null);
  const [details, setDetails] = useState(null);

  let urlImage = data.backdrop_path
    ? `${URL_IMAGE}${data.backdrop_path}`
    : "../../../public/Imagen_no_disponible.svg.png";

  useEffect(() => {
    httpHelp()
      .get(`${URL_API}/movie/${data.id}/videos`, options)
      .then((res) => {
        if (!res.results.length <= 0) {
          setYoutube(res.results);
        } else {
          setYoutube(null);
        }
      })
      .catch((err) => setError(err));
  }, [data]);

  return (
    <>
      <div
        className="contenedor-div"
        style={{ backgroundImage: `url(${urlImage})` }}>
        {trailerControl ? (
          <section className="trailer">
            <iframe
              src={youtube && `${URL_YOUTUBE}${youtube[0].key}`}
              title={data.original_title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <button className="btn btn-dark p-3" onClick={handleControl}>
              cerrar video
            </button>
          </section>
        ) : (
          <section className="description">
            <h3>{data.original_title}</h3>
            <p>{data.overview}</p>
            {youtube ? (
              <button className="btn btn-primary" onClick={handleControl}>
                Ver trailer
              </button>
            ) : (
              <h4>Video no disponible por el momento</h4>
            )}
          </section>
        )}
      </div>
    </>
  );
};

export default Reproductor;
