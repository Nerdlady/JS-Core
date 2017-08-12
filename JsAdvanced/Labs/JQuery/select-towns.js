function attachEvents() {
    let selectedTowns = [];

    $('#items li').each((index,item) =>  {
        $(item).on('click',function () {
            if($(this).attr('data-selected')){
                $(this).css('background' , '').removeAttr('data-selected');
              selectedTowns = selectedTowns.filter(a => a !== this.textContent)
            } else {
                $(this).css('background' , '#DDD').attr('data-selected','true');
                selectedTowns.push(this.textContent);
            }

        });
    })

    $('#showTownsButton').on('click',function () {
        $('#selectedTowns').text(selectedTowns.join(', '))
    });
}
