import Request from './src/BrowserRequest'

const createInstanceMethods = [
  'path',
  'p',
  'pathRaw',
  'beforeSend',
  'query',
  'q',
  'queryAll',
  'header',
  'auth',
  'contentType',
  'withText',
  'withJson',
  'accept',
  'asText',
  'asXML',
  'asRaw',
  'cache',
  'append',
  'formData',
  'formUrl'
]

const createInstance = () => {
  const request = () => new Request()
  for (const method of createInstanceMethods) {
    request[method] = (...theArgs) => {
      const instance = new Request()
      instance[method](...theArgs)
      return instance
    }
  }
  return request
}

export const clearCache = Request.clearCache

export default createInstance()
