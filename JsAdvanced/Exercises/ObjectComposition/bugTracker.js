function bugTracker() {
    let id = 0;

    let objs = [];
    let selectorr;
    let reporter = {
        report: function (author, description, reproducible, severity) {
            let current = {
                id: id++,
                author: author,
                description: description,
                reproducible: reproducible,
                severity: severity,
                status: 'Open'
            };
            objs.push(current);
            this.output(selectorr)
        },
        setStatus: function (id, newStatus) {
            for (let obj of objs) {
                if(obj.id === id){
                    obj.status = newStatus;
                }
            }
            this.output(selectorr)
        },
        remove: function (id) {
            objs = objs.filter(a => a.id !== id);
            this.output(selectorr)
        },
        sort: function (method) {
            switch (method.toLowerCase()) {
                case 'author':
                    objs.sort((a,b) => a.author.localeCompare(b.author));
                    break;
                case 'severity':
                    objs.sort((a,b) => a.severity - b.severity);
                    break;
                case 'id':
                    objs.sort(function (a, b) {
                        return a.id - b.id;
                    });
                    break;
            }
            this.output(selectorr)
        },
        output: function (selector) {
            $(selector).empty();
            selectorr = selector;
            for (let obj of objs) {
                $(selector).append(
                    $('<div>')
                        .attr("id", "report_" + obj.id)
                        .addClass('report')
                        .append($('<div>')
                            .addClass('body')
                            .append($('<p>').text(obj.description)))
                        .append($('<div>')
                            .addClass('title')
                            .append($('<span>')
                                .addClass('author')
                                .text("Submitted by: " + obj.author))
                            .append($('<span>')
                                .addClass('status')
                                .text(obj.status + " | " + obj.severity)))
                )
            }

        }
    };

    return reporter;
}
