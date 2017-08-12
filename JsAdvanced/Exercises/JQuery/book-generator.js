let createBook = (function bookGenerator() {
    let id = 1;
    return function (selector, title, author, isbn) {

        $(selector)
            .append(
                $('<div>')
                    .attr('id','book' + id++)
                    .append(
                        $('<p>')
                            .addClass('title')
                            .text(title))
                    .append(
                        $('<p>')
                            .addClass('author')
                            .text(author))
                    .append(
                        $('<p>')
                            .addClass('isbn')
                            .text(isbn))
                    .append(
                        $('<button>')
                            .text('Select')
                            .on('click', addStyle))
                    .append(
                        $('<button>')
                            .text('Deselect')
                            .on('click', clearStyle))
            );

        function clearStyle() {
            $(this).parent().css('border', 'none');
        }

        function addStyle() {
            $(this).parent().css('border', '2px solid blue');
        }

}}());

