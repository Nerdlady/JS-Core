function calendar(date) {
    let day1 = date[0];
    let month1 = date[1];
    let year1 = date[2];

    let monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    $('#content').append(
        $('<table>')
            .append($('<caption>').text(monthNames[month1-1] + ' ' + year1))
            .append(
                $('<tbody>').append($('<tr>')
                    .append($('<th>').text('Mon'))
                    .append($('<th>').text('Tue'))
                    .append($('<th>').text('Wed'))
                    .append($('<th>').text('Thu'))
                    .append($('<th>').text('Fri'))
                    .append($('<th>').text('Sat'))
                    .append($('<th>').text('Sun')))
            )
    );

    let startOfMonth = new Date(year1, month1 - 1, 0);
    let startDate = new Date(year1,month1 -1,(1 - startOfMonth.getDay()));

    while (true) {
        let tr = $('<tr>');

        for (let i = 0; i < 7; i++) {
            if (startDate.getMonth() === month1 - 1) {
                if (startDate.getDate() === day1) {
                    tr.append(
                        $('<td>')
                            .text(startDate.getDate()).addClass('today')
                    );
                } else {
                    tr.append(
                        $('<td>')
                            .text(startDate.getDate())
                    );
                }

            } else {
                tr.append($('<td>'));
            }

            startDate.setDate(startDate.getDate() + 1);
        }

        $('tbody').append(tr);

        if (startDate.getMonth() === month1 % 11) {
            break;
        }
    }



}
