const { randomString } = require('./generate-string')


var countOfD = 0

for (let i = 0; i < randomString.length; i++) {
    if (randomString[i] === 'd' || randomString[i] === 'D') {
        countOfD++;
    }
}


try { module.exports = { randomString, countOfD } } catch(e) {}