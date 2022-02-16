function numToTxt(num) {
    let str = ''
    let count = 0
    while (num) {
        let currStr = ''
        let currNum = num % 1000
        let hundredsDigit = parseInt((currNum / 100).toString())
        let hundredsStr = getSingleNumTxt(hundredsDigit)
        let tensDigit = parseInt((currNum / 10).toString()) % 10
        let twoLastDigitStr = ''
        if (tensDigit === 1) {
            twoLastDigitStr = getLastTwoDigitTxt(currNum % 100)
        } else if (!tensDigit) {
            twoLastDigitStr = getSingleNumTxt(currNum % 10)
        } else {
            twoLastDigitStr = getTensTxt(tensDigit)
            if (currNum % 10) twoLastDigitStr += ` ${getSingleNumTxt(currNum % 10)}`
        }
        if (hundredsStr) currStr += `${hundredsStr} hundreds and `
        currStr += `${twoLastDigitStr} ${getAmountTxt(count++)} `
        str = currStr + str
        num = parseInt((num / 1000).toString())
    }
    return str
}
module.exports = numToTxt
// numToTxt(16050)

function getSingleNumTxt(num) {
    const helper = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        0: ''
    }
    return helper[num]
}

function getLastTwoDigitTxt(num) {
    const helper = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',

    }
    return helper[num]
}

function getTensTxt(num) {
    const helper = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }
    return helper[num]
}

function getAmountTxt(num) {
    const helper = {
        0: '',
        1: 'thousand',
        2: 'million',
        3: 'billion'
    }
    return helper[num]
}
