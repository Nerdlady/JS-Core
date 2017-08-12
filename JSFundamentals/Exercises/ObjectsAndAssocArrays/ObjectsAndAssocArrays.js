function heroicInventory(input) {
    let heroes = [];

    for (let hero of input) {
        let heroInfo = hero.split(/\s+\/\s+/g);
        let heroName = heroInfo[0];
        let heroLevel = Number(heroInfo[1]);
        let heroItems = [];
        if (heroInfo.length > 2) {
            heroItems = heroInfo[2].split(/\s*,\s*/g);
        }


        let heroObj = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        }

        heroes.push(heroObj);
    }

    console.log(JSON.stringify(heroes));
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

    for (let json of input) {
        output += `	<tr>\n`
        let keyNames = JSON.parse(json);
        for (let key of Object.keys(keyNames)) {
            let name = escape(keyNames[key]);
            output += `		<td>${name}</td>\n`
        }

        output += `	</tr>\n`
    }

    output += '</table>';

    console.log(output);
}

function cappyJuice(input) {
    let juicesQuantities = {};
    let juicesBottles = {};

    for (let juice of input) {
        let juiceInfo = juice.split(/\s+=>\s+/g);
        let juiceName = juiceInfo[0];
        let juiceQuantity = Number(juiceInfo[1]);

        if (!juicesQuantities[juiceName]) {
            juicesQuantities[juiceName] = 0;
        }

        juicesQuantities[juiceName] += juiceQuantity;

        if (juicesQuantities[juiceName] >= 1000) {
            if (!juicesBottles[juiceName]) {
                juicesBottles[juiceName] = 0;
            }

            let juiceLeft = juicesQuantities[juiceName] % 1000;
            juicesBottles[juiceName] += (juicesQuantities[juiceName] - juiceLeft) / 1000;
            juicesQuantities[juiceName] = juiceLeft;

        }
    }


    for (let key in juicesBottles) {
        console.log(`${key} => ${juicesBottles[key]}`);
    }
}


function storeCatalogue(input) {
    let products = new Map();

    for (let product of input) {
        let productInfo = product.split(/\s*:\s*/g);
        let productName = productInfo[0];
        let productPrice = Number(productInfo[1]);

        if (!products.get(productName[0])) {
            products.set(productName[0], new Map());
        }

        products.get(productName[0]).set(productName, productPrice);
    }

    products = [...products.entries()].sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()));

    for (let [k, v] of products) {
        console.log(k);
        for (let [k2, v2] of [...v.entries()].sort((a, b) => a[0].toLowerCase().localeCompare(b[0].toLowerCase()))) {
            console.log(`  ${k2}: ${v2}`);
        }
    }
}

function autoEngineeringCompany(input) {
    let cars = new Map();

    for (let car of input) {
        let carInfo = car.split(/\s+\|\s+/g);
        let carBrand = carInfo[0];
        let carModel = carInfo[1];
        let produced = Number(carInfo[2]);

        if (!cars.get(carBrand)) {
            cars.set(carBrand, new Map());
        }

        if (!cars.get(carBrand).get(carModel)) {
            cars.get(carBrand).set(carModel, 0);
        }

        cars.get(carBrand).set(carModel, cars.get(carBrand).get(carModel) + produced);
    }

    for (let [brand, models] of cars) {
        console.log(brand);
        for (let [model, produced] of models) {
            console.log(`###${model} -> ${produced}`);
        }
    }
}

function systemComponents(input) {
    let systems = new Map();

    for (let system of input) {
        let systemInfo = system.split(/\s\|\s/g);
        let systemName = systemInfo[0];
        let component = systemInfo[1];
        let subcomponent = systemInfo[2];

        if (!systems.get(systemName)) {
            systems.set(systemName, new Map());
        }

        if (!systems.get(systemName).get(component)) {
            systems.get(systemName).set(component, new Set());
        }

        systems.get(systemName).get(component).add(subcomponent);
    }

    systems = [...systems.entries()].sort(function (a, b) {
        let result = b[1].size - a[1].size;

        if (result === 0) {
            result = (a[0]).localeCompare(b[0]);
        }
        return result;
    })

    for (let [system, components] of systems) {
        console.log(system);
        for (let [component, subcomponents] of  [...components].sort((a, b) => b[1].size - a[1].size)) {
            console.log(`|||${component}`);
            for (let subcomponent of subcomponents) {
                console.log(`||||||${subcomponent}`);
            }
        }
    }
}

function usernames(input) {
    let usernames = new Set();
    for (let username of input) {
        usernames.add(username);
    }

    [...usernames].sort(function (a, b) {
        let result = a.length - b.length;

        if (result === 0) {
            result = a.localeCompare(b);
        }

        return result;
    }).forEach(a => console.log(a));
}

function uniqueSequences(input) {
    let valid = new Set();

    for (let arr of input) {
        let array = JSON.parse(arr);
        array = array.sort((a, b) => b - a).toString();
        valid.add(array);
    }

    valid = [...valid].sort(function (a, b) {
        let arr1 = a.split(',');
        let arr2 = b.split(',');
        return arr1.length - arr2.length;
    });

    for (let obj of valid) {
        console.log('[' + obj.split(',').join(', ') + ']');
    }

}


