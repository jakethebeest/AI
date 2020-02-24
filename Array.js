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