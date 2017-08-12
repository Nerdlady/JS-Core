function pesonalBMI(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight:weight,
            height: height
        },
        BMI:   Math.round(weight / (height/100 * height/100)),
    };

    person.status = (function () {
        if(person.BMI < 18.5){
            return "underweight";
        } else if(person.BMI < 25){
            return "normal";
        } else if(person.BMI < 30){
            return "overweight";
        } else {
            return "obese";
        }
    })();


    if(person.status === "obese"){
        person.recommendation = "admission required";
    }

    return person;
}


