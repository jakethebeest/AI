class AI{
	constructor(nodenum,inputs){
		this.nodes=[];
		this.inputs=inputs
		for(let j=0;j<nodenum;j++){
			this.nodes[j]=[];
			
			
		}
		for(let j=0;j<nodenum;j++){
		for(let k=0;k<int(random(3,6));k++){
		this.nodes[j][k]=[];	
			
		}
		}		
		this.q=[[],[]];
		this.x=0;
		this.dx=0;
		this.dy=0;
		this.data=[[[],[],[]]];
		
		this.mem=new memory();
		
		this.hasbenre=false;
		
		
	}
		//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	setoutput(nuron,func){
		if(this.nodes[nuron]==undefined){
		print("this is not a node");
		}
		else{
			this.nodes[nuron]=func;
			
		}
		
		
	}
		//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	edit_weight(nuron,weight,amount){
		//print(nuron);
if(this.nodes[nuron]!=undefined){
		for(let j=0;j<this.nodes[nuron].length;j++){
		if(j==weight){
			if(this.nodes[nuron][j][1]<=1){
	//print(this.nodes[nuron][j][1]);
	this.nodes[nuron][j][1]=sig(float(this.nodes[nuron][j][1])+amount);
	//print(this.nodes[nuron][j][1]);
			}
		}
		else if(this.nodes[nuron][j][1]>0){
			//print("");
			//print(this.nodes[nuron][j][1]);
			this.nodes[nuron][j][1]=sig(float(this.nodes[nuron][j][1])-amount)/(int(this.nodes[nuron].length)-1);
	//	print(this.nodes[nuron][j][1]);
		}
		}
		}
	}
		//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	randomconnect(){
		//first one represents what node is connected to, second is weight
		for(let j=0; j<this.nodes.length;j++){
			for(let k=0;k<this.nodes[j].length;k++){
	this.nodes[j][k][0]=int(random(this.inputs,this.nodes.length));	
	this.nodes[j][k][1]=1/this.nodes[j].length;
			}
		}
		
		//print(this.nodes);
		//noLoop();
	}
		//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	pulse(node){
		//print(node);
		this.data[this.dy][0][this.dx-1]=node;
		this.q[this.x].push(this.nodes[node]);
		
		
	//print(this.q[0]);
	}
	
		//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	runeverything(){
		this.x=1;
		for(let j=0;j<this.q[0].length;j++){
			
				//print(this.q[0][j]);
				if(Array.isArray(this.q[0][j])){
			
				this.pulse(this.randomweighted(this.q[0][j]));
					
				}
				else{
					if(this.q[0][j]!=undefined){
					
					//print(j);
					//print(this.q[0]);
				this.q[0][j]();
				}
				}
			}
		this.dy++;
		this.dx=0;
		this.data.push([]);
		this.data[this.dy]=[];
		this.data[this.dy][0]=[];
		this.data[this.dy][1]=[];
		this.data[this.dy][2]=[];
		this.q.shift();
		this.q[1]=[];
		
		
	}
		//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	cleanup(){
		
		while(this.data.length>1){
			
		this.data.shift();
		this.dy--;
		}
		
	}
	//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	punish(amount){
		this.hasbeenpun=true;
		if(this.data!=undefined){
		for(let j=0;j<this.data.length;j++){
			
			for(let k=0;k<this.data[j].length;k++){
				
		this.edit_weight(this.data[j][0][k],this.data[j][2][k],-1*amount);
			}
			}
		}
		this.q=[];
		this.q[0]=[];
		this.q[1]=[];
		this.cleanup();
	}
	reward(amount=this.datalimit){
		
		if(this.data!=undefined){
		for(let j=0;j<this.data.length;j++){
			
			for(let k=0;k<this.data[j].length;k++){
		this.edit_weight(this.data[j][0][k],this.data[j][2][k],amount);
			}
			}
		}
		this.cleanup();
	}
		//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
	
	randomweighted(node){
		//print(node);
		let x=random(1);
		//print(x);
		let y=0;
		for(let j=0;j<node.length;j++){
		if(x<=node[j][1]+y){
		//print(node[j][0]);
		
		this.edit_weight(this.nodes.indexOf(node),j,.01);
		this.data[this.dy][1][this.dx]=node[j][1];
		
		this.data[this.dy][2][this.dx]=j;
		
		this.dx++;
		
		return node[j][0];
		
		}
		else {
		if(node[j][1]<=0){
			node.splice(j,1);
			
		}
		else{
		y+=node[j][1];
		}
		}
		
	}
	//print(node.length);
	node[node.length]=[];
	//print(node);
node[node.length-1][0]=int(random(this.inputs,this.nodes.length));
node[node.length-1][1]=1-y;
this.edit_weight(this.nodes.indexOf(node),node.length-1,.01);
this.data[this.dy][1][this.dx]=node[node.length-1][1];
		this.data[this.dy][2][this.dx]=node.length-1;
		this.dx++;
return node[node.length-1][0];
	alert("never should get here");
	}
	


	
}

function sig(x){
return	1/(1+(Math.pow(Math.E,-1*x)))
	
}
//=========================================================================================================
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
//=========================================================================================================
function indexOfX(array,value){
	//print(array);
	for(let j=0;j<array.length;j++){
		if(Array.isArray(array[j])){
			if(indexOfX(array[j],value)==-1){
			}
			else{
				return j;	
			}
		}
	else{
		return array.indexOf(value);
	}
	}
	return -1;
	
	
}

function countitem(array,value){
	let count=0;
	for(let j=0;j<array.length;j++){
		if(Array.isArray(array[j])){
		count+= countitem(array[j],value);
		}
		else{
			if(array[j]===value){
				count++;	
			}
		}
		}
	return count;
	
}

function idx(array, thing){
	//i didn't make this function, please dont sue me
  if(!Array.isArray(array)) 
    if(array == thing){
     
	  return "";
	}
    else
      return false;
  
  for(let i = 0; i < array.length; i++){
    value = idx(array[i], thing)
    if(value !== false){   
  return i + "/" + value;
	}
  }
  
  return false;
}

function indexOfex(array,value){
	let x=idx(array,value);
	x= x.split("/");
	x.pop();
	for(j=0;j<x.length;j++){
		x[j]=int(x[j]);
	}
	return x;
	
}



function modAt(array,value,mod){
	let x=array;
	if(indexOfX(array,value)!=-1){
	if(Array.isArray(array[indexOfX(array,value)])){
	x[indexOfX(array,value)]=	modAt(array[indexOfX(array,value)],value,mod);
		
	}
	else{
	x[indexOfX(array,value)]=mod;
	}
	}

	return x;
}
function addAt(array,value,mod){
	let x=array;
	if(indexOfX(array,value)!=-1){
	if(Array.isArray(array[indexOfX(array,value)])){
	x[indexOfX(array,value)]=	addAt(array[indexOfX(array,value)],value,mod);
		
	}
	else{

	x.push(mod);
	}
	}

	return x;
}
function removeAt(array,value){
	let x=array;
	if(indexOfX(array,value)!=-1){
	if(Array.isArray(array[indexOfX(array,value)])){
	x[indexOfX(array,value)]=	removeAt(array[indexOfX(array,value)],value);
		
	}
	else{
	x.splice(indexOfX(x,value),1);
	}
	}

	return x;
}


