const validateValue = require('./validateValue');
test('Валидация значения', () => {
    expect(validateValue(50)).toBe(true)
})
describe('validateValue', () => {
    test('Корректное значение', () => {
        expect(validateValue(50)).toBe(true)
    })
    test('Меньше корректного', () => {
        expect(validateValue(-1)).toBe(false)
    })
    test('Больше корректного', () => {
        expect(validateValue(101)).toBe(false)
    })
    test('Минимальное корректое', () => {
        expect(validateValue(0)).toBe(true)
    })
    test('Максимальное корректое', () => {
        expect(validateValue(100)).toBe(true)
    })
})