function argumentInfo() {
    let sumary = new Map();
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        let obj = arguments[i];
        console.log(type + ": " + obj);

        if(!sumary.get(type)){
            sumary.set(type,0);
        }

        sumary.set(type,sumary.get(type) +1);
    }
    [...sumary.entries()].sort((a,b) => b[1] - a[1]).forEach(a => console.log(`${a[0]} = ${a[1]}`));
}

argumentInfo({ name: 'bob'}, 3.333, 9.999)