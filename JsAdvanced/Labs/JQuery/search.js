function search() {
    let input = $('#searchText').val();
    let matches = 0;
    $('#towns li').each((index,item) => {
        "use strict";
        if(item.textContent.includes(input)){
            $(item).css('font-weight','bold');
            matches++;
        } else {
            $(item).css('font-weight','');
        }
    });
    $('#result').text(matches + ' matches found')
}
