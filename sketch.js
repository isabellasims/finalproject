var x, y;
var sizex = 30
var sizey = 30
var r = 1
var g = 1 
var b = 1
var words = ["Welcome","press mouse to begin"]
var bgcolor 
var sizex = 30
var sizey = 30
var r = 1
var g = 1
var b = 1
var flag = 0
var button
var button2
var button3
var button4
var button5
var button6
var y2
 

/// grass variables
var num = 10000;//amount of grass blades
var LineHeight = [];
var SortLineHeight = [];
var InverseSort = [];
var ShuffleLineHeight = [];
var x, y;
var y2
var sizex = 30
var sizey = 30
var shower = 0
var dir = 0
var drawdirt = 0
var slider 
var MyCircle
NumberOfCircles = 120

words2 = ["What's this?","I t appears that some sort of ball has emerged from the ground...","test"] // space with i and t because it looks better
 
function preload() {
myFont = loadFont("Adiescode.ttf");
myFont2 = loadFont("Beautiful_Script.ttf");
myFont3 = loadFont("KGDoYouLoveMe.ttf");
moon = loadImage('tp.png');	// put the image on photoshop and deleted background + saved as PNG to allow transparency
bonsai = loadImage('bonsai.jpg'); // unsplash photo (same for moon)
flower = loadImage('flower.png'); // adobe stock photo
sky = loadImage("bady-qb-42758-unsplash.jpg"); // Photo by bady qb on Unsplash
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  // Starts in the middle
  x = width / 2;
  y = height;
	y2 = windowHeight/2
	background(0);
	
myslider_xspeed();
	grassheight() // activates when button pressed


	MyCircle = new circleObject(300,300,50);
	for (var i = 0;i<NumberOfCircles;i++){
		MyCircle[i]= new circleObject(random(width),random(height),random(50));
	}
	
	
}	

function circleObject(X,Y,Size){ // opens the object
	 this.X = X
	 this.Y = Y
	 this.Size = Size
	 this.fill = 1 // 0 means fill, 1 means no fill
	 this.StrokeCol = color(255,255,100,100)
	 this.Weight = 4
	 
	 this.Display = function(){ 
		 
		 stroke(this.StrokeCol);
		 ellipse(this.X,this.Y,this.Size,this.Size);
		 
	 }
 } 

function mouseClicked() {
	flag = flag + 1


}


function draw() {
	if (flag == 0){ // if mouse is clicked, do this
	
	intro()
}
if (flag == 1){ // if mouse is clicked, do this
	scene1();
	scene1_text()
}
	if (flag == 2){ // if mouse is clicked, do this 
	
	background(255);
	textFont(myFont3);
	strokeWeight(4);
	stroke(0);
	
	fill(255,255,29);
	textSize(50);
	text("G o t  i t." ,width/2 -100,height-350)
	
		
		
	textFont(myFont2);	
	fill(0);
	noStroke();
	textSize(50);
	text("nice work!" ,width/2 + 50 ,height-340)
	
	button = createButton("Plant it?");
  button.mousePressed(plant_button);
	button.position(20,20); 
	button.size(100,50);
		
	button3 = createButton("Release it?");
  button3.mousePressed(release_button);
	button3.position(200,20); 
	button3.size(100,50);

	
}

	if (dir == 1){	// in ball down it is set to this


ball_down();
grass_place();


}
if (dir == 2){ // in ball up it is set to this
	
	
	ball_up();
	grass_place();
}
	
if (drawdirt == 1){
	 mouseDragged()
}

	if (shower == 1){ // made another flag for meteor shower because it needs to be called in draw to work
	
	
	meteor_button();
		sliderx.show(); // finally figured out how to get slider to stop dragging... need to call the function of slider in the setup and then hide it until this scene, then at the flag show the slider
}
	


function mouseDragged() { // draws dirt
	if (mouseIsPressed) {
	noStroke();
	fill(71, 42, 11);
  ellipse(mouseX, mouseY, 35, 35);
	}
}
	
	
}
function intro(){
	textFont(myFont);
	for (var i = 0; i < 400; i++)
			fill(random(255),random(255),random(255))
			ellipse(random(0, width), random(0, height), 2);
	

			for (var i = 0; i < 200; i++)
					fill(255)
					ellipse(random(0,width),random(0,height), 1);


			fill(255);
			textSize(300);
			textAlign(CENTER);
			text(words[0],width/2,height/2)

			fill(255);
			textSize(30);
			textAlign(CENTER);
			text(words[1],width/2 + 50,height/2 + 100)
 }
