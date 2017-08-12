function townsToJson(input) {
    let [a, town, latitude, longitude] = input[0].split('|');
    let objects = [];

    for (let i = 1; i < input.length; i++) {
        let info = input[i].split('|');
        let townName = info[1].trim();
        let townLatitude = Number(info[2].trim());
        let townLongitude = Number(info[3].trim());

        let object = {
            [town.trim()]: townName,
            [latitude.trim()]: townLatitude,
            [longitude.trim()]: townLongitude
        };

        objects.push(object);

    }

    console.log(JSON.stringify(objects));
}

function jsonToHTML(input) {
    function escape(text) {
        let final = '';

        for (let letter of text.toString()) {
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
                case '\'':
                    final += '&#39;';
                    break;
                default:
                    final += letter;

            }
        }

        return final;
    }

    let output = '<table>\n';
    output +='   <tr>';
    let jsonArr = JSON.parse(input);
    let keyNames = [];
    for (let key of Object.keys(jsonArr[0])) {
        output += `<th>${escape(key)}</th>`;
        keyNames.push(escape(key));
    }

    output += "</tr>\n";
    for (let json of jsonArr) {
        output += `  <tr>`
        for (let key of keyNames) {
            let name = escape(json[key]);
            output += `<td>${name}</td>`
        }

        output += `</tr>\n`
    }

    output += '</table>';

    console.log(output);
}

function sumByTowns(input) {
    let towns = {};
    for (let i = 0; i < input.length; i+=2) {
        if(!towns[input[i]]){
            towns[input[i]] = 0;
        }
        towns[input[i]] += Number(input[i+1]);
    }

    console.log(JSON.stringify(towns));
}

function countWordsInText(input) {
    let words = input[0].split(/\W+/).filter(w => w!=='');
    let wordsCount = {};

    for (let word of words) {
        if(!wordsCount[word]){
            wordsCount[word] = 0;
        }
        wordsCount[word]++;
    }

    console.log(JSON.stringify(wordsCount));
}

function countWords(input) {
    let words = input[0].toLowerCase().split(/\W+/).filter(w => w!=='');
    let wordsCount = new Map();

    for (let word of words) {
        if(!wordsCount.get(word)){
            wordsCount.set(word,0);
        }
        wordsCount.set(word,wordsCount.get(word)+1);
    }

    for (let [k, v] of [...wordsCount.entries()].sort()) {
        console.log(`'${k}' -> ${v} times`);
    }
}

countWords(['Far too slow, you\'re far too slow.'])

function populationInTowns(input) {
    let townsInfo = new Map;

    for (let town of input) {
        let townInfo = town.split('<->');
        let townName = townInfo[0].trim();
        let townPopulation = Number(townInfo[1].trim());

        if(!townsInfo.get(townName)){
            townsInfo.set(townName,0);
        }

        townsInfo.set(townName,townsInfo.get(townName) + townPopulation);
    }

    for (let [k, v] of townsInfo) {
        console.log(`${k} : ${v}`);
    }
}

function cityMarkets(input) {
    let townsInfo = new Map();

    for (let townInfo of input) {
        let info = townInfo.split('->');
        let townName = info[0].trim();
        let productName = info[1].trim();
        let productInfo = info[2].split(':');
        let totalIncome = Number(productInfo[0].trim()) * Number(productInfo[1].trim());

        if(!townsInfo.get(townName)){
            townsInfo.set(townName,new Map());
        }


        townsInfo.get(townName).set(productName,totalIncome);
    }

    for (let [k,v] of townsInfo) {
        console.log(`Town - ${k}`);
        for (let [productName, totalIncome] of v) {
            console.log(`$$$${productName} : ${totalIncome}`);
        }
    }
}

function lowestPriceInCities(input) {
    let products = new Map();

    for (let info of input) {
        let [town,product,price] = info.split(/\s+\|\s+/g);
        price = Number(price);
        if(!products.get(product)){
            products.set(product,new Map());
        }

        products.get(product).set(town,price);
    }

    for (let [k,v] of products) {
        let output =  k + ' -> ';
        let townName;
        let min = Number.POSITIVE_INFINITY;
        for (let [town, price] of v) {
            if(price < min){
                townName = town;
                min = price;
            }
        }


        output += min + ' (' + townName + ')';

        console.log(output);
    }
}

function extractWords(input) {
    let words = new Set();
    for (let text of input) {
        let wordsS = text.match(/\w+/g);
        for (let word of wordsS) {
            words.add(word.toLowerCase());
        }
    }

    console.log([...words.values()].join(', '));
}


extractWords(['Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'

])