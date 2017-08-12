function aggregates(array) {

    function reduser(arr, func) {
        let result = arr[0];
        for (let i = 1; i < arr.length; i++) {
            result = func(result, arr[i]);
        }

        return result;
    }

    console.log('Sum = ' + reduser(array, (a, b) => a + b));
    console.log('Min = ' + reduser(array, (a, b) => Math.min(a,b)));
    console.log('Max = ' + reduser(array, (a, b) => Math.max(a,b)));
    console.log('Product = ' + reduser(array, (a, b) => a * b));
    console.log('Join  = ' + reduser(array, (a, b) => a + '' + b));
}
