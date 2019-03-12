import axios from "axios";

const api = axios.create({
  url: "https://api.themoviedb.org/3/",
  params: {
    api_key: "31beca263d0d8ee5e4536058f1b81a92",
    language: "en-US"
  }
});

export const movieApi = {
  popular: api.get("movie/popular"),
  topRated: api.get("movie/top_rated"),
  upcoming: api.get("movie/upcoming"),
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
  popular: api.get("tv/popular"),
  topRated: api.get("tv/top_rated"),
  airingToday: api.get("tv/on_the_air"),
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
