import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "31beca263d0d8ee5e4536058f1b81a92",
    language: "en-US"
  }
});

// 각 프로퍼티에 외부 함수의 값을 받아오는 경우, 함수 리턴을 해줘야 한다. 단순히 함수만 쓰게 되면 에러가 나타남
/**
 * 나타나는 에러
 * possible Unhandled Promise Rejection(id:0), Error : Network Error
 * 이건데..
 * () => api.get('') 해야하는 것을 그냥 api.get('')만 할 경우 나타난다.
 */
export const movies = {
  getPopular: () => api.get("movie/popular"),
  getUpcoming: () => api.get("movie/upcoming"),
  getNowPlaying: () => api.get("movie/now_playing"),
  movieDetail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  searchMovie: searchTerm =>
    api.get("search/movie", {
      params: {
        query: encodeURIComponent(searchTerm)
      }
    })
};

export const tv = {
  getPopular: () => api.get("tv/popular"),
  getOnAirWeek: () => api.get("tv/on_the_air"),
  getAiringToday: () => api.get("tv/on_the_air"),
  showDetail: id =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos"
      }
    }),
  searchTv: searchTerm =>
    api.get("search/tv", {
      params: {
        query: encodeURIComponent(searchTerm)
      }
    })
};
