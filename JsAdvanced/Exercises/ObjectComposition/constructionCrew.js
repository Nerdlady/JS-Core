function changeObject(obj) {

    if(obj.handsShaking){
        obj.bloodAlcoholLevel += 0.1 * obj.weight * obj.experience;
        obj.handsShaking = false;
    }

    return obj;
}

console.log(changeObject({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
));
