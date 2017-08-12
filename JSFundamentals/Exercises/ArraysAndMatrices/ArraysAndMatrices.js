function arrayWithDelimiter(array) {
    let delimiter = array[array.length - 1];
    array.pop();
    console.log(array.join(delimiter));
}

function nElementOfArray(array) {
    let n = Number(array[array.length - 1]);
    array.pop();
    for (let i = 0; i < array.length; i += n) {
        console.log(array[i]);
    }
}

function addRemoveElement(commands) {
    let array = [];
    let num = 1;
    for (let command of commands) {
        if (command.toLowerCase() === 'add') {
            array.push(num);
        } else {
            array.pop();
        }
        num++;
    }

    if (array.length > 0) {
        console.log(array.join('\n'));
    } else {
        console.log('Empty');
    }
}

function rotateArray(array) {
    let times = Number(array[array.length - 1]);
    array.pop();
    let rotationsTimes = times % array.length;

    for (let i = 0; i < rotationsTimes; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(' '));

}

function nonDecreasingSubsequence(array) {
    let currentBiggest = Number.NEGATIVE_INFINITY;
    console.log(array.filter(function (a) {
        if (a >= currentBiggest) {
            currentBiggest = a;
            return true;
        }

        return false;
    }).join('\n'));
}

function sort(array) {
    console.log(array.sort(function (a, b) {
        let result = a.length > b.length;
        if (a.length === b.length) {
            result = a.localeCompare(b);
        }
        return result;
    }).join('\n'));
}

function magicMatrix(matrix) {
    let sum = 0;

    for (let row = 0; row < matrix.length; row++) {
        let currentRolSum = matrix[row].reduce((a, b) => a + b);
        if (row === 0) {
            sum = currentRolSum;
        } else {
            if (sum !== currentRolSum) {
                return false;
            }
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let currentColSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            currentColSum += matrix[row][col];
        }

        if (currentColSum !== sum) {
            return false;
        }
    }

    return true;
}

function spiralMatrix(a, b) {
    let matrix = [];
    for (let row = 0; row < a; row++) {
        matrix[row] = [];
        for (let col = 0; col < b; col++) {
            matrix[row][col] = 0;
        }
    }

    let top = 0;
    let bottom = a - 1;
    let left = 0;
    let right = b - 1;
    let num = 1;
    let direction = 0;

    while (top <= bottom && left <= right) {
        switch (direction % 4) {
            case 0:
                for (let col = left; col <= right; col++) {
                    matrix[top][col] = num++;
                }
                top++;
                direction++;
                break;
            case 1:
                for (let row = top; row <= bottom; row++) {
                    matrix[row][right] = num++;
                }
                right--;
                direction++;
                break;
            case 2:
                for (let col = right; col >= left; col--) {
                    matrix[bottom][col] = num++;
                }
                bottom--;
                direction++;
                break;
            default:
                for (let row = bottom; row >= top; row--) {
                    matrix[row][left] = num++;
                }
                left++;
                direction++;
                break;
        }
    }


    for (let rol = 0; rol < matrix.length; rol++) {
        console.log(matrix[rol].join(' '));
    }
}

function diagonalAttack(arr) {
    let matrix = [];

    for (let row = 0; row < arr.length; row++) {
        let nums = arr[row].split(' ');
        matrix[row] = [];
        for (let col = 0; col < nums.length; col++) {
            matrix[row][col] = Number(nums[col]);
        }
    }

    let diagonalSumOne = 0;
    let diagonalSumTwo = 0;
    for (let i = 0; i < matrix.length; i++) {
        diagonalSumOne += matrix[i][i];
        diagonalSumTwo += matrix[i][matrix.length - i - 1];
    }

    if (diagonalSumOne === diagonalSumTwo) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if ((row !== col) && (col !== matrix.length - row - 1)) {
                    matrix[row][col] = diagonalSumTwo;
                }
            }
        }
    }

    for (let rol = 0; rol < matrix.length; rol++) {
        console.log(matrix[rol].join(' '));
    }
}

function orbit(input) {
    let [rows, cols, x, y] = input;
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = 0;
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max( Math.abs(row - x), Math.abs(col - y)) +1;
        }
    }
    matrix[x][y] = 1;

    for (let rol = 0; rol < matrix.length; rol++) {
        console.log(matrix[rol].join(' '));
    }
}

orbit([4, 4, 0, 0])
console.log();
orbit([5, 5, 2, 2])


