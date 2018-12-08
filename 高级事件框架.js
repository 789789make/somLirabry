function addEvent(obj,ev,fn){
	if(obj.attachEvent){
		obj.attachEvent(ev,fn)
	}
	else{
		obj.addEventListener(ev,fn,false)
	}

}