import axios from "axios";

const api = axios.create({
  url: "https://api.themoviedb.org/3/",
  params: {
    api_key: "31beca263d0d8ee5e4536058f1b81a92",
    language: "en-US"
  }
});

export const movieApi = {
  getPopular: api.get("movie/popular"),
  getTopRated: api.get("movie/top_rated"),
  getUpcoming: api.get("movie/upcoming"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: searchTerm =>
    api.get("search/movie", {
      params: {
        query:  encodeURIComponent(searchTerm)
      }
    })
};

export const tvApi = {
  getPopular: api.get("tv/popular"),
  getTopRated: api.get("tv/top_rated"),
  getAiringToday: api.get("tv/on_the_air"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  search: searchTerm =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(searchTerm)
      }
    })
};
