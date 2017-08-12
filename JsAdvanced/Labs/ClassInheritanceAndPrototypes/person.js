function personAndTeacher() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString(){
            let className = this.constructor.name;
            let string = `${className} (`;
            for (let obj of Object.getOwnPropertyNames(this)) {
                string += `${obj}: ${this[obj]}, `;
            }

            return string.slice(0,-2) + ")";
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    class Student extends Person{
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }
    }

    return {
        Person,
        Teacher,
        Student
    }

}
