class Task {
    constructor(title, deadline) {
        this.status = "Open";
        this.title = title;
        this.deadline = deadline;
    }


    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if (value.getTime() < (Date.now())) {
            throw new Error("Invalid date");
        }
        this._deadline = value;
    }


    get isOverdue() {
        if (this.status === "Complete") {
            return false;
        }
        return this.deadline.getTime() < Date.now();
    }

    static comparator(a, b) {
        if (a.isOverdue && !b.isOverdue) {
            return -1;
        } else if (!a.isOverdue && b.isOverdue) {
            return 1;
        } else if (a.isOverdue && b.isOverdue) {
            return a.deadline - b.deadline;
        } else {
            if (a.status === "In Progress" && b.status !== "In Progress") {
                return -1;
            } else if (a.status !== "In Progress" && b.status === "In Progress") {
                return 1;
            } else {
                if (a.status === "Open" && b.status !== "Open") {
                    return -1;
                } else if (a.status !== "Open" && b.status === "Open") {
                    return 1;
                } else {
                    if (a.status === "Complete" && b.status !== "Complete") {
                        return -1;
                    } else if (a.status !== "Complete" && b.status === "Complete") {
                        return 1;
                    } else {
                        return a.deadline - b.deadline;
                    }
                }
            }
        }
    };

    toString() {
        let str = "";
        switch (this.status) {
            case "Open":
                str = "[\u2731] " + this.title + " (deadline: " + this.deadline + ")";
                break;
            case "In Progress":
                str = "[\u219D] " + this.title + " (deadline: " + this.deadline + ")";
                break;
            case "Complete":
                str = "[\u2714] " + this.title;
        }

        if (this.isOverdue) {
            str = "[\u26A0] " + this.title + " (overdue)";
        }

        return str;
    }
}


let date1 = new Date();
date1.setDate(date1.getDate() + 7); // Set date 7 days from now
let task1 = new Task('JS Homework', date1);
let date2 = new Date();
date2.setFullYear(date2.getFullYear() + 1); // Set date 1 year from now
let task2 = new Task('Start career', date2);
console.log(task1 + '\n' + task2);
let date3 = new Date();
date3.setDate(date3.getDate() + 3); // Set date 3 days from now
let task3 = new Task('football', date3);
// Create two tasks with deadline set to current time
let task6 = new Task('Task 6', new Date());
let task4 = new Task('Task 4', new Date());
let task5 = new Task('Task 5', new Date());
task3.status = 'Complete';
task5.status = "Complete";
let tasks = [task1, task2, task3, task4, task5, task6];
setTimeout(() => {
    tasks.sort(Task.comparator);
    console.log(tasks.join('\n'));
}, 1000); // Sort and print one second later

// // should throw an Error
// let overdueTask = new Task('Overdue Task', new Date(2005, '4', '20'));
// // should throw an Error
// task1.deadline = new Date(2005, '4', '20');
