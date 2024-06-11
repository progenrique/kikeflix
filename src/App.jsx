import Header from "./assets/components/Header";
import "./App.css";
import Reproductor from "./assets/components/Reproductor";
import Cards from "./assets/components/Cards";
import { useEffect, useState } from "react";
import { httpHelp } from "./helpers/helpHttp";
import { URL_API, options, URL_SEARCH } from "./assets/const/const";
import Footer from "./assets/components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./assets/components/Details";

function App() {
  const [data, setData] = useState(null);
  const [frontPage, setFrontPage] = useState(null); //se almacena la  los datos de la portada
  const [error, setError] = useState(null);
  const [trailerControl, setTrailerControl] = useState(false);
  const [detailsControl, setDetailsControl] = useState(false);
  const [search, setSearch] = useState("");

  //https://api.themoviedb.org/3/discover/movie?api_key=1578c50d579b43e3ea353895fc8e0633
  //https://api.themoviedb.org/3/search/movie?query=avengers
  //`${URL_API}/discover/movie`

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
      <BrowserRouter>
        <Header
          setSearch={setSearch}
          search={search}
          searchPeticion={searchPeticion}
        />
        <Routes>
          <Route path="/details" element={<Details />} />
          <Route
            path="/"
            element={
              <>
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
                    data.map((el, index) => (
                      <Cards
                        key={index}
                        pelicula={el}
                        reproductor={reproductor}
                        setTrailerControl={setTrailerControl}
                      />
                    ))}
                </section>
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
