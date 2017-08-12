function add(sum) {
    let calc = function (num) {
        sum += num;
        return calc;
    };

     calc.toString = function () {
        return sum;
    };
     return calc;
}

console.log(add(4).toString());
