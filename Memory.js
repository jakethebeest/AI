class memory{
	constructor(){
		
		this.q=[];
		this.rn=[];
		this.rn[0]=[];
		this.rn[1]=[];
		this.rncount=0;
		this.mainmem=["main",["snake","nothing"]];
		this.shortterm=[this.mainmem[1],[],[],[],[]];
		this.ai;
		}
		
	store(value,array){
	if(indexOfX(this.shortterm[0],value)==-1){
	if(array==undefined||indexOfX(this.mainmem,array)==-1){
		
		this.shortterm[3].push(value);
		this.shortterm[0].push(value);
	}	
	else{
		this.mainmem[indexOfX(this.mainmem,array)].push(value);
	}
	}
	}
	
	retrive(value,array){
		if(array==undefined){
			
		if(indexOfX(this.shortterm[0],value)!=-1){
		
		let x=	this.retrive(value,this.shortterm[0]);
		
			if(x==undefined){
			alert("what happend? it shouldn't get here");
			}			
			else{
				
				this.q.push(x);
				return x;
			}
		}
			else{
				
				let x=this.shortterm[3][int(random(this.shortterm[3].length-1))];
					this.shortterm[4].push(x);
					
				this.q.push(x);
				
				return x;
			}
			
		}
		else{
			
			
			if(this.shortterm[1].indexOf(array[1])==-1){
		this.shortterm[1].push(array[1]);
			}
		if(indexOfX(array,value)!=-1){
			
			let x= array[indexOfX(array,value)];
			if(x==undefined){
			alert("what happend? it shouldn't get here2");
			}			
			else{
				
				this.q.push(x);
				return x;
				
			}
		}
		else{
				let x=this.shortterm[3][int(random(this.shortterm[3].length-1))];
				
					this.shortterm[4].push(x);
					
				this.q.push(x);
			
				return x;
		}
		}	
	}
	
	
	set_to_run(value,func){

		this.rn[this.rncount][0]=value;
		this.rn[this.rncount][1]=func;
		this.rncount++;
		this.rn[this.rncount]=[];
	}
	run(){
		
			if(indexOfX(this.rn,this.q[0])!=-1){
				this.rn[indexOfX(this.rn,this.q[0])][1]();
			}
			this.q.shift();
		
	}
	retention(){
		
		for(let j=0;j<this.shortterm.length;j++){
			if(j==2){
					continue;
				}
			for(let k=0;k<this.shortterm[j].length;k++){
			while(countitem(this.shortterm[j],this.shortterm[j][k])>1){
			this.shortterm[j].splice(indexOfX(this.shortterm[j],this.shortterm[j][k]),1);
			}
			}
		}
		
		
	}
	sleep(){
		for(let j=0;j<this.shortterm[0].length;j++){
		if(this.shortterm[0][j-1]!=undefined){
		addAt(this.mainmem,this.shortterm[0][j-1],[this.shortterm[0][j],this.shortterm[4][j]]);	
		}
		else if(indexOfX(this.mainmem,this.shortterm[1][j])==-1){
			this.mainmem.push(this.shortterm[1][j]);
		}
		}
		this.shortterm=[this.mainmem[1],[],[],this.shortterm[3],[]];
		
		
	}
	
}