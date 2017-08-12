class SortedList{
    constructor(){
        this.list = [];
        this.size = this.list.length;
    }

    add(num){
        this.list.push(num);
        this.size =  this.list.length;
        this.list.sort((a,b) => a - b);
    }

    remove(index){
        if(index < this.list.length && index >=0){
            this.list.splice(index,1);
            this.size =  this.list.length;
            this.list.sort((a,b) => a - b);
        }
    }

    get(index){
        return this.list[index];
    }


}




