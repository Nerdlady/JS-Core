function initializeTable() {
    $('#createLink').click(create);
    addCountryToTable("Bulgaria", "Sofia");
    addCountryToTable("Germany", "Berlin");
    addCountryToTable("Russia", "Moscow");
    changeLinks();
    function addCountryToTable(country, capital) {
        let row = ($('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($("<a href=#'>[Up]</a>").click(moveUp))
                .append($("<a href=#'>[Down]</a>").click(moveDown))
                .append($("<a href=#'>[Delete]</a>").click(deleteRow))));


        $('#countriesTable').append(row);

    }

    function create() {
        let country = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();
        addCountryToTable(country, capital);
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
        changeLinks();
    };
    function moveUp() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertBefore(row.prev());
            row.fadeIn();
            changeLinks();
        });
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.insertAfter(row.next());
            row.fadeIn();
            changeLinks();
        });

    }

    function deleteRow() {
        let row = $(this).parent().parent();
        row.fadeOut(function () {
            row.remove();
            changeLinks();
        });
    }

    function changeLinks() {
        $('#countriesTable a').css('display', 'inline');

        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find("a:contains('Up')")
            .css('display', 'none');

        $(tableRows[tableRows.length - 1]).find("a:contains('Down')")
            .css('display', 'none');

    }
}
