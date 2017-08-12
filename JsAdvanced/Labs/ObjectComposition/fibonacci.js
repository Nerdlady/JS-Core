function siquenceFibonacci(lengt) {
   let fib = (() => {
       "use strict";
       let fib0 = 0;
       let fib1 = 1;
       return () => {
           let oldFib0 = fib0;
           let oldFib1 = fib1;
           fib0 = oldFib1;
           fib1 = oldFib0 + oldFib1;
           return oldFib1;
       }
   })();

    let fibNumbers = [];
    for (let i = 0; i < lengt; i++) {
        fibNumbers.push(fib());
    }

    return fibNumbers;
}



console.log(siquenceFibonacci(-1));
