const MORSE_TABLE = {
    ' ':      ' ',
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let exprDecimated = expr.match(/.{1,10}/g);
    let exprEncoded = [];

    for (let i = 0; i < exprDecimated.length; i++) {

        let subExpr = exprDecimated[i].match(/.{1,2}/g);
        let subExprEncoded = []

        for (let j = 0; j < subExpr.length; j++) {

            if (subExpr[j] === '10') {
                subExprEncoded.push('.');
            } else if (subExpr[j] === '11') {
                subExprEncoded.push('-');
            } else if (subExpr[j] === '**' && j === subExpr.length - 1) {
                subExprEncoded.push(' ');
            }

        }
        exprEncoded.push(subExprEncoded.join(''));
    }

    let exprDecoded = [];
    for (let k = 0; k < exprEncoded.length; k++) {
        exprDecoded.push(MORSE_TABLE[exprEncoded[k]]);
    }
    return exprDecoded.join('');
}

module.exports = {
    decode
}