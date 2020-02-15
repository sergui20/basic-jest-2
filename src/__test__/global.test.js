const text = 'Hello World'
const fruits = ['apple', 'grape', 'banana']

test('Should contain a text', () => {
    expect(text).toMatch(/World/)
});

test('Should include banana', () => {
    expect(fruits).toContain('banana')
});

test('Greater than', () => {
    expect(10).toBeGreaterThan(9)
});

test('Is true', () => {
    expect(true).toBeTruthy()
});

// Callback test
const reverseString = (str, cb) => {
    cb(str.split('').reverse().join(''))
}
test('Callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH')
    });
});

// Promise test
const reverseString2 = (str) => {
    return new Promise((resolve, reject) => {
        if(!str) reject(Error('No string'))

        resolve(str.split('').reverse().join(''))
    });
}

test('Should return a string reversed', () => {
    return reverseString2('Hola')
        .then(res => {
            expect(res).toBe('aloH')
        })
});


test('Should reject if no string is provided', () => {
    return expect(reverseString2()).rejects.toThrow('No string')
});

// Aync/Await
test('Test success with async/await', async() => {
    const reversedWord = await reverseString2('Hola')
    expect(reversedWord).toBe('aloH')
});

test('Test fail with async/await', async() => {
    try {
        await reverseString2()
    }catch(err) {
        expect(err).toStrictEqual(Error('No string'))
    }
});

// beforeAll(() => console.log('Before all tests'))
// beforeEach(() => console.log('Before each test'))
// afterEach(() => console.log('After each test'))
// afterAll(() => console.log('After all tests'))
