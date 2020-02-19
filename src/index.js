module.exports = function toReadable (number) {
    let array = String(number).split('').reverse().map((x) => Number(x));
    let result = '';
    if(array.length == 3){
        result = toReadable(Number(array[2])) + ' hundred ';
        number = Number(String(array[1]) + array[0]);
    }

    if (array[1] == 2) result = result + "twenty ";
    if (array[1] == 3) result = result + "thirty "; 
    if (array[1] == 4) result = result + "forty ";
    if (array[1] == 5) result = result + "fifty ";
    if (array[1] == 6) result = result + "sixty ";
    if (array[1] == 7) result = result + "seventy ";
    if (array[1] == 8) result = result + "eighty "; 
    if (array[1] == 9) result = result + "ninety ";

    if (number == 0 && array.length == 1) result += "zero";
    if (number == 1) result += "one";
    if (number == 2) result += "two";
    if (number == 3) result += "three";
    if (number == 4) result += "four"; 
    if (number == 5) result += "five";
    if (number == 6) result += "six";
    if (number == 7) result += "seven";
    if (number == 8) result += "eight"; 
    if (number == 9) result += "nine"; 
    if (number == 10) result += "ten";
    if (number == 11) result += "eleven";
    if (number == 12) result += "twelve"; 
    if (number == 13) result += "thirteen";
    if (number == 14) result += "fourteen";
    if (number == 15) result += "fifteen";
    if (number == 16) result += "sixteen";
    if (number == 17) result += "seventeen";
    if (number == 18) result += "eighteen";
    if (number == 19) result += "nineteen";

    if (number > 19 && array[0] != 0) result += toReadable(array[0]);

    return result.trim('');
}
