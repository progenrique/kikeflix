let data = [
  {
    adult: false,

    backdrop_path: "/j3Z3XktmWB1VhsS8iXNcrR86PXi.jpg",

    genre_ids: [878, 28, 12],

    id: 823464,

    original_language: "en",

    original_title: "Godzilla x Kong: The New Empire",

    overview:
      "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",

    popularity: 6160.662,

    poster_path: "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",

    release_date: "2024-03-27",

    title: "Godzilla x Kong: The New Empire",

    video: false,

    vote_average: 7.24,

    vote_count: 1956,
  },
];

console.log(data[0].backdrop_path);

//codigo de app antes del custom hooks

import Header from "./assets/components/Header";
import "./App.css";
import Reproductor from "./assets/components/Reproductor";
import Cards from "./assets/components/Cards";
import { useEffect, useState } from "react";
import { httpHelp } from "./helpers/helpHttp";
import { URL_API, options, URL_SEARCH } from "./assets/const/const";
import Footer from "./assets/components/Footer";

function App() {
  const [data, setData] = useState(null);
  const [frontPage, setFrontPage] = useState(null); //se almacena la  los datos de la portada
  const [error, setError] = useState(null);
  const [trailerControl, setTrailerControl] = useState(false);
  const [search, setSearch] = useState("");

  //https://api.themoviedb.org/3/discover/movie
  //https://api.themoviedb.org/3/search/movie?query=avengers
  //`${URL_API}/discover/movie`

  const useRequest = () => {};

  const request = (url) => {
    httpHelp()
      .get(url, options)
      .then((res) => {
        setData(res.results);
        setFrontPage(res.results[0]);
      })
      .catch((err) => setError(err));
  };

  useEffect(() => {
    request(`${URL_API}/discover/movie`);
  }, []);

  const reproductor = (pelicula) => {
    setFrontPage(pelicula);
  };

  const handleControl = () =>
    trailerControl ? setTrailerControl(false) : setTrailerControl(true);

  const searchPeticion = () => {
    setSearch("");
    request(`${URL_SEARCH}${search}`);
  };

  return (
    <>
      <Header
        setSearch={setSearch}
        search={search}
        searchPeticion={searchPeticion}
      />
      {frontPage && (
        <Reproductor
          data={frontPage}
          error={error}
          trailerControl={trailerControl}
          handleControl={handleControl}
        />
      )}
      <section className="cards bg-light container">
        {data &&
          data
            .slice(1)
            .map((el, index) => (
              <Cards
                key={index}
                pelicula={el}
                reproductor={reproductor}
                setTrailerControl={setTrailerControl}
              />
            ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
