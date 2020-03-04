class thinking{
	constructor(){
		this.energy=100;
		this.happieness=10;
		this.wellbeing=10;
		this.satifaction=2;
		this.mem=[];
	this.input;
	this.previnput;
	//mem[0]=[input,[[input1,positive.length/(negitive.length+positive.length),[positive],[negitive]],[input2,percent,[positive],[negitive]],[input3...]],
	
	}
	
		
	thinking(){

	}	
	
	problemidentifire(){
		
		
	}
	problemsolving(){
		//should think up a solotion and run it in a forcasting.
	}
	
	forcasting(accuracy,y,input=this.input,input2=this.input,time=1000000000){
	if(time=0){
		return input;
	}
	let x="";
	let prevx=x;
	if(input!=undefined){
	if(input==input2&&indexOfX(this.mem,input)!=-1){
		
	for(let j=0;j<this.mem[indexOfX(this.mem,input].length;j++){
		if(this.mem[indexOfX(this.mem,input][1][j][1]>=accuracy){
			x+=","+forcasting(accuracy,x,time-1,input);
			break;
		}
	}
	if(prevx==x){
		return input;
	}
		
	}
		}
	}
	
	
	satifactionrules(){
		
			this.happieness-=10-this.wellbeing;
		if(this.wellbeing<10){		
		this.wellbeing+=.1;
		}
		if(this.wellbeing>10){
			this.wellbeing-=.1;
		}
		
		if(this.happieness>10){
			this.satifaction+=.01;
			this.happieness-=.1;
		}
		if(this.happieness<10){
			this.satifaction-=.01;
			this.happieness+=.1;
		}
		
	}
	
	
}

