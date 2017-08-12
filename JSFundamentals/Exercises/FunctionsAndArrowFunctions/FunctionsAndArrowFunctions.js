function insideVolume(input) {

    function checkIsInside(x, y, z) {
        let x1 = 10;
        let x2 = 50;
        let y1 = 20;
        let y2 = 80;
        let z1 = 15;
        let z2 = 50;

        if (x < x1 || x > x2 || y < y1 || y > y2 || z < z1 || z > z2) {
            return false;
        }

        return true;
    }


    for (let i = 0; i < input.length; i += 3) {
        let x = input[i];
        let y = input[i + 1];
        let z = input[i + 2];

        console.log(checkIsInside(x, y, z) ? 'inside' : 'outside');
    }
}

function roadRadar(input) {
    function printInfractionLevel(speed, limit) {
        let overSpeed = speed - limit;
        if (overSpeed > 0) {
            if (overSpeed <= 20) {
                console.log('speeding');
            } else if (overSpeed <= 40) {
                console.log('excessive speeding');
            } else if (overSpeed > 40) {
                console.log('reckless driving');
            }
        }
    }

    let speed = input[0];
    let drivingArea = input[1];
    let speedLimit = 0;
    switch (drivingArea) {
        case 'motorway':
            speedLimit = 130;
            break;
        case 'interstate':
            speedLimit = 90;
            break;
        case 'city':
            speedLimit = 50;
            break
        case 'residential':
            speedLimit = 20;
            break;
    }

    printInfractionLevel(speed, speedLimit);
}

function templateFormat(input) {
    function makeQuestionAnswerXml(quiz, answer) {
        return `  <question>
    ${quiz}
  </question>
  <answer>
    ${answer}
  </answer>\n`
    }

    let output = `<?xml version="1.0" encoding="UTF-8"?>
<quiz>\n`;

    for (let i = 0; i < input.length; i += 2) {
        let quiz = input[i];
        let answer = input[i + 1];

        output += makeQuestionAnswerXml(quiz, answer);
    }

    output += '</quiz>';
    return output;
}


function cookingByNumbers(input) {
    function cookNumber(number, operation) {
        switch (operation) {
            case 'chop':
                return number / 2;
            case 'dice':
                return Math.sqrt(number);
            case 'spice':
                return number + 1;
            case 'bake':
                return number * 3;
            case 'fillet':
                return number * 0.8;
        }
    }

    let number = input[0];

    for (let i = 1; i < input.length; i++) {
        number = cookNumber(number, input[i]);
        console.log(number);
    }

}

function modifyAverage(input) {
    input = input.toString();
    let numbersCount = 0;
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
        numbersCount++;
    }
    while (true) {
        let avg = sum / numbersCount;
        if (avg > 5) {
            console.log(input);
            break;
        } else {
            input += 9;
            sum += 9;
            numbersCount++;
        }


    }
}

function validityChecker(input) {
    function checkAndPrint(x, y, x2, y2) {
        let distance = Math.sqrt(Math.pow(x - x2, 2) + Math.pow(y - y2, 2));
        if (distance % 1 === 0) {
            console.log(`{${x}, ${y}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x}, ${y}} to {${x2}, ${y2}} is invalid`);
        }
    }

    let [x1, y1, x2, y2] = input;

    checkAndPrint(x1, y1, 0, 0);
    checkAndPrint(x2, y2, 0, 0);
    checkAndPrint(x1, y1, x2, y2);


}

function treasureLocator(input) {
    function findTresure(x, y) {
        if (x >= 1 && x <= 3 && y >= 1 && y <= 3) {
            return 'Tuvalu';
        } else if (x >= 8 && x <= 9 && y >= 0 && y <= 1) {
            return 'Tokelau';
        } else if (x >= 5 && x <= 7 && y >= 3 && y <= 6) {
            return 'Samoa';
        } else if (x >= 0 && x <= 2 && y >= 6 && y <= 8) {
            return 'Tonga';
        } else if (x >= 4 && x <= 9 && y >= 7 && y <= 8) {
            return 'Cook';
        } else {
            return 'On the bottom of the ocean';
        }
    }

    for (let i = 0; i < input.length; i += 2) {
        console.log(findTresure(input[i], input[i + 1]));
    }
}

