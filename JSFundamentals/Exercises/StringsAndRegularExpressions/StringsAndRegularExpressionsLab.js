function printLetters(input) {
    for (let i = 0; i < input.length; i++) {
        console.log(`str[${i}] -> ${input[i]}`);
    }
}

function concatReverce(input) {
    let rev = Array.from(input.join('')).reverse().join('');
    console.log(rev);
}

function countOccurrences(word, text) {
    let count = 0;
    let index = text.indexOf(word)
    while (index > 0) {
        count++;
        index = text.indexOf(word, index + 1);
    }
    console.log(count);
}

function extractText(input) {
    let result = [];
    let startIndex = input.indexOf('(');
    while (startIndex > -1) {
        let endIndex = input.indexOf(')', startIndex);
        if (endIndex == -1)
            break;
        let snippet = input.substring(startIndex + 1, endIndex);
        result.push(snippet);
        startIndex = input.indexOf('(', endIndex);
    }
    console.log(result.join(', '));

}

function aggregateTable(input) {
    let incomeSum = 0;
    let towns = [];

    for (let i = 0; i < input.length; i++) {
        let info = input[i].split('|');
        let town = info[1].trim();
        let income = Number(info[2].trim());

        towns.push(town);
        incomeSum += income;
    }

    console.log(towns.join(', '));
    console.log(incomeSum);
}

function restorantBill(input) {
    let products = [];
    let bill = 0;

    for (let i = 0; i < input.length; i += 2) {
        products.push(input[i]);
        bill += Number(input[i + 1]);
    }

    console.log(`You purchased ${products.join(', ')} for a total sum of ${bill}`);
}

function usernames(input) {
    let usernames = [];
    for (let email of input) {
        let [alias, domain] = email.split('@');
        let username = alias + '.';
        let domainParts = domain.split('.');
        domainParts.forEach(p => username += p[0]);
        usernames.push(username);
    }
    console.log(usernames.join(', '));

}

function censorship(text, words) {
    for (let word of words) {
        let re = new RegExp(word, 'g');
        text = text.replace(re, '-'.repeat(word.length));
    }

    console.log(text);
}

function escaping(input) {
    function escape(text) {
        let final = '';

        for (let letter of text) {
            switch (letter) {
                case '<':
                    final += '&lt;';
                    break;
                case '>':
                    final += '&gt;';
                    break;
                case '&':
                    final += '&amp;';
                    break;
                case '"':
                    final += '&quot;';
                    break;
                default:
                    final += letter;

            }
        }

        return final;
    }

    let output = '<ul>\n';
    for (let text of input) {
        output += `  <li>${escape(text)}</li>\n`
    }

    output += '</ul>';

    console.log(output);
}

function matchAllWords(input) {
    let reg = /\w+/g;
    let words = [];
    let matches;
    while (matches = reg.exec(input)) {
        words.push(matches[0]);
    }

    console.log(words.join('|'));
}

function emailValidation(input) {
    let reg = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/g
    if (reg.test(input)) {
        console.log('Valid');
    } else {
        console.log('Invalid');
    }
}

function expressionSplit(input) {
    let reg = /[\s(),.;]+/g
    let arr = input.split(reg);

    for (let word of arr) {
        console.log(word);
    }
}

function matchDates(input) {
    let reg = /\b(\d{1,2})-([A-Z][a-z]{2})-(\d{4})\b/g;
    let matches;
    while (matches = reg.exec(input)) {
        console.log(`${matches[0]} (Day: ${matches[1]}, Month: ${matches[2]}, Year: ${matches[3]})`);
    }
}

function parseEmployeeData(input) {
    let reg = /^([A-Z][a-zA-Z]*)\s+-\s+([1-9][0-9]*)\s+-\s+([a-zA-Z0-9\s-]*)$/g;

    let matches;

    for (let row of input) {
        while (matches = reg.exec(row)) {
            console.log(`Name: ${matches[1]}`);
            console.log(`Position: ${matches[3]}`);
            console.log(`Salary: ${matches[2]}`);
        }
    }


}

function formFilter(username,email,phoneNumber,input) {
    let sentences = input;

    let usernameReg = new RegExp(/<![a-zA-Z]+!>/,'g');
    let emailReg = new RegExp(/<@[a-zA-Z]+@>/,'g');
    let phoneReg = new RegExp(/<\+[a-zA-Z]+\+>/,'g');

    for (let sentence of sentences) {
        sentence = sentence.replace(usernameReg, username);
        sentence = sentence.replace(emailReg, email);
        sentence = sentence.replace(phoneReg, phoneNumber);

        console.log(sentence);
    }


}

function matchMultiplication(input) {
    let reg = /(-?\d*)\s*?\*\s*?(-?\d+\.?\d+)/g;
    let matches;

    while (matches = reg.exec(input)){
        let result = Number(matches[1]) * Number(matches[2]);
        input = input.replace(matches[0],result);
    }

    console.log(input);
}

matchMultiplication('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).')