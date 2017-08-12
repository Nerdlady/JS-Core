function splitByDelimiter(text, delimiter) {
    text.split(delimiter).forEach(a => console.log(a));
}

function repeatString(text, times) {
    console.log(text.repeat(Number(times)));
}

function startsWith(text, substring) {
    console.log(text.startsWith(substring));
}

function endsWith(text, substring) {
    console.log(text.endsWith(substring));
}

function capitalizeWords(text) {
    let words = text.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    console.log(words.join(' '));
}

function captureTheNumbers(input) {
    let reg = /\d+/g;

    let matches;
    let nums = [];

    while (matches = reg.exec(input)) {
        nums.push(matches[0]);
    }

    console.log(nums.join(' '));
}

function findVariableName(input) {
    let regex = /_([a-zA-Z0-9]+)/g
    let variables = [];
    let matches;
    while (matches = regex.exec(input)) {
        variables.push(matches[1]);
    }
    console.log(variables.join(', '));

}

function findOccurrencesWordInSentence(sentence, word) {
    let reg = new RegExp('\\b' + word + '\\b', 'gi');
    let words = sentence.match(reg);
    console.log((words || []).length);
}

function extractLinks(input) {
    let reg = /www\.[a-zA-Z0-9-]+(\.[a-z]+){1,}/g;
    for (let text of input) {
        let matches;
        while (matches = reg.exec(text)) {
            console.log(matches[0]);
        }
    }
}

function secretDate(input) {
    let nameReg = /\*[A-Z][a-zA-Z]*(?=\s|$)/g;
    let phoneReg = /\+[0-9-]{10}(?=\s|$)/g;
    let idReg = /![a-zA-Z0-9]+(?=\s|$)/g;
    let secretBaseReg = /_[a-zA-Z0-9]+(?=\s|$)/g;


    for (let line of input) {
        console.log(line
            .replace(nameReg, m => '|'.repeat(m.length))
            .replace(phoneReg, m => '|'.repeat(m.length))
            .replace(idReg, m => '|'.repeat(m.length))
            .replace(secretBaseReg, m => '|'.repeat(m.length))
        )
    }


}


secretDate(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...'
])


