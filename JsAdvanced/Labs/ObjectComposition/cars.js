function cars(input) {
    let process = (() => {
        "use strict";
        let objs = new Map();

        return {
            create: (name) => {
                let obj = {
                };
                objs.set(name, obj);

            },
            inherits: (name, parentName) => {
                let parent = objs.get(parentName);
                let child = Object.create(parent);
                objs.set(name, child);
            },
            set: (name, key, value) => {
                objs.get(name)[key] = value;
            },
            print: (name) => {
                let current = objs.get(name);
                let output = [];
                for (let key in current) {
                    output.push(key + ":" + current[key]);
                }

                console.log(output.join(", "));
            }
        };


    })();

    for (let obj of input) {
        let args = obj.split(" ");

        if (args[0] === "create") {
            if (args.length === 2) {
                process["create"](args[1]);
            } else {
                process["inherits"](args[1], args[3]);
            }
        } else if (args[0] === "set") {
            process["set"](args[1], args[2], args[3]);
        } else if (args[0] === "print") {
            process["print"](args[1]);
        }
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)