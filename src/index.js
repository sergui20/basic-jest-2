const cities = ['ciudad de mexico', 'guayaquil', 'lima', 'bogota', 'buenos aires']

function randomCity() {
    return cities[Math.floor(Math.random() * cities.length)]
}

function reverseString2(str) {
    return new Promise((resolve, reject) => {
        if(!str) reject(Error('No string'))

        resolve(str.split('').reverse().join(''))
    });
}

module.exports = {
    randomCity
}