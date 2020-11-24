import queryString from 'query-string';

const baseURL = 'https://cinemark-api-wrapper.vercel.app';

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const normalize = (string) => {
  return string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
};

const getPremiereInfo = async (movieId, cinemaId) => {
  const res = await fetch(`${baseURL}/movie?${queryString.stringify({ movieId, cinemaId })}`);
  const data = await res.json();

  return data;
};

export { sleep, normalize, getPremiereInfo, baseURL };
