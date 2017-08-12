let result = (function () {

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

    class Form {
        constructor(...textboxes) {
            this.element = $('<div>').addClass('form');
            this._textboxes = [];
            this.addTextboxes(textboxes);

        }


        get element() {
            return this._element;
        }

        set element(value) {
            this._element = value;
        }
        
        addTextboxes(textboxes){
           if(this.isAllTextboxes(textboxes)){
               for (let textbox of textboxes) {
                   this._textboxes.push(textbox);
                   $(this.element).append(textbox.elements);
               }
           } else {
               throw new Error('Element is not Textbox');
           }
        }

        isAllTextboxes(textboxes){
            for (let textbox of textboxes) {
                if(!(textbox instanceof Textbox)){
                    return false;
                }
            }
            return true;
        }

        submit(){
            let isValid = true;
            for (let textbox of this._textboxes) {
                if(textbox.isValid()){
                    $(textbox.elements).css('border','2px solid green');
                } else {
                    $(textbox.elements).css('border','2px solid red');
                    isValid = false;
                }
            }
            return isValid;
        }

        attach(selector){
            $(selector).append(this.element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

(() => {let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");})()



