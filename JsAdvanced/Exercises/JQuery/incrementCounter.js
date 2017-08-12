function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textarea = $('<textarea>');
    let incrementButton = $('<button>').text('Increment');
    let addButton = $('<button>').text('Add');
    let list = $('<ul>');

    textarea.val('0');
    textarea.addClass('counter');
    textarea.attr('disabled', true);

    incrementButton.addClass('btn');
    incrementButton.attr('id', 'incrementBtn');

    addButton.addClass('btn');
    addButton.attr('id', 'addBtn');

    list.addClass('results');

    $(incrementButton).on('click', function () {
        textarea.val(+textarea.val() + 1);
    })

    $(addButton).on('click', function () {
        list.append($('<li>').text(textarea.val()));
    })

    container.append($(textarea));
    container.append($(incrementButton));
    container.append($(addButton));
    container.append($(list));

}
