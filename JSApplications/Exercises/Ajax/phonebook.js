function attachEvents() {
    $('#btnLoad').click(load);

    $("#btnCreate").click(create);

    function load() {
        $.get('https://phonebook-nakov.firebaseio.com/phonebook.json')
            .then(function (rez) {
                $('#phonebook').empty();
                for (let obj in rez) {
                    $('#phonebook').append($('<li>')
                        .text(rez[obj].person + ": " + rez[obj].phone)
                        .append($('<button>').text('[Delete]').click(function () {
                            $.ajax({
                                type: 'DELETE',
                                url: `https://phonebook-nakov.firebaseio.com/phonebook/${obj}.json`
                            }).then(load);
                        })))
                }
            })
    };

    function create() {
        let person = $('#person').val();
        let phone = $('#phone').val();
        $('#person').val('')
        $('#phone').val('');
        let obj = {
            person: person,
            phone:phone
        };

        $.ajax({
            url:'https://phonebook-nakov.firebaseio.com/phonebook.json',
            type:'POST',
            data: JSON.stringify(obj)
        }).then(load)
    }
}