function scene1(){
	background(r,g,b);
  // Draw a circle
  stroke(50);
  fill(255,255,29);
  ellipse(x, y, sizex, sizey);
  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
 	y = y - 1;
  //sizex = sizex + 1 growth
	//sizey = sizey + 1
  // Reset to the bottom
  if (y < windowHeight/2) {
		// makes background change slowly to fully white
		r = (r + 5)
		g = (g + 5)
		b = (b + 5)
		background(r,g,b);
    y = windowHeight/2
		ellipse(x, y, sizex, sizey);
		//play a sound effect
  }
	
}
	
function scene1_text() {
	textFont(myFont2);
	noStroke();
	fill(0);
	textSize(50);
	text(words2[0],width/2 - 400,height-500)
	fill(0);
	textSize(40);
	text(words2[1],width/2 -200,height-450)
	fill(0);
	textSize(30);
	text("Click the ball to grab it!",width/2 -100,height-350)
	
}

function pot_background(){
//grass

background(51, 214, 62);
// pot
stroke(210,105,30);
strokeWeight(175);
ellipse(width/2,height/2,width-200,width-200)
	//dirt
fill(71, 38, 11);
ellipse(width/2,height/2,width-200,width-200);	
// seed
noStroke();
fill(255,255,0);
ellipse(width/2,height/2,50,50);



	
	}
function scene2_text(){
	textFont(myFont2);
	noStroke();
	fill(255);
	textSize(50);
	text("Click and drag to cover your seed with dirt..." ,width/2 - 300,height-500)
	


}



	
function burry_button(){
	
	dir = 0  // this stops the ball_down function from being called and allows this to be called
	pot_background()
	scene2_text()
	drawdirt = 1

	button2 = createButton("Bury"); // change the button to grow after seed is burried 
  button2.mousePressed(burry_button);
	button2.position(20,20); 
	button2.size(100,50);
	
	button4 = createButton("grow in moonlight"); // change the button after seed is burried
	button4.mousePressed(moon_button)
	button4.position(20,20); 
	button4.size(100,50);
	
	button5 = createButton("grow in sunlight"); // change the button after seed is burried
	button5.mousePressed(sun_button)
	button5.position(200,20); 
	button5.size(100,50);
	
	
}
function moon_button(){
	background(0);
	drawdirt = 0
	noStroke();
	fill(255);
	// stars
	for (var i = 0; i < 200; i++)
    ellipse(random(0, width), random(0, height), 1);
	image(bonsai,windowWidth/2-350,windowHeight/2+50,300,300)
	grass_place()
	
	
	// moon beams
		for (var i = 0; i < 400; i += 20) {// i+= length apart
		noStroke();
	fill(255,255,255,10)
	
	bezier(windowWidth/2,windowHeight+i, 10, 10, 90, 90, 300,300);
	image(moon,0,0,220,220)
		}
	 stroke(0);
fill(255);
	textSize(50);
textFont(myFont2);
text("The moon grew a bonsai tree",700,80)
}

