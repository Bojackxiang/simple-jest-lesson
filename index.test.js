const {add} = require('./index')

test('should return a string say hello', () => {
    expect(add()).toBe("hello")
})