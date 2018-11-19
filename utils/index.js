const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const normalize = string =>
  string
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()

export { sleep, normalize }
