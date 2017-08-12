function sum() {
    let elemetOne;
    let elementTwo;
    let resultElement;
    let creator = {
        init: function (selector1, selector2, resultSelector) {
            elemetOne = $(selector1);
            elementTwo = $(selector2);
            resultElement = $(resultSelector);
        },
        add: function () {
            resultElement.val(Number(elemetOne.val()) + Number(elementTwo.val()));
        },
        subtract: function () {
            resultElement.val(Number(elemetOne.val()) - Number(elementTwo.val()));
        }
    }

    return creator;

}