function tripLength(input) {
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x3 = Number(input[4]);
    let y3 = Number(input[5]);

    let distance12 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    let distance23 = Math.sqrt(Math.pow((x3 - x2), 2) + Math.pow((y3 - y2), 2));
    let distance13 = Math.sqrt(Math.pow((x3 - x1), 2) + Math.pow((y3 - y1), 2));

    if ((distance12 <= distance13) && (distance13 => distance23)) {
        let a = distance12 + distance23;
        console.log('1->2->3: ' + a);
    }
    else if ((distance12 <= distance23) && (distance13 < distance23)) {
        let b = distance13 + distance12;
        console.log('2->1->3: ' + b);
    }
    else {
        let c = distance23 + distance13;
        console.log('1->3->2: ' + c);
    }
}

function radioCrystals(input) {

    function checkTarget(target, current) {
        if (target === current) {
            console.log(`Finished crystal ${target} microns`);
        }
    }

    function cut(current, target) {
        let cutTimes = 0;
        while (current / 4 >= target) {
            current = current / 4;
            cutTimes++;
        }

        if (cutTimes !== 0) {
            console.log('Cut x' + cutTimes);
            console.log('Transporting and washing');
            current = Math.floor(current);
            checkTarget(target, current);
        }

        return current;
    }

    function lap(current, target) {
        let lapTimes = 0;
        while (current * 0.8 >= target) {
            current = current * 0.8;
            lapTimes++;
        }

        if (lapTimes !== 0) {
            console.log('Lap x' + lapTimes);
            console.log('Transporting and washing');
            current = Math.floor(current);
            checkTarget(target, current);
        }

        return current;
    }

    function grind(current, target) {
        let grindTimes = 0;
        while (current - 20 >= target) {
            current = current - 20;
            grindTimes++;
        }

        if (grindTimes !== 0) {
            console.log('Grind x' + grindTimes);
            console.log('Transporting and washing');
            current = Math.floor(current);
            checkTarget(target, current);
        }


        return current;
    }

    function etch(current, target) {
        let etchTimes = 0;
        while (current - 2 >= target - 1) {
            current = current - 2;
            etchTimes++;
        }

        if (etchTimes !== 0) {
            console.log('Etch x' + etchTimes);
            console.log('Transporting and washing');
            current = Math.floor(current);
            checkTarget(target, current);
        }
        return current;
    }

    function xRay(current, target) {
        if (current + 1 === target) {
            console.log('X-ray x' + 1);
            current++;
            checkTarget(target, current);
        }
    }


    let target = input[0];

    for (let i = 1; i < input.length; i++) {
        let current = input[i];
        console.log(`Processing chunk ${current} microns`);

        current = cut(current, target);
        current = lap(current, target);
        current = grind(current, target);
        current = etch(current, target);
        xRay(current, target);
    }
}

function dnaHelix(size) {
    let sequence = ['A', 'T', 'C', 'G', 'T', 'T', 'A', 'G', 'G', 'G'];
    let sequenceCount = 0;

    function changeCount(count) {
        if (count + 1 > sequence.length) {
            return 0;
        }
        return count;
    }

    for (let i = 0; i < size; i++) {
        if (i % 4 === 0) {
            console.log(`**${sequence[sequenceCount]}${sequence[sequenceCount + 1]}**`);
            sequenceCount += 2;
            sequenceCount = changeCount(sequenceCount);
        } else if (i % 4 === 1 || i % 4 == 3) {
            console.log(`*${sequence[sequenceCount]}--${sequence[sequenceCount + 1]}*`);
            sequenceCount += 2;
            sequenceCount = changeCount(sequenceCount);
        } else if (i % 4 === 2) {
            console.log(`${sequence[sequenceCount]}----${sequence[sequenceCount + 1]}`);
            sequenceCount += 2;
            sequenceCount = changeCount(sequenceCount);
        }
    }

}

dnaHelix(10)