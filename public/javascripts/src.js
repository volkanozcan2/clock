
Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 2)) { s = "0" + s; }
    return s;
}
let arr = [];
const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
function setup() {
    createCanvas(innerWidth, innerHeight);
    textSize(width / 10);
    textAlign(CENTER, CENTER);
    textFont("Nerko One")
    for (var x = 0; x < width; x += 50) {
        for (var y = 0; y < height; y += 50) {
            arr.push({ x, y });
        }
    }
    stroke("black");
    strokeWeight(5);
    rectMode(CENTER);
}
function draw() {
    background("white");
    fill("red")
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    for (let i of arr) {
        let level = noise(i.x * 0.001, i.y * 0.001, frameCount * 0.009);
        let c = map(level, 0, 1, 0, colorArray.length);
        fill(colorArray[~~(c)])
        rect(i.x, i.y, 50, 50)
    }
    fill("white")
    text(`${h.pad()} : ${m.pad()} : ${s.pad()} `, width * 0.5, height * .5);
}