function pyramid(base, increment) {
    let height = 0;

    let stones = 0;
    let marbles = 0;
    let lapis = 0;
    let gold = 0;

    let steps = 1;

    while (true) {
        if (base <= 0) {
            break;
        }

        if (base - 2 <= 0) {
            gold += (base * base) * increment;
        } else {
            stones += ((base * base) - ((4 * base) - 4)) * increment;
            if (steps % 5 === 0) {
                lapis += ((4 * base) - 4) * increment;
            } else {
                marbles += ((4 * base) - 4) * increment;
            }
        }


        steps++;
        base -= 2;
        height += increment;
    }

    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marbles)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`);
}


function notation(input) {
    function isOperator(check) {
        switch (check) {
            case '*':
            case '+':
            case '-':
            case '/':
                return true;
            default:
                return false;
        }
    }

    let numbers = [];
    let operators = [];
    let result = 0;

    for (let obj of input) {
        if (isOperator(obj)) {
            operators.push(obj);

            if (numbers.length < 2) {
                result = 'Error: not enough operands!';
                break;
            } else if (numbers.length > 2 && operators.length === 0) {
                result = 'Error: too many operands!';
                break;
            }
            let current = operators.shift();
            let numberTwo = numbers.pop();
            let numberOne = numbers.pop();
            switch (current) {
                case '*':
                    result = numberOne * numberTwo;
                    break;
                case '+':
                    result = numberOne + numberTwo;
                    break;
                case '-':
                    result = numberOne - numberTwo;
                    break;
                case '/':
                    result = numberOne / numberTwo;
                    break;
            }

            numbers.push(result);
        } else {
            numbers.push(Number(obj));
        }
    }

    if (numbers.length > 1 && operators.length === 0) {
        result = 'Error: too many operands!';
    }


    console.log(result);
}


function galacticElections(input) {
    let systems = new Map();
    let totalVotes = 0;

    for (let json of input) {
        let obj = json;
        let system = obj['system'];
        let candidate = obj['candidate'];
        let votes = Number(obj['votes']);

        if (!systems.get(system)) {
            systems.set(system, new Map());
        }

        if (!systems.get(system).get(candidate)) {
            systems.get(system).set(candidate, 0)
        }
        let currentVotes = systems.get(system).get(candidate) + votes;
        systems.get(system).set(candidate, currentVotes);
        totalVotes += votes;
    }

    let candidates = new Map();

    for (let [system, candidate] of systems) {
        candidate = [...candidate].sort((a, b) => a[1] < b[1]);


        let current = candidate.entries().next().value;
        let totalCandidateVotes = 0;

        for (let [k, v] of candidate) {
            totalCandidateVotes += v;
        }

        if (!candidates.get(current[1][0])) {
            let obj = {};
            obj['votes'] = 0;
            obj['systems'] = [];
            candidates.set(current[1][0], obj);
        }

        let obj = candidates.get(current[1][0]);
        obj['votes'] += totalCandidateVotes;
        obj['systems'].push(system);
        candidates.set(current[1][0], obj);
    }

    candidates = [...candidates].sort((a, b) => a[1]['votes'] < b[1]['votes']);

    let candidateOne = candidates[0];
    let candidateTwo = candidates[1];


    if (!candidateTwo) {
        console.log(`${candidateOne[0]} wins with ${candidateOne[1]['votes']} votes`);
        console.log(`${candidateOne[0]} wins unopposed!`);
        return;

    }

    let candidateOneVotes = candidateOne[1]['votes'];
    let candidateTwoVotes = candidateTwo[1]['votes'];

    if ((candidateOneVotes < (totalVotes / 2 )) && (candidateTwoVotes < (totalVotes / 2))) {
        let onePercent = (candidateOneVotes / totalVotes) * 100;
        let twoPercent = (candidateTwoVotes / totalVotes) * 100;
        console.log(`Runoff between ${candidateOne[0]} with ${Math.floor(onePercent)}% and ${candidateTwo[0]} with ${Math.floor(twoPercent)}%`);

    } else {
        console.log(`${candidateOne[0]} wins with ${candidateOneVotes} votes`);
        console.log(`Runner up: ${candidateTwo[0]}`);
        let systemsWithVotes = new Map();
        let systemsOfCan = candidateTwo[1]['systems'];
        for (let [k, v] of systems) {
            v = [...v].sort((a, b) => a[1] < b[1]);
            if (v[0][0] === candidateTwo[0]) {
                let totalFormSys = 0;
                for (let [c, o] of v) {
                  totalFormSys += o;
                }

                systemsWithVotes.set(k, totalFormSys);
            } else {
                for (let [c, o] of v) {
                    if (c === candidateTwo[0] && systemsOfCan.indexOf(k) > -1) {
                        systemsWithVotes.set(k, o);
                    }
                }
            }

        }

        for (let [k, v] of [...systemsWithVotes].sort((a, b) => a[1] < b[1])) {
            console.log(`${k}: ${v}`);
        }

    }
}

galacticElections([{system: 'Theta', candidate: 'Flying Shrimp', votes: 10},
    {system: 'Tau', candidate: 'Flying Shrimp', votes: 150},
    {system: 'Tau', candidate: 'Space Cow', votes: 10},
    {system: 'Sigma', candidate: 'Space Cow', votes: 200},
    {system: 'Sigma', candidate: 'Flying Shrimp', votes: 120},
    {system: 'Sigma', candidate: 'Space Cow', votes: 60}]
)

function xmlMesenger(input) {
    let lineRegex = /^<\s*message(\s+[a-z]+\s*=\s*"[A-Za-z0-9\s.]+"\s*)+>([\s\S]+)<\/message>$/;
    let toRegex = /\sto="([A-Za-z0-9\s.]+)"/;
    let fromRegex = /\sfrom="([A-Za-z0-9\s.]+)"/;
    let match;

    if (match = input.match(lineRegex)) {
        if (!match[0].match(toRegex) || !match[0].match(fromRegex)) {
            console.log(`Invalid attributes`);
            return;
        }

        let to = match[0].match(toRegex)[1];
        let from = match[0].match(fromRegex)[1];
        let message = match[2];

        console.log('<article>');
        console.log(`  <div>From: <span class="sender">${from.trim()}</span></div>`);
        console.log(`  <div>To: <span class="recipient">${to.trim()}</span></div>`);
        console.log('  <div>');
        let messages = message.split('\n');
        for (let mes of messages) {
            console.log(`    <p>${mes.trim()}</p>`);
        }
        console.log('  </div>');
        console.log(`</article>`);
    } else {
        console.log(`Invalid message format`);
    }
}

// xmlMesenger('<    message to="Bob" from="Alice" timestamp="1497254114">Same old, same old\nLet\'s go out f\nor a beer</message>')
// xmlMesenger('<message mailto="everyone" to="Everyone" from="Alice" timestamp="1497254112">Same old, same old</message>')