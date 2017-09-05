(function () {
    let source = $("#cat-template").html();
    let template = Handlebars.compile(source);
    let cats = {cats:window.cats};
    let html = template(cats);
    $('#allCats').empty().append(html);
})();

function showStatusCode(e) {
    let element = $(e).parent().children()[1];
    if($(element).css('display') === 'none'){
        $(element).show();
    } else {
        $(element).hide();
    }

}
