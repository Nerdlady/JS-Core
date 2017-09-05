function attachEvents() {
    $('#btnLoadTowns').click(function () {
        let townsNames = $('#towns').val().split(', ');
            let source = $("#towns-template").html();
            let template = Handlebars.compile(source);
            let towns = {
                towns: townsNames
            };
            let html = template(towns);
            $('#root').empty().append(html);
    })
}