function sun_button(){
drawdirt = 0 // if not done, when you press it will still draw dirt
//background(51,153,255);
background(sky);
image(flower,windowWidth/2-350,windowHeight/2+50,300,300)
grass_place()

	// sun beams
	for (var i = 0; i < 400; i += 20) {// i+= length apart
		noStroke();
	fill(255,255,255,10)
	
	bezier(windowWidth/2,windowHeight+i, 10, 10, 90, 90, 300,300);

		}
fill(251,255,112);
ellipse(120,120,150);
fill(244, 188, 66,90);
ellipse(120,120,180);
	
	stroke(0);
fill(255);
	textSize(50);
textFont(myFont2);
text("The sun grew a flower",700,80)
}
function ball_up(){
	
	background(255);
  // Draw a circle
  noStroke();
  fill(255,255,29);
  ellipse(x, y, sizex, sizey);
  
  // Jiggling randomly on the horizontal axis
 x = x + random(-10, 10);
  // Moving up at a constant speed
 	y = y - 5 ;
  sizex = sizex + 1
	sizey = sizey + 1//growth

  // Reset to the bottom

	
	
}

function ball_down(){
	
	background(255);
  // Draw a circle
  noStroke();
  fill(255,255,29);
  ellipse(x, y, sizex, sizey);
  
  // Jiggling randomly on the horizontal axis
 x = x + random(-1, 1);
  // Moving down at a constant speed
 	y = y + 1 ;
  //sizex = sizex + 1 growth

  // Reset to the bottom

	
	
}

function grassheight(){
	for (var i = 0; i <num; i++){
	  LineHeight[i] = random(20,30) //range of height
		ShuffleLineHeight = shuffle(LineHeight) //randomize order of height
		//make copies of the array
	  SortLineHeight[i] = LineHeight[i];
    InverseSort[i] = LineHeight[i];
	}
	}


function grass_place(){

	for (var i = 0; i <num; i++){
		strokeWeight(1);
		stroke(0,150,0);
		
		//Draws the values of array LineHeight as a picture
		var Yval = 650;
		var Xval = 1*i; 
		line(Xval,Yval,Xval,Yval-LineHeight[i]);

	}
		}


function plant_button() {
	
	dir =  dir + 1
	flag = flag + 1// without this, you have to click on the screen an extra time for the button to work



	button2 = createButton("Burry"); // change the button to water after seed is burried 
  button2.mousePressed(burry_button);
	button2.position(20,20); 
	button2.size(100,50);


	var col = color(255, 255, 255);
	button3 = createButton(" ");
	button3.position(200,20); 
	button3.style('background-color', col);
	button3.size(100,50);
}

function myslider_xspeed(){ // thought i would need to make different sliders for x and y speed but did not
	sliderx = createSlider(0.0, 10.0,1);
  sliderx.position(700, 90);
	
	sliderx.hide()
}
function meteor_button(){
	dir = 10 //  // stop everything else from happening
	flag = 10 // stop everything else from happening
	shower = 1
	var valx = sliderx.value();
noStroke();
	fill(255,255,29);
	background(0,0,51,20);
	for (var i = 0;i<NumberOfCircles;i++){		
	MyCircle[i].Display();
	MyCircle[i].X = (MyCircle[i].X +valx)%width;
	MyCircle[i].Y = (MyCircle[i].Y +valx)%height;

	}
//var rNumber = rSlider.value();
	//var gNumber = gSlider.value();
stroke(0);
fill(255);
	textSize(50);
textFont(myFont2);
text("Wow! The ball exploded in the sky and created a meteor shower!",700,80) // create this below the shower else they will go over the text
textSize(20);
textFont(myFont3);
text("control the speed of the shower!",580,110);
}


function release_button() {
	dir = 2
	flag = flag + 1
	var col = color(255, 255, 255);
	button3 = createButton(" ");
	button3.position(20,20); 
	button3.style('background-color', col);
	button3.size(100,50);
	
	
	button6 = createButton("Look up...."); // change the button to water after seed is burried 
	button6.position(200,20); 
	button6.mousePressed(meteor_button);
	button6.size(100,50);
	
}
