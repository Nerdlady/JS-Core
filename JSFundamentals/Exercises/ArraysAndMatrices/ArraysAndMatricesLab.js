function sumFirstAndLast(input) {
    return Number(input[0]) + Number(input[input.length - 1]);
}

function evenPositionElement(input) {
    let output = '';
    for (let i = 0; i < input.length; i += 2) {
        output += input[i] + ' ';
    }
    return output;
}

function negativePositiveNumbers(input) {
    let newArr = [];
    for (let num of input) {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }

    for (let num of newArr) {
        console.log(num);
    }
}

function firstAndLastNumbers(input) {
    let arr = input.slice(1, input.length);
    console.log(arr.slice(0, input[0]).join(' '));
    console.log(arr.slice(arr.length - input[0], arr.length).join(' '));
}

function lastNumbersSequence(n, k) {
    let seq = [1];

    for (let i = 0; i < n - 1; i++) {
        let start = Math.max(0, seq.length - k)
        let numsToSum = seq.slice(start, seq.length);
        let sum = numsToSum.reduce((a, b) => a + b);
        seq.push(sum);
    }

    console.log(seq.join(' '));
}

function proccesOddNumbers(input) {
    console.log(input.filter((n, i) => i % 2 === 1).map(n => n * 2).reverse().join(' '));
}

function smallestTwoNumbers(input) {
    console.log(input.sort((a, b) => a - b).slice(0, 2).join(' '));
}

function biggestElement(matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;
    for (let el of matrix) {
        for (let num of el) {
            biggestNum = Math.max(biggestNum, num);
        }
    }

    console.log(biggestNum);
}

function diagonalSum(matrix) {
    let diagonalSumOne = 0;
    let diagonalSumTwo = 0;

    for (let i = 0; i < matrix.length; i++) {
        diagonalSumOne += matrix[i][i];
        diagonalSumTwo += matrix[i][matrix.length - i - 1];
    }
    console.log(diagonalSumOne + ' ' + diagonalSumTwo);
}

function equalNeighbors(matrix) {
    let neighborsCount = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (row + 1 < matrix.length) {
                if (matrix[row][col] === matrix[row + 1][col]) {
                    neighborsCount++;
                }
            }

            if (matrix[row][col] === matrix[row][col + 1]) {
                neighborsCount++;
            }
        }
    }

    console.log(neighborsCount);
}

equalNeighbors([[2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]]
)