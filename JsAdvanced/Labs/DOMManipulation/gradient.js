function attachGradientEvents() {
    let element = document.getElementById('gradient');
    element.addEventListener('mousemove',mouseOver);
    element.addEventListener('mouseout',mouseOut);
    
    function mouseOver(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";

    }

    function mouseOut(event) {
        document.getElementById('result').textContent = "";
    }

}
