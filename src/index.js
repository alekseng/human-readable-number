module.exports = function toReadable (number) {

    const numberToNine = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    };

    const numberFromTenToNineteen = {
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
    };

    const numberFromTwentyToNinety = {
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
    };

let result = '';

    if (number / 100 >= 1) {
        result = result + `${numberToNine[Math.floor(number / 100)]} hundred `
    }

    if (number % 100 > 19) {
        result = result + `${numberFromTwentyToNinety[Math.floor((number % 100) / 10) * 10]} `

      if (number % 10 !== 0) {
          result = result + `${numberToNine[number % 10]}`;
      }
    } else {
      if (number % 100 > 9) {
          result = result + `${numberFromTenToNineteen[number % 100]}`
      } else if (number % 100 > 0) {
          result = result + `${numberToNine[number % 100]}`
      }
    }
      if (number == 0) {
        return numberToNine[number];
    }
    return result.trim();
 };
