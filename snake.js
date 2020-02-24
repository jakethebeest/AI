class snake{
	constructor(x,y){
	this.grid=[];
	for(let j=0;j<x;j++){
	this.grid[j]=[];	
		
	}
	for(let j=0;j<x;j++){
		for(let k=0;k<y;k++){
			this.grid[j][k]="empty";
		}
	}
this.length=4;
this.count=3;
	this.x=x/2;
	this.y=y/2;
	this.lastmove=[];
	
	 this.b=false;
	 this.pause=true;
	 this.score=0;
	 if(this.pause==false){
while(this.b==false){
		let xs=int(random(this.grid.length));
		let ys=int(random(this.grid[0].length));
		
		if(this.grid[xs][ys]!="empty"){
			
		}
		else{
			this.grid[xs][ys]="apple";
			this.b=true;
			a.pulse(xs+ys*this.grid.length+(this.grid.length*this.grid[0].length));
			break;
		}
	}	
	}
	}
	
	body(){
	
	
	if(this.pause==false){
while(this.b==false){
		let xs=int(random(this.grid.length));
		let ys=int(random(this.grid[0].length));
		
		if(this.grid[xs][ys]!="empty"){
			
		}
		else{
			this.grid[xs][ys]="apple";
			this.b=true;
			testmem.store("apple1");
			a.pulse(xs+ys*this.grid.length+(this.grid.length*this.grid[0].length));
			break;
		}
	}	

	if(this.count==4){
			this.grid[this.grid.length/2][this.grid[0].length/2]="tail";
		}
	let temp=this.length;
	this.grid[this.x][this.y]="head"
	if(lastkey=="w"){
		
		if(this.grid[this.x][this.y-1]!=undefined&&this.grid[this.x][this.y-1]=="empty"){
	this.grid[this.x][this.y]="body";
	this.grid[this.x][this.y-1]="head";
	this.y--;
	this.lastmove.push(UP_ARROW);
	
		}
		else if(this.grid[this.x][this.y-1]=="apple"){
			
			this.length++;
			this.grid[this.x][this.y]="body";
			this.b=false;
			this.grid[this.x][this.y-1]="head";
			this.score++;
			this.y--;
this.lastmove.push(UP_ARROW);	
	}
	else{
		return "loose";
	}
		
	}
	if(lastkey=="s"){
		if(this.grid[this.x][this.y+1]!=undefined&&this.grid[this.x][this.y+1]=="empty"){
	this.grid[this.x][this.y]="body"
	this.grid[this.x][this.y+1]="head"
	this.y++;
this.lastmove.push(DOWN_ARROW);
	
		}
		else if(this.grid[this.x][this.y+1]=="apple"){
			this.length++;
			this.b=false;
			this.score++;
			this.grid[this.x][this.y]="body";	
			this.grid[this.x][this.y+1]="head";
			this.y++;
this.lastmove.push(DOWN_ARROW);			
		}
		else{
			return "loose";
		}
	}
	if(lastkey=="d"){
		if(this.grid[this.x-1]!=undefined&&this.grid[this.x-1][this.y]=="empty"){
	this.grid[this.x][this.y]="body"	;
	this.grid[this.x-1][this.y]="head"	;
	this.x--;
	this.lastmove.push(LEFT_ARROW);
		}
		else if(this.grid[this.x-1]!=undefined&&this.grid[this.x-1][this.y]=="apple"){
			this.length++;
			this.b=false;
			this.score++;
			this.grid[this.x][this.y]="body";	
			this.grid[this.x-1][this.y]="head";	
			this.x--;
			this.lastmove.push(LEFT_ARROW);
		}
		else{
			return "loose";
		}
	}
	if(lastkey=="a"){
		if(this.grid[this.x+1]!=undefined&&this.grid[this.x+1][this.y]=="empty"){
	this.grid[this.x][this.y]="body";	
	this.grid[this.x+1][this.y]="head";
	this.x++;
this.lastmove.push(RIGHT_ARROW);	
		}
		else if(this.grid[this.x+1]!=undefined&&this.grid[this.x+1][this.y]=="apple"){
			this.length++;
			this.grid[this.x][this.y]="body";	
			this.grid[this.x+1][this.y]="head";
			this.x++;
			this.b=false;
			this.score++;
			this.lastmove.push(RIGHT_ARROW);
		}
		else{
			return "loose";
		}
	}
	a.pulse(this.x+this.y*this.grid.length);
	
	
	let c=0;
	
	for(let j=0;j<this.grid.length;j++){
	
	if(temp!=this.length){
		
			break;
		}
		for(let k=0;k<this.grid[j].length;k++){
		if(this.count>=4){
		if(this.grid[j][k]=="tail"){
			
			if(this.lastmove[0]==UP_ARROW){
			this.grid[j][k-1]="tail";	
			this.grid[j][k]="empty";
			this.lastmove.shift();
			a.pulse(j+(k-1)*this.grid.length);
			c=true;
			break;
			}
			if(this.lastmove[0]==DOWN_ARROW){
			this.grid[j][k+1]="tail";	
			this.grid[j][k]="empty";
			this.lastmove.shift();
			a.pulse(j+(k+1)*this.grid.length);
			c=true;
			break;
			}	
			if(this.lastmove[0]==LEFT_ARROW){
			this.grid[j-1][k]="tail";	
			this.grid[j][k]="empty";
			this.lastmove.shift();
			a.pulse(j-1*k*this.grid.length);
			c=true;
			break;
			}	
			if(this.lastmove[0]==RIGHT_ARROW){
			this.grid[j+1][k]="tail";	
			this.grid[j][k]="empty";
			this.lastmove.shift();
			c=true;
			a.pulse(j+1*k*this.grid.length);	
			break;
			
			}
					
		}		
		}
		}
		if(c==true){
		break;
		}		
		}
		this.count++;
	}
	}
	
	
	display(){
		for(let j=0;j<this.grid.length;j++){
			for(let k=0;k<this.grid[0].length;k++){
			if(this.grid[j][k]=="body"||this.grid[j][k]=="tail"||this.grid[j][k]=="head"){
			fill(255/4,255/1.5,10);
			rect((width/this.grid.length)*j,(height/this.grid.length)*k,width/this.grid.length,height/this.grid[j].length);
			}	
			if(this.grid[j][k]=="apple"){
			fill(255,0,0);	
			rect((width/this.grid.length)*j,(height/this.grid.length)*k,width/this.grid.length,height/this.grid[j].length);

			}
			}
		
	}
	fill(255);
	
	}
	

	
}


