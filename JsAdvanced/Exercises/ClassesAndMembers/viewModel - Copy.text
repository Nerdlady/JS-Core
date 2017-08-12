class Textbox {

    constructor(selector, regex) {
        this._elements = $(selector);

        for (let obj of $(selector)) {
            let self = this;
            $(obj).on('input', function () {
                self.value = $(obj).val();
            })
        }
        this._invalidSymbols = regex;
    }


    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        for (let obj of this.elements) {
            $(obj).val(this.value);
        }
    }


    get elements() {
        return this._elements;
    }

    set elements(value) {
        this._elements = value;
    }


    get invalidSymbols() {
        return this._invalidSymbols;
    }

    set invalidSymbols(value) {
        this._invalidSymbols = value;
    }

    isValid() {
        return !this.invalidSymbols.test(this.value);
    }
}


(() => {
    let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
    $('.textbox').on('input', function () {
        console.log(textbox.value);
    })

    textbox.value = 'pesho'
})();
