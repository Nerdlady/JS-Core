let data = require("./data");

function sort(property) {
  return [...data].sort((a,b) => {
        "use strict";
        return (a[property]).localeCompare(b[property]);
    })
}

function filter(property, value) {
    return [...data].filter(a => {
        "use strict";
        return a[property] === value;
    })
}

result.sort = sort;
result.filter = filter;
