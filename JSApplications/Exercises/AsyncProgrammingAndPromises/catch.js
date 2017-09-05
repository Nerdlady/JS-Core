function attachEvents() {
    const url = 'https://baas.kinvey.com/appdata/kid_r1uX0phL-/biggestCatches';
    const auth = btoa('guest:guest');
    const authHeader =  { "Authorization": "Basic " + auth };
    $('.load').click(function () {
        let req = {
            type: 'GET',
            url: url,
            headers: authHeader
        };
        $.ajax(req).then(load)
    });



    $('.add').click(function () {
        let parent = $(this).parent();
        let data = {
            angler: parent.find(".angler").val(),
            weight: Number(parent.find(".weight").val()),
            species: parent.find(".species").val(),
            location: parent.find(".location").val(),
            bait: parent.find(".bait").val(),
            captureTime: Number(parent.find(".captureTime").val())

        };
        let req = {
            type: 'POST',
            url: url,
            headers: authHeader,
            contentType:'application/json',
            data: JSON.stringify(data)
        };
        $.ajax(req).then(addToDom)
    })


    function load(result) {
        $('#catches').empty();
        for (let obj of result) {
           addToDom(obj);
        }
    }

    function addToDom(obj) {
            $("#catches")
                .append($('<div>').addClass('catch').attr('data-id',obj._id)
                    .append($('<label>').text('Angler'))
                    .append($('<input>').addClass('angler').val(obj.angler).attr('type','text'))
                    .append($('<label>').text('Weight'))
                    .append($('<input>').addClass('weight').val(obj.weight).attr('type','number'))
                    .append($('<label>').text('Species'))
                    .append($('<input>').addClass('species').val(obj.species).attr('type','text'))
                    .append($('<label>').text('Location'))
                    .append($('<input>').addClass('location').val(obj.location).attr('type','text'))
                    .append($('<label>').text('Bait'))
                    .append($('<input>').addClass('bait').val(obj.bait).attr('type','text'))
                    .append($('<label>').text('Capture Time'))
                    .append($('<input>').addClass('captureTime').val(obj.captureTime).attr('type','number'))
                    .append($('<button>').addClass('update').text('Update').click(update))
                    .append($('<button>').addClass('delete').text('Delete').click(deleteObj))
                )

    }



    function update() {
        let id = $(this).parent().attr('data-id');
        let parent = $(this).parent();
        let data = {
            angler: parent.find(".angler").val(),
            weight: Number(parent.find(".weight").val()),
            species: parent.find(".species").val(),
            location: parent.find(".location").val(),
            bait: parent.find(".bait").val(),
            captureTime: Number(parent.find(".captureTime").val())

        };
        let req = {
            type: 'PUT',
            url: url + "/" + id,
            headers: authHeader,
            contentType:'application/json',
            data: JSON.stringify(data)
        };
        $.ajax(req);
    }

    function deleteObj() {
        let id = $(this).parent().attr('data-id');
        let req = {
            type: 'DELETE',
            url: url + '/' + id,
            contentType:'application/json',
            headers: authHeader
        };

        $.ajax(req).then(function (re) {
            $(`.catch[data-id="${id}"]`).remove();
        })
    }


}
