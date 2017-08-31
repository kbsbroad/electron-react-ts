const path = require('path')

export const fromRoot = (...args) => {
  return path.resolve(__dirname, '..', ...args)
}
