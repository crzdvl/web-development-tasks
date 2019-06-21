

button.onclick = function() {
	let a = document.getElementById("value1").value;
    let b = document.getElementById("value2").value;
	let sum = 0, min, max;
	
	if(a < b){
		max = b;
		min = a;
	} else { 
		max = a;
		min = b;
	}
	
	for(;min <= max;min++){
		let i = min % 10;
		if(i === 2 || i === 3 || i === 7){
			sum = +sum + +min;
		}
	}

    alert(sum);
};