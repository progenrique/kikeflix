export const API_KEY = "1578c50d579b43e3ea353895fc8e0633";
export const URL_API = "https://api.themoviedb.org/3";
export const URL_IMAGE = "https://image.tmdb.org/t/p/w500";
export const URL_YOUTUBE = "https://www.youtube.com/embed/";
export const URL_SEARCH = `${URL_API}/search/movie?query=`;

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTc4YzUwZDU3OWI0M2UzZWEzNTM4OTVmYzhlMDYzMyIsInN1YiI6IjY2NDY1NjNmZjYzZjQzNjYxM2VlZDhjYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KJtnchGsRbzv4IHCxmn0lS90hlv_74mY3-ztB3NhCjw",
  },
};

//let urlImage = `${URL_IMAGE}${data[1].backdrop_path}`;
//https://api.themoviedb.org/3/discover/movie
//https://api.themoviedb.org/3/search/movie?query=avengers
//https://api.themoviedb.org/3/search/movie

//crear una variable de estado del tipo si es discoveri o search
