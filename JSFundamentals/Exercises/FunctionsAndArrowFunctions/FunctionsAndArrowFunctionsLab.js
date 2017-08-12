function triangleOfStars(size) {
    let rows = (size * 2) - 1;

    for (let row = 1; row <= size; row++) {
        let output = '';
        for (let col = 0; col < row; col++) {
            output += '*';
        }
        console.log(output);
    }

    for (let row = size - 1; row > 0; row--) {
        let output = '';
        for (let col = 0; col < row; col++) {
            output += '*';
        }
        console.log(output);
    }

}

function rectangleOfStars(size = 5) {
    for (let row = 0; row < size; row++) {
        let output = '* '.repeat(size);
        console.log(output);
    }
}

rectangleOfStars()

function palindrome(input) {
    let splitString = input.split("");
    let reverseArray = splitString.reverse();
    let reverse = reverseArray.join("");

   return reverse === input;
}

function dayOfWeek(day) {
    switch (day.toLowerCase()) {
        case 'monday':
            return 1;
        case 'tuesday':
            return 2;
        case 'wednesday':
            return 3;
        case 'thursday':
            return 4;
        case 'friday':
            return 5;
        case 'saturday':
            return 6;
        case 'sunday':
            return 7;
        default:
            return 'error';
    }
}

function calculator(num1, num2, operator) {

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

function aggregateElements(input) {

    function sum(input) {
        let sum = 0;
        for (let num of input) {
            sum += num;
        }
        return sum;
    }

    function sumInverse(input) {
        let sum = 0;
        for (let num of input) {
            sum += 1/num;
        }
        return sum;
    }

    function concat(input) {
        let sum = '';
        for (let num of input) {
            sum += num;
        }
        return sum;
    }

    console.log(sum(input));
    console.log(sumInverse(input));
    console.log(concat(input));
}

function wordsUppercase(input) {
    let words = input.match(/\w+/g);
    console.log(words.join(', ').toUpperCase());
}

wordsUppercase('Hi, how are you?')
