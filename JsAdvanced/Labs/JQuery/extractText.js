function extractText() {
    let elements = $('#items li').toArray().map(a => a.textContent).join(', ');
    $('#result').text(elements);
}
