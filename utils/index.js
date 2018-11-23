const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const normalize = string =>
  string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const getPremiereInfo = async (movieId, cinemaId) => {
  const res = await fetch(`https://cinemark-wrapper-api.now.sh/movie?movieId=${movieId}&cinemaId=${cinemaId}`)
  const data = await res.json()

  return data
}

export { sleep, normalize, getPremiereInfo }
