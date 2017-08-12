function multiplyNumbers(a, b) {
    return a * b;
}

function getNeededBox(bottles, boxCapacity) {
    return Math.ceil(bottles / boxCapacity);
}

function isYearLeap(year) {
    return (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0) ? "yes" : "no";
}

function getCircleArea(radius) {
    let area = Math.PI * radius * radius;
    console.log(area);
    console.log(area.toFixed(2));
}

function getTriangleArea(a, b, c) {
    let sp = (a + b + c) / 2;
    return Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
}

function coneVolumeAndSurface(radius, height) {
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;
    let surface = Math.PI * radius * (radius + Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2)));

    console.log(volume);
    console.log(surface);
}

function oddEvenNumber(num) {
    if (num % 2 == 0) {
        return "even";
    } else if (num % 2 == Math.round(num % 2)) {
        return "odd";
    } else {
        return "invalid"
    }
}

function fruitOrVegetable(product) {
    switch (product) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
        case "peach":
            return "fruit";
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "onion":
        case "garlic":
        case "parsley":
            return "vegetable";
            break;
        default :
            return "unknown";
    }
}

function colorfulNumbers(times) {
    let result = '<ul>'

    for (let i = 1; i <= times; i++) {
        if (i % 2 != 0) {
            result += `<li><span style='color:green'>${i}</span></li>`
        } else {
            result += `<li><span style='color:blue'>${i}</span></li>`;
        }
    }

    result += '</ul?';
    return result;
}

function chessBoard(size) {
    let result = `<div class="chessboard">\n`;
    let count = 0;
    for (var i = 0; i < size; i++) {
        result += "<div>\n";
        let color = i % 2 == 0 ? 'black' : 'white';
        for (var j = 0; j < size; j++) {

            result += `    <span class="${color}"></span>\n`;
            color = color == "white" ? 'black' : 'white';

            count++;
        }
        result += "</div>\n";
    }

    result += '</div>';
    return result;
}

function binaryLogarithm(nums) {
    for (let num of nums) {
        console.log(Math.log2(num));
    }
}

function isPrime(num) {
    for (var i = 2; i < Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }

    }

    return num > 1;
}


