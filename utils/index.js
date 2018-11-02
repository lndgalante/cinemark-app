import theaters from './theaters'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export { sleep, theaters }
