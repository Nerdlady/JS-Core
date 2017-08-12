function solution() {
    let elements = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let products = {
        apple: function (quantity) {
            if (elements.carbohydrate < quantity) {
                return "Error: not enough carbohydrate in stock";
            }

            if (elements.flavour < quantity * 2) {
                return "Error: not enough flavour in stock";
            }

            elements.carbohydrate -= quantity;
            elements.flavour -= quantity * 2;
            return "Success";
        },
        coke: function (quantity) {
            if (elements.carbohydrate < quantity * 10) {
                return "Error: not enough carbohydrate in stock";
            }

            if (elements.flavour < quantity * 20) {
                return "Error: not enough flavour in stock";
            }
            elements.carbohydrate -= quantity * 10;
            elements.flavour -= quantity * 20;
            return "Success";
        },
        burger: function (quantity) {
            if (elements.carbohydrate < quantity * 5) {
                return "Error: not enough carbohydrate in stock";
            }

            if (elements.fat < quantity * 7) {
                return "Error: not enough fat in stock";
            }

            if (elements.flavour < quantity * 3) {
                return "Error: not enough flavour in stock";
            }
            elements.carbohydrate -= quantity * 5;
            elements.fat -= quantity * 7;
            elements.flavour -= quantity * 3;
            return "Success";
        },
        omelet: function (quantity) {
            if (elements.protein < quantity * 5) {
                return "Error: not enough protein in stock";
            }

            if (elements.fat < quantity) {
                return "Error: not enough fat in stock";
            }

            if (elements.flavour < quantity) {
                return "Error: not enough flavour in stock";
            }

            elements.protein -= quantity * 5;
            elements.fat -= quantity;
            elements.flavour -= quantity;
            return "Success";
        },
        cheverme: function (quantity) {
            if (elements.protein < quantity * 10) {
                return "Error: not enough protein in stock";
            }

            if (elements.carbohydrate < quantity * 10) {
                return "Error: not enough carbohydrate in stock";
            }

            if (elements.fat < quantity * 10) {
                return "Error: not enough fat in stock";
            }

            if (elements.flavour < quantity * 10) {
                return "Error: not enough flavour in stock";
            }

            elements.protein -= quantity *10;
            elements.carbohydrate -= quantity *10;
            elements.fat -= quantity *10;
            elements.flavour -= quantity *10;
            return "Success";
        }
    };

    let restock = function (element, quantity) {
        elements[element] += quantity;
        return "Success";
    };

    let prepare = function (product, quantity) {
        return products[product](quantity);
    };

    let report = function () {
        return `protein=${elements.protein} carbohydrate=${elements.carbohydrate} fat=${elements.fat} flavour=${elements.flavour}`;
    };

    return function (command) {
        let info = command.split(" ");
        switch (info[0]) {
            case "restock":
                return restock(info[1], Number(info[2]));
            case "prepare":
                return prepare(info[1], Number(info[2]));
            case "report":
                return report();
        }
    }
}

let manager = solution();
console.log(manager('prepare cheverme 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare cheverme 1'));
console.log(manager('report'));


