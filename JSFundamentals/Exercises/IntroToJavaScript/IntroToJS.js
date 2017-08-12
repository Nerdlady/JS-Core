function sum(a, b, c) {
 console.log(a + b+ c);
}

function sumAndVat(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }

    console.log(`sum = ${sum}`);
    console.log(`VAT = ${sum * 0.2}`);
    console.log(`total = ${sum * 1.2}`);
}

function lettersInString(string,letter) {
    let count = 0;

    for (let lett of string) {
        if (letter == lett){
         count++;
        }
    }

    console.log(count);
}

function filterByAge(minAge,firstPersonName,firstPersonAge,secondPersonName,secondPersonAge) {
    let personOne = {
     name: firstPersonName,
     age: firstPersonAge
    };

    let secondPerson = {
     name: secondPersonName,
        age: secondPersonAge
    };

    personOne.age >= minAge ? console.log(personOne) : '';
    secondPerson.age >= minAge ? console.log(secondPerson): '';
}

function stringOfNumbers(number) {
    let output = '';


    for (var i = 1; i <= number; i++) {
        output += i;
    }

    console.log(output);
}

function figureArea(w,h,W,H) {
    let [s1,s2,s3] = [w*h,W*H,Math.min(w,W) * Math.min(h,H)];
    console.log(s1 +s2 -s3)
}

function nextDay(year,month,day) {
    let date = new Date(year,month-1,day);
    date.setDate(date.getDate() + 1);
    console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());
}

function distanceBetweenPoints(x1,y1,x2,y2) {
    let pointA = {x:x1,y:y1};
    let pointB = {x:x2,y:y2};

    let distanceX = Math.pow(pointA.x - pointB.x,2);
    let distanceY = Math.pow(pointA.y - pointB.y,2);

    console.log(Math.sqrt(distanceX + distanceY));
}









