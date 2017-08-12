function list() {
    let list = [];
    list.size =  list.length;

    list.add = function (num) {
        list.push(num);
        list.size =  list.length;
        list.sort((a,b) => a - b);
    };

    list.remove = function (index) {
        if(index < list.length && index >=0){
            list.splice(index,1);
            list.size =  list.length;
            list.sort((a,b) => a - b);
        }
    };
    
    list.get = function (index) {
        return this[index];
    };

    return list;
}

let list1 = list();
list1.add(5)
list1.add(3)
console.log(list1.get(0));
list1.remove(0)
console.log(list1.get(0));
console.log(list1.size);