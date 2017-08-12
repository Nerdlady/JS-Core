function carFactory(required) {
    let engines = function (minPower) {
        if (minPower <= 90) {
            return {power: 90, volume: 1800};
        } else if (minPower <= 120) {
            return {power: 120, volume: 2400};
        } else {
            return {power: 200, volume: 3500};
        }
    };

    let wheels = function (size) {
        if(size % 2 ===0){
            size--;
        }

        return [size,size,size,size];
    };

    let car = {
        model: required.model,
        engine: engines(required.power),
        carriage: {
            type: required.carriage,
            color: required.color
        },
        wheels: wheels(required.wheelsize)
    }

    return car;
}

console.log(carFactory({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }

));