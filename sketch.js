let s;
let a;
let amount=5000;

let c=0;
let gen=1;
let last=0;
let best=0;
let lastgen=0;
let lastkey="w";
let time=0;
let space=true;
let array=[["1"],[["2"]],[[["1"]],[["2"],[["1"]]]]];
let testmem;
let array2=[["1"],[["2"]],[[["1"]],[["2"],[["1"]]]]];
let t;
function setup(){
	t=new thinking();
	createCanvas(600,600);
	a=new AI(amount,1800);
	a.randomconnect();
	frameRate(60);
	s= new snake(120,120);
	background(0,0,255);
	textSize(30);
	testmem=new memory();
	print(array==array2);
	//noLoop();
	//a.display();
	//a.setoutput(amount-1,ai_a);
	//a.setoutput(amount-2,ai_w);
	//a.setoutput(amount-3,ai_s);
	//a.setoutput(amount-4,ai_d);
	testmem.set_to_run("left",ai_a);
	testmem.set_to_run("up",ai_w);
	testmem.set_to_run("down",ai_s);
	
	testmem.set_to_run("right",ai_d);
	testmem.store("up");
	testmem.store("down");
	testmem.store("left");
	testmem.store("right");
	t.happieness=11;
}


function draw(){
	//t.satifactionrules();
	//print(t.satifaction);
	//print(t.happieness);
	//print(t.wellbeing);
//	print(testmem.mainmem);
//	print(testmem.shortterm);
	
	
	for(let j=0;j<10;j++){
		if(space==true){
			j=10;
		}
		testmem.store(s.grid);
	testmem.retrive("apple");
	testmem.run();
	//testmem.retention();
	
		
		
background(0);
	
	if(s.body()=="loose"){
	testmem.sleep();	
		a.punish(.2);
		last=s.score;
		s=new snake(120,120);
		s.pause=false;
		//c=0;
		gen++;
	}
	else{
		a.reward(.2);
	}
if(s.score==20){
print(gen);

}	
	if(last>best){
		best=last;
		lastgen=gen-1;
	}
	if(time==100){
	a.punish(1);	
	}
	time++;
	}
	
	s.display();
	text("Score: "+s.score,30,30);
	text("Best of "+best+" at Generation "+lastgen ,30,120);
	text("Last: "+last,30,60);
	text("Generation: "+gen,30,90);
	//print(a.nodes);
	}
	//background(random(105));
	


function keyPressed(){
	if(key=="q"){a.punish()}
	if(key=="e"){a.reward()}
	if(keyCode==UP_ARROW&&c==0){s.pause=false; }
	if(keyCode==DOWN_ARROW&&c==0){s.pause=false;;}
	if(keyCode==LEFT_ARROW&&c==0){s.pause=false;;}
	if(keyCode==RIGHT_ARROW&&c==0){s.pause=false;;}
	if(keyCode==RIGHT_ARROW){if(space==true)space=false; else space=true;}
	
	
}


function ai_a(){
	s.pause=false;
	a.reward(10);
	time=0;
	lastkey="a";
}
function ai_w(){
	s.pause=false;
	time=0;
	a.reward(10);
	lastkey="w";
}
function ai_s(){
	s.pause=false;
	time=0;
	a.reward(10);
	lastkey="s";
}
function ai_d(){
	s.pause=false;
	time=0;
	a.reward(10);
	lastkey="d";
}
