const map = require('./unicodeUppercaseMap.json')

function toUpperCase(string) {
    let result = ''
    string.split('').forEach((char, i) => {
        const utfCode = char.charCodeAt(0).toString(16).padStart(4, '0')
        const uppercasedCode = map[utfCode]
            ? String.fromCharCode(parseInt(map[utfCode], 16))
            : char
        result += uppercasedCode
    })
    return result
}

const latin = toUpperCase('lOwkEy')
console.log('lOwkEy', ' -> ', latin)

const cyrillic = toUpperCase('лоуки')
console.log('лоуки', ' -> ', cyrillic)

const greek = toUpperCase('χαμηλών τόνων')
console.log('χαμηλών τόνων', ' -> ', greek)

const hebrew = toUpperCase('תו נמוך')
console.log('תו נמוך', ' -> ', hebrew)

const nonLetters = toUpperCase('123?! _ + l0ш|<3¥')
console.log('123?! _ + l0ш|<3¥', ' -> ', nonLetters)
