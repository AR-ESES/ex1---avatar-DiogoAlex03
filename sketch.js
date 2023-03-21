function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {

	background(0);
	noFill();
	stroke(255);
	circle(width / 2, height / 2, height / 2 );
	circle(width / 2 - height /3/4, height /2 - height/18, height/12 );
	circle(width / 2 + height /3/4, height /2 - height/18, height/12 );
	line(950,600,700,500);
	}