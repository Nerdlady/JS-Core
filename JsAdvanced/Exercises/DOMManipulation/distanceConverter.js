function attachEventsListeners() {
    let convertBtn = document.getElementById('convert');

    convertBtn.addEventListener('click', function () {
        let unit = document.getElementById('inputDistance').value;

        let from = document.getElementById('inputUnits').value;
        let to = document.getElementById('outputUnits').value;
        let result = convert(from, to, unit);
        document.getElementById('outputDistance').value = result;
    });

    function convert(from, to, unit) {


        switch (from) {
            case 'km':
                let km = unit * 1000;
                return convertFromM(km, to);
            case 'm':
                return convertFromM(unit, to);
            case 'cm':
                let cm = unit * 0.01;
                return convertFromM(cm, to);
            case 'mm':
                let mm = unit * 0.001;
                return convertFromM(mm, to);
            case 'mi':
                let mi = unit * 1609.34;
                return convertFromM(mi, to);
            case 'yrd':
                let yrd = unit * 0.9144;
                return convertFromM(yrd, to);
            case 'ft':
                let ft = unit * 0.3048;
                return convertFromM(ft, to);
            case 'in':
                let inc = unit * 0.0254;
                return convertFromM(inc, to);
        }
    }

    function convertFromM(unit, to) {
        switch (to) {
            case 'km':
                return unit / 1000;
            case 'm':
                return unit;
            case 'cm':
                return unit / 0.01;
            case 'mm':
                return unit / 0.001;
            case 'mi':
                return unit / 1609.34;
            case 'yrd':
                return unit / 0.9144;
            case 'ft':
                return unit / 0.3048;
            case 'in':
                return unit / 0.0254;
        }
    }
}
