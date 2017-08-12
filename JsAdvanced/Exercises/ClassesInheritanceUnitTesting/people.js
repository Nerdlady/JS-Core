function people() {
    class Employee {
        constructor(name, age, tasks) {
            if (new.target === Employee) {
                throw new TypeError('Employee class is abstract');
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = tasks;
        }

        work() {
            let currentTask = this.tasks.shift();
            console.log(currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary} this month.`);
        }


    }

    class Junior extends Employee {
        constructor(name, age) {
            let tasks = [`${name} is working on a simple task.`];
            super(name, age, tasks);
        }
    }

    class Senior extends Employee {
        constructor(name, age) {
            let tasks = [`${name} is working on a complicated task.`,
                `${name} is taking time off work.`,
                `${name} is supervising junior workers.`];
            super(name, age, tasks);
        }
    }

    class Manager extends Employee {
        constructor(name, age) {
            let tasks = [`${name} scheduled a meeting.`, `${name} is preparing a quarterly report.`];
            super(name, age, tasks);
            this.dividend = 0;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`);
        }

    }

    return {Employee, Junior, Senior, Manager}
}
