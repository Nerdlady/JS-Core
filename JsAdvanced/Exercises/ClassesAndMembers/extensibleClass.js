(function () {
    let currentId = 0;
    return class Extensible {
        constructor() {
            this.id = currentId++;
        }

        extend(template) {
            for (let obj in template) {
                if (typeof template[obj] === 'function') {
                    Object.getPrototypeOf(this)[obj] = template[obj];
                } else {
                    this[obj] = template[obj];
                }
            }
        }
    }


})();
let obj1 = new Extensible();
let obj2 = new Extensible();
let obj3 = new Extensible();
console.log(obj1.id);
console.log(obj2.id);
console.log(obj3.id);
