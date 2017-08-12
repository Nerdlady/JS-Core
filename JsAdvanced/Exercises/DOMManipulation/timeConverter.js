function attachEventsListeners() {

    let daysBnt = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBnt = document.getElementById('minutesBtn');
    let secondsBnt = document.getElementById('secondsBtn');

    daysBnt.addEventListener('click',function () {
        let days = document.getElementById('days').value;
        let currentHours = days * 24;
        let currentMinutes = currentHours * 60;
        let currentSeconds = currentMinutes * 60;
        document.getElementById('hours').value = currentHours;
        document.getElementById('minutes').value = currentMinutes;
        document.getElementById('seconds').value = currentSeconds;
    });

    hoursBtn.addEventListener('click',function () {
        let hours = document.getElementById('hours').value;
        let currentDays = hours / 24;
        let currentMinutes = hours * 60;
        let currentSeconds = currentMinutes * 60;
        document.getElementById('days').value = currentDays;
        document.getElementById('minutes').value = currentMinutes;
        document.getElementById('seconds').value = currentSeconds;
    });

    minutesBnt.addEventListener('click',function () {
        let minutes = document.getElementById('minutes').value;
        let currentHours = minutes / 60;
        let currentDays = currentHours / 24;
        let currentSeconds = minutes * 60;
        document.getElementById('days').value = currentDays;
        document.getElementById('hours').value = currentHours;
        document.getElementById('seconds').value = currentSeconds;
    });

    secondsBnt.addEventListener('click',function () {
        let seconds = document.getElementById('seconds').value;
        let currentMinutes = seconds / 60;
        let currentHours = currentMinutes / 60;

        let currentDays = currentHours / 24;
        document.getElementById('hours').value = currentHours;
        document.getElementById('minutes').value = currentMinutes;
        document.getElementById('days').value = currentDays;
    })

}
