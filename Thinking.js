class thinking{
	constructor(){
		this.energy=100;
		this.happieness=10;
		this.wellbeing=10;
		this.satifaction=2;
		this.thoughts="";
		this.memory=new memory();
	this.input;
	
	
	}
	think(){
		
		
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

