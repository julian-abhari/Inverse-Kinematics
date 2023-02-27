var slither;

function setup() {
	createCanvas(600, 600);
	slither = new Slither(width / 2, height / 2, 14);
}

function draw() {
	background(51);
	slither.show();
}
