const MORSE_TABLE = {
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
    function findLetter(cod, a, b){
        let i=0;
        do {
            if (a[i]===cod) return b[i]
            else i +=1; 
        } while (i<=(a.length-1));
        return 'not found';
    } //end findLetter

    function getSymbol (str,a, b){ 
      let res='';
      if (str[0]=='*') return ' '
            else {
                for (let i=0; i<=8; i=i+2) {
                   ((str[i]=='1')&&(str[i+1]=='0')) ? res+='.':((str[i]=='1')&&(str[i+1]=='1')) ? res+='-' : {}; 
                }  
            }
        return findLetter(res, a, b)    
    }  //end getSymbol
  
    const key = Object.keys(MORSE_TABLE);
    const symb = Object.values(MORSE_TABLE);
    var res='';
    var substr='';
    for (let i=0; i<=expr.length-10; i+=10){
        substr=expr.slice(i, i+10);
        res += getSymbol(substr, key, symb);
    } 
    return res;
    // write your solution here
}

module.exports = {
    decode
}