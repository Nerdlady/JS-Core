function keplersProblem(ec,m) {

    let pi=Math.PI, K=pi/180.0;

    let maxIter=30, i=0;

    let delta=Math.pow(10,9);

    let E, F;

    m=m/360.0;

    m=2.0*pi*(m-Math.floor(m));

    if (ec<0.8) E=m; else E=pi;

    F = E - ec*Math.sin(m) - m;

    while ((Math.abs(F)>delta) && (i<maxIter)) {

        E = E - F/(1.0-ec*Math.cos(E));
        F = E - ec*Math.sin(E) - m;

        i = i + 1;

    }

    E=E/K;

    return Math.round(E*Math.pow(10,-9))/Math.pow(10,9);

}

console.log(keplersProblem(1, 0));
