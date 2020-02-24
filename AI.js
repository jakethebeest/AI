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


