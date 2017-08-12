class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
    }

    render(id) {
        let info = $("<div/>")
            .addClass("info")
            .append($("<span/>").html("&phone; " + this.phone))
            .append($("<span/>").html("&#9993; " + this.email));

        let title = $("<div/>")
            .addClass("title")
            .text(this.firstName + " " + this.lastName)
            .append($("<button/>")
                .html("&#8505;")
                .on("click", function () {
                    if (info.css("display") === "none") {
                        info.show()
                    } else {
                        info.hide()
                    }
                }));
        if (this.online) {
            title.addClass("online");
        }
        info.hide();
        let article = $("<article/>")
            .append(title)
            .append(info);

        $("#" + id).append(article)
    }


    get online() {
        return this._online;
    }

    set online(value) {
        if (value) {
            $(`.title:contains(${this.firstName + " " + this.lastName})`).addClass("online");
        } else {
            $(`.title:contains(${this.firstName + " " + this.lastName})`).removeClass("online");
        }
        this._online = value;
    }
}
let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));
setTimeout(() => contacts[1].online = true, 2000);
setTimeout(() => contacts[1].online = false, 5000);