//helper functions
const randRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

const randRangeF = (min, max) => {
    return Math.random() * (max - min) + min;
}
//end of helper functions

var svgMethod;

const svgTest = () => {
    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="49%" height="100%" viewBox="0 0 100 100">` +
        polyl(2, 'red', 'blue', 10, 83.5, 70, 33, 40, 40) +
        path("M" + 50, 0, "L" + 75, 50, 35, 40) +
        scale(translate(rotate(rect(50, 50, 20, 20, 'red', 'none'), 25, 50, 50), 10, 10), .5, 1.2) +
        `</svg>`
        ;
}

const svg1 = () => {
    var desorders = "";
    for (var i = 2; i < 14; i++) {
        for (var j = 1; j < 23; j++) {
            desorders += translate(
                strokeW(
                    rotate(
                        rect(0, 0, 4.3, 4.3, 'black', 'none'),
                        randRangeF(-j * 2, j * 2)),
                    .1),
                i * 4.3 + randRangeF(-j * .1, j * .1), j * 4.3 + randRangeF(-j * .1, j * .1));
        }
    }

    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="49%" height="100%" viewBox="0 0 100 100">` +
        desorders +
        `</svg>`
}

const svg2 = () => {
    var desorders = "";
    for (var i = 2.5; i < 14; i++) {
        for (var j = 1; j < 23; j++) {
            var randomScale = randRangeF(1 - j * .1, 1 + j * .1)
            desorders += translate(
                strokeW(
                    scale(
                        rotate(
                            rect(0, 0, 4, 4, 'black', 'none'),
                            randRangeF(-j * 2, j * 2)),
                        randomScale, randomScale),
                    .1),
                i * 4 + randRangeF(-j * .1, j * .1), j * 4 + randRangeF(-j * .1, j * .1));
        }
    }

    return `
        <svg xmlns="http://www.w3.org/2000/svg" width="49%" height="100%" viewBox="0 0 100 100">` +
        desorders +
        `</svg>`
}

const selectChange = () => {
    document.querySelector("select").onchange = e => {
        var s = e.target.value;

        if (s == "Original") {
            svgMethod = svg1;
        }
        else if (s == "Alternate 1") {
            svgMethod = svg2;
        }
        else if (s == "Alternate 2") {
            svgMethod = svg3;
        }

        document.querySelector('svg').outerHTML = svgMethod();
    };
}

const buttonPress = () => {
    svgMethod = svg1;

    document.querySelector("button").onclick = e => {
        document.querySelector('svg').outerHTML = svgMethod();
    };
}