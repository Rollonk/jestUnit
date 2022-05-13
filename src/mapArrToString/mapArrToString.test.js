const mapArrToString = require('./mapArrToString');

describe('mapArrToString', () => {
    test('Корректное значение', () => {
        expect(mapArrToString([1,2,3,4])).toEqual(["1","2","3","4"])
    })
    test('Разные типы данных', () => {
        expect(mapArrToString([1,2,3,4,null,undefined, 'letter'])).toEqual(["1","2","3","4"])
    })
    test('Пустой массив', () => {
        expect(mapArrToString([])).toEqual([])
    })
    test('Отрицание', () => {
        expect(mapArrToString([1,2,3])).not.toEqual([1,2,3,4])
    })
})