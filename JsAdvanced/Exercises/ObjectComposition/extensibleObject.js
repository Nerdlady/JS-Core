function solve() {
    let myObj = {
        __proto__ :{},
        extend: function (template) {
            for (let obj in template) {
                if(typeof template[obj] === 'function'){
                    Object.getPrototypeOf(this)[obj] = template[obj];
                } else {
                    this[obj] = template[obj];
                }
            }
        }
    };

    return myObj;

}
solve()