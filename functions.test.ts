const {shuffleArray} = require('./utils')

describe('shuffleArray', () => {
    test('returns an array', () => {
      const input = [1, 2, 3, 4, 5]
      const output = shuffleArray(input)
      expect(Array.isArray(output)).toBe(true)
    })
  
    test('returns an array of the same length as the input', () => {
      const input = [1, 2, 3, 4, 5]
      const output = shuffleArray(input)
      expect(output.length).toBe(input.length)
    })
  })
  