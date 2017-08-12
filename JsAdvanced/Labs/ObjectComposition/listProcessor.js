function listProcessor(input) {

    let process = (function (){
            let currentList = [];
            return {
                add: (item) => currentList.push(item),
                remove: (item) => currentList = currentList.filter(a => a !== item),
                print: () => console.log(currentList)
            }
        }
    )();

    for (let obj of input) {
        let [command,item] = obj.split(" ");
        process[command](item);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print'])
