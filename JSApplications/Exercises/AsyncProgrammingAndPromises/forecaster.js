function attachEvents() {
    $('#submit').click(function () {
        $.get('https://judgetests.firebaseio.com/locations.json')
            .then(function (result) {
                let has = false;
                for (let obj in result) {
                    if (result[obj].name === $('#location').val()) {
                        has = true;
                        $.get(`https://judgetests.firebaseio.com/forecast/today/${result[obj].code}.json`)
                            .then(current);
                        $.get(`https://judgetests.firebaseio.com/forecast/upcoming/${result[obj].code}.json`)
                            .then(upcoming);
                        $('#forecast').css("display", "block");

                        break;
                    }
                }
                if (!has) {
                    $('#forecast').css("display", "block");
                    $('#forecast').text('Error')
                }

            })
            .catch(function () {
                $('#forecast').text('Error')
            })
    });

    function current(location) {
        $('#current')
            .append($('<span>')
                .addClass('symbol')
                .addClass('condition')
                .html(getSymbol(location.forecast.condition)))
            .append($('<span>').addClass('condition')
                .append($('<span>').addClass('forecast-data').text(location.name))
                .append($('<span>').addClass('forecast-data').html(`${location.forecast.low}&#176;/${location.forecast.high}&#176;`))
                .append($('<span>').addClass('forecast-data').text(location.forecast.condition)));
    }

    function upcoming(location) {
        for (let obj of location.forecast) {
            $('#upcoming')
                .append($('<span>').addClass('condition')
                    .append($('<span>').addClass('symbol').html(getSymbol(obj.condition)))
                    .append($('<span>').addClass('forecast-data').html(`${obj.low}&#176;/${obj.high}&#176;`))
                    .append($('<span>').addClass('forecast-data').text(obj.condition)));
        }
    }

    function getSymbol(condition) {
        switch (condition) {
            case 'Sunny':
                return '&#x2600;';
            case 'Partly sunny':
                return '&#x26C5;';
            case 'Overcast':
                return '&#x2601;';
            case 'Rain':
                return '&#x2614;';
            case 'Degrees':
                return '&#176;';
        }
    }
}
