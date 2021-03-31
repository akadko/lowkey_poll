const fs = require('fs')
const neatCsv = require('neat-csv')

function lowercaseHexLetters(hexString) {
    return hexString.replace(/A|B|C|D|E|F/g, (c) => {
        return {
            A: 'a',
            B: 'b',
            C: 'c',
            D: 'd',
            E: 'e',
            F: 'f',
        }[c]
    })
}

fs.readFile('./unicode.csv', 'utf8', function (err, contents) {
    if (err) {
        console.log(err)
        return
    }

    neatCsv(contents, { separator: ';' }).then((table) => {
        const obj = {}
        table.forEach((fields) => {
            const key = lowercaseHexLetters(fields['1'])
            const uppercase = lowercaseHexLetters(fields['13'])
            if (uppercase) {
                obj[key] = uppercase
            }
        })

        fs.writeFile(
            'unicodeUppercaseMap.json',
            JSON.stringify(obj, null, 4),
            function (err) {
                if (err) {
                    console.log(err)
                }
            }
        )
    })
})
