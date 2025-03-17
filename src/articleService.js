import axios from "axios";

export const fetchArticles = async (topic) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?query=${topic}&orientation=landscape&per_page=9&client_id=rc7ikE3GSphGLM5Qt1Omx9WnfsXpe-T9hNq9IIBX2Pg`
  );
  return response.data.results;
};
