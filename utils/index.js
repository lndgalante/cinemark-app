const baseURL = 'https://cinemark-wrapper-api-rapblokgqa.now.sh'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const normalize = string =>
  string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

const getPremiereInfo = async (movieId, cinemaId) => {
  const res = await fetch(`${baseURL}/movie?movieId=${movieId}&cinemaId=${cinemaId}`)
  const data = await res.json()

  return data
}

export { sleep, normalize, getPremiereInfo, baseURL }
