function domSearch(selector, isCaseSensitive) {
    $(selector)
        .append(
            $('<div>')
                .addClass('add-controls')
                .append($('<label>')
                    .text('Enter text: ')
                    .append($('<input>'))
                )
                .append($('<a>')
                    .addClass('button')
                    .text('Add')
                    .css('dispay', 'inline-block')
                    .on('click', addItem))
        )
        .append(
            $('<div>')
                .addClass('search-controls')
                .append($('<label>')
                    .text('Search:')
                    .append(
                        $('<input>').on('input', search)
                    )
                ))
        .append(
            $('<div>')
                .addClass('result-controls')
                .append($('<ul>')
                    .addClass('items-list')
                )
        )


    function search() {
        let items = $('.items-list li');
        for (let item of items) {
            let val = $(item).text().slice(1);
            if (isCaseSensitive) {
                if (val.includes($(this).val())) {
                    $(item).show();
                } else {
                    $(item).hide();
                }
            } else {
                if (val.toLowerCase().includes($(this).val().toLowerCase())) {
                    $(item).show();
                } else {
                    $(item).hide();
                }
            }
        }
    }

    function addItem() {
        let input = $(this).parent().children()[0].children;
        $('.items-list')
            .append(
                $('<li>')
                    .addClass('list-item')
                    .append(
                        $('<a>')
                            .addClass('button')
                            .text('X')
                            .on('click',deleteElement)
                    )
                    .append(
                        $('<strong>').text($(input).val())
                    )
            )
    }

    function deleteElement() {
         $(this).parent().remove();
    }
}
