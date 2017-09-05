function attachEvents() {
    $.get('https://messager-9f6fa.firebaseio.com/messenger/.json').then(function (re) {
        for (let obj in re) {
            $("#messages").append(re[obj].author + ': ' + re[obj].content + '\n');
        }
    })
    $('#submit').click(function () {
        let author = $("#author").val();
        let content = $('#content').val();
        let obj = {
            author: author,
            content:content,
            timestamp: Date.now()
        };

        let req = {
            type: 'POST',
            url: 'https://messager-9f6fa.firebaseio.com/messenger/.json',
            data: JSON.stringify(obj)
        };
        $.ajax(req)
            .then(function (result) {
                $("#messages").append(author + ': ' + content + '\n')
            })
    })
}
