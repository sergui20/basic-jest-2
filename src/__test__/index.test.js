const { randomCity } = require('../index');

describe('Should get random cities', () => {
    test('Should return a string type', () => {
        expect(typeof randomCity()).toBe('string')
    });

    test('Should not include Cordoba', () => {
        expect(randomCity()).not.toMatch(/Cordoba/)
    });
});
