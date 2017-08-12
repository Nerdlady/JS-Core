function sort(array, sortMethod) {
    let des = function (a, b) {
        return b - a;
    };

    let asc = function (a, b) {
        return a - b;
    };

    let method = {
        "asc" : asc,
        "desc" : des
    };

    return array.sort(method[sortMethod]);
}

console.log(sort([14, 7, 17, 6, 8], 'desc'))
