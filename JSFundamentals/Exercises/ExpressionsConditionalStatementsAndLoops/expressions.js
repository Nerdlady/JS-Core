function helloJavaScript(name) {
    console.log(`Hello, ${name}, I am JavaScript!`)
}

function areaAndPerimeter(sideA, sideB) {
    console.log(sideA * sideB);
    console.log(sideA * 2 + sideB * 2);
}

function distanceOverTime(arr) {
    let v1 = arr[0];
    let v2 = arr[1];
    let t = arr[2];

    let s1 = (v1 * 1000) * t;
    let s2 = (v2 * 1000) * t;

    let d1 = s1 / 60 / 60;
    let d2 = s2 / 60 / 60;

    let dist = Math.abs(d1 - d2);

    console.log(dist);
}

function distanceIn3D(arr) {
    let x1 = arr[0];
    let y1 = arr[1];
    let z1 = arr[2];
    let x2 = arr[3];
    let y2 = arr[4];
    let z2 = arr[5];

    let dist = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) + Math.pow(z2 - z1, 2));

    console.log(dist);
}

function gradsToDegree(grads) {
    let degree = (grads * 0.9) % 360;
    if (degree < 0) {
        degree += 360;
    } else if (degree > 360) {
        degree -= 360;
    }
    console.log(degree)
}

function compoundInterest(arr) {
    let principalSum = arr[0];
    let interestRatePercent = arr[1];
    let compoundingPeriod = arr[2];
    let timespan = arr[3];

    let interestRate = interestRatePercent / 100;
    let compoundingFrequency = 12 / compoundingPeriod;

    let f = principalSum * Math.pow((1 + (interestRate / compoundingFrequency )), compoundingFrequency * timespan);

    console.log(f);
}

function rounding(arr) {
    let num = arr[0];
    let round = arr[1];

    round = round > 15 ? 15 : round;


    console.log(parseFloat(num.toFixed(round)));
}

function imperialUnits (unit) {
    console.log(`${Math.floor(unit / 12)}'-${unit % 12}"`);
}

function nowPlaying(arr) {
    let nameOfTrack = arr[0];
    let artist = arr[1];
    let duration = arr[2];

    console.log(`Now Playing: ${artist} - ${nameOfTrack} [${duration}]`);
}

function composeTag(arr) {
    let location = arr[0];
    let text = arr[1];

    console.log(`<img src="${location}" alt="${text}">`);
    
}

function binaryToDecimal(binary) {
    console.log(parseInt(binary,2));
}

function assignProperties(arr) {
    let object = {
        [arr[0]]: arr[1],
        [arr[2]]: arr[3],
        [arr[4]]: arr[5]
    };
    console.log(object);
}

function lastMonth(arr) {
    let month = arr[1];
    let year = arr[2];

    let date = new Date(year,month - 1,0);

    console.log(date.getDate());
}

lastMonth(	[13, 12, 2004])