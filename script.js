var matrix = [];
var side = 20;
var grassArr = [];
var grassEaterArr = [];
var gishatichArr = [];
var jokerArr = [];
var donArr = [];
function setup() {
    for (let i = 0; i < 40; i++) {
        matrix[i] = [];
        for (let j = 0; j < 40; j++) {
            matrix[i][j] = random([0,1, 2, 3, 4, 5,2,2,3,2,1,1,1,1]);
        }
    }
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y, 1)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let gr = new GrassEater(x, y, 2)
                grassEaterArr.push(gr)
            }

            else if (matrix[y][x] == 3) {
                let ga = new Gishatich(x, y, 3)
                gishatichArr.push(ga)
            }

            else if (matrix[y][x] == 4) {
                let jok = new Joker(x, y, 4)
                jokerArr.push(jok)
            }
            else if (matrix[y][x] == 5) {
                let donk = new Don(x, y, 5)
                donArr.push(donk)
            }
        }
    }
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
            }
            else if (matrix[y][x] == 4) {
                fill("red");
            }
            else if (matrix[y][x] == 5) {
                fill("black");
            }

            rect(x * side, y * side, side, side);

        }
    }
    for (var i in grassArr) {
        grassArr[i].mul();

    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].move();
        grassEaterArr[i].eat();
        grassEaterArr[i].mul();
        grassEaterArr[i].die();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].move();
        gishatichArr[i].eat();
        gishatichArr[i].mul();
        gishatichArr[i].die();
    }
    for (var i in jokerArr) {
        jokerArr[i].move();
        jokerArr[i].eat();
        jokerArr[i].mul();
        jokerArr[i].die();
    }
    for (var i in donArr) {
        donArr[i].move();
        donArr[i].eat();
        donArr[i].mul();     
        donArr[i].and();
        donArr[i].die();
    }
}