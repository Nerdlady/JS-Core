function order(input) {
    let obj =[];

    for (let rec of input) {
        let currentObj = {
            width: rec[0],
            height: rec[1],
            area: function () {
                return currentObj.width * currentObj.height;
            },
            compareTo: function (other) {
                let result = other.area() - this.area();
                return result || (other.width - this.width);
            }
            
        }

        obj.push(currentObj);
    }

    return obj.sort((a,b) => a.compareTo(b));

}

console.log(order([[1,20],[20,1],[5,3],[5,3]]))
