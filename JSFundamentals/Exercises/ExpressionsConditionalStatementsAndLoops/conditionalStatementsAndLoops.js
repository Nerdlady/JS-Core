function biggestOfThreeNumbers(input) {
    console.log(Math.max(input[0], input[1], input[2]));
}

function pointInRectange(input) {
    let x = input[0];
    let y = input[1];
    let xMin = input[2];
    let xMax = input[3];
    let yMin = input[4];
    let yMax = input[5];

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log('inside');
    } else {
        console.log('outside');
    }
}

function oddNumberInRange(num) {
    for (var i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            console.log(i);
        }

    }
}

function triangleOfDollars(size) {
    for (var i = 1; i <= size; i++) {
        console.log('$'.repeat(i));
    }
}

function moviePrice(input) {
    let movieTitle = input[0].toLowerCase();
    let day = input[1].toLowerCase();

    switch (movieTitle) {
        case 'the godfather':
            switch (day) {
                case 'monday':
                    console.log(12);
                    break;
                case 'tuesday':
                    console.log(10);
                    break;
                case 'wednesday':
                case 'friday':
                    console.log(15);
                    break;
                case 'thursday':
                    console.log(12.50);
                    break;
                case 'saturday':
                    console.log(25);
                    break;
                case 'sunday':
                    console.log(30);
                    break;
                default:
                    console.log('error');
            }
            break;
        case 'schindler\'s list':
            switch (day) {
                case 'monday':
                case 'tuesday':
                case 'wednesday':
                case 'thursday':
                case 'friday':
                    console.log(8.50);
                    break;
                case 'saturday':
                case 'sunday':
                    console.log(15);
                    break;
                default:
                    console.log('error');
            }
            break;
        case 'casablanca':
            switch (day) {
                case 'monday':
                case 'tuesday':
                case 'wednesday':
                case 'thursday':
                case 'friday':
                    console.log(8);
                    break;
                case 'saturday':
                case 'sunday':
                    console.log(10);
                    break;
                default:
                    console.log('error');
            }
            break;
        case 'the wizard of oz':
            switch (day) {
                case 'monday':
                case 'tuesday':
                case 'wednesday':
                case 'thursday':
                case 'friday':
                    console.log(10);
                    break;
                case 'saturday':
                case 'sunday':
                    console.log(15);
                    break;
                default:
                    console.log('error');
            }
            break;
        default:
            console.log('error');
    }
}

function quadraticEquation(a, b, c) {
    let discriminant = Math.pow(b, 2) - (4 * a * c);

    if (discriminant == 0) {
        let x = -b / (2 * a);
        console.log(x);
    } else if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        console.log(x2);
        console.log(x1);
    } else {
        console.log('No');
    }
}

function multiplicationTable(size) {
    let output = '<table border="1">\n';
    for (var i = 0; i <= size; i++) {
        if (i == 0) {
            output += ' <tr><th>x</th>'
            for (var j = 1; j <= size; j++) {
                output += `<th>${ j}</th>`
            }
        } else {
            output += ` <tr><th>${i}</th>`
            for (var j = 1; j <= size; j++) {
                output += `<td>${i * j}</td>`
            }
        }


        output += '</tr>\n';
    }

    output += '</table>';
    console.log(output);
}

function figureOfFourSquares(size) {
    let rowSize = size % 2 == 0 ? size - 1 : size;
    let colSize = 2 * size - 1;
    let middleRow = Math.floor(rowSize / 2);

    for (let row = 0; row < rowSize; row++) {
        let output = '';

        if ((row === 0) || (row === middleRow) || (row === rowSize - 1 )) {
            for (let col = 0; col < colSize; col++) {
                if ((col === 0) || (col === size - 1) || (col === colSize - 1)) {
                    output += '+';
                } else {
                    output += '-';
                }
            }
        } else {
            for (let col = 0; col < colSize; col++) {
                if ((col === 0) || (col === size - 1) || (col === colSize - 1)) {
                    output += '|';
                } else {
                    output += ' ';
                }
            }
        }

        console.log(output);
    }
}
function calendar(arr) {
    let myDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let day = arr[0];
    let month = arr[1] - 1;
    let year = arr[2];

    let output = '<table>\n';
    output += '  <tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

    let firstDateOfMonth = new Date(year, month, 1);

    let startDate;

    switch (firstDateOfMonth.getDay()) {
        case 0:
            startDate = new Date(year, month, 1);
            break;
        case 1:
            startDate = new Date(year, month, 0);
            break;
        case 2:
            startDate = new Date(year, month, -1);
            break;
        case 3:
            startDate = new Date(year, month, -2);
            break;
        case 4:
            startDate = new Date(year, month, -3);
            break;
        case 5:
            startDate = new Date(year, month, -4);
            break;
        case 6:
            startDate = new Date(year, month, -5);
            break;
    }


    let con = true;
    while (con){
        output += '  <tr>';
        for (let j = 0; j < 7; j++) {

            if((startDate.getMonth() ===  month - 1) || (startDate.getMonth() == 11 && month == 0)){
                output += `<td class="prev-month">${startDate.getDate()}</td>`;
            } else if((startDate.getMonth() ===  month + 1) || (startDate.getMonth() == 0 && month == 11)){
                output += `<td class="next-month">${startDate.getDate()}</td>`;
                con = false;
            } else if(startDate.getDate() == day && startDate.getMonth() == month){
                output += `<td class="today">${startDate.getDate()}</td>`;
            }
            else {
                output += `<td>${startDate.getDate()}</td>`;
            }
            startDate.setDate(startDate.getDate() + 1);

            if((startDate.getDate() == 30 || startDate.getDate() == 31) && startDate.getDay() == 6){
                con = false;
            }
        }

        output += '</tr>\n';
    }
    output += '</table>';
    return output
}

console.log(calendar([25,
    12,
    2012
]));