import path from 'path'

export const pathUtil = {
  root(...args) {
    return path.resolve(__dirname, '..', ...args)
  }
}
