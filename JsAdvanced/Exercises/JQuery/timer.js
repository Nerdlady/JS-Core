function timer() {
    let timer;
    let time = 0;
    let isWorking = false;
    $('#start-timer').on('click', function () {
        if(!isWorking){
            timer = setInterval(step, 1000);
            isWorking = true;
        }


    });


    $('#stop-timer').on('click', function () {
        clearInterval(timer);
        isWorking = false;
    });

    function step() {
        time++;
        let hours = Math.trunc(time / 3600);

        let minutes = Math.trunc(time % 3600 / 60);
        let seconds = Math.trunc(time % 3600 % 60);
        $('#seconds').text(("0" + seconds).slice(-2));
        $('#minutes').text(('0' + minutes).slice(-2));
        $('#hours').text(('0' + hours).slice(-2));


    }
}
