function mapSort(map, sortFun) {
    let newMap = new Map();
    if (sortFun) {
        [...map.entries()].sort(sortFun).forEach(a => {
            "use strict";
            newMap.set(a[0], a[1]);
        });

        return newMap;
    } else {

    }

    [...map.entries()].sort((a, b) => {
        "use strict";
        if (Number.isInteger(a[0])) {
            return a[0] - b[0];
        }
        return a[0].localeCompare(b[0]);
    }).forEach(a => {
        "use strict";
        newMap.set(a[0], a[1]);
    });

    return newMap;
}

module.exports = mapSort;