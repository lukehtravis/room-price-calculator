import { roundNumber } from './roundNumber'

describe('roundNumber', () => {
  it('should round a number to the specified number of decimals', () => {
    expect(roundNumber(3.14159, 2)).toBe(3.14)
    expect(roundNumber(2.71828, 1)).toBe(2.7)
    expect(roundNumber(123.456789, 0)).toBe(123)
  })

  it('should handle negative numbers correctly', () => {
    expect(roundNumber(-3.14159, 2)).toBe(-3.14)
    expect(roundNumber(-2.71828, 1)).toBe(-2.7)
    expect(roundNumber(-123.456789, 0)).toBe(-123)
  })

  it('should round to the nearest integer when decimals is 0', () => {
    expect(roundNumber(3.9, 0)).toBe(4)
    expect(roundNumber(3.1, 0)).toBe(3)
  })

  it('should return NaN for non-numeric inputs', () => {
    expect(roundNumber('abc', 2)).toBeNaN()
    expect(roundNumber(null, 2)).toBeNaN()
    expect(roundNumber(undefined, 2)).toBeNaN()
    expect(roundNumber({}, 2)).toBeNaN()
  })

  it('should return NaN for invalid decimals', () => {
    expect(roundNumber(3.14159, -1)).toBeNaN()
  })
})
