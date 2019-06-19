let a = document.getElementById("value-1").value;
let b = document.getElementById("value-2").value;
let sum = 0, min, maks;

if(a > b){
	max = a;
	min = b;
} else { 
	max = b;
	min = a;
}



for(;min <= max;min++){
	i = min % 10;
	if(i === 2 || i === 3 || i === 7){
		sum = sum + a;
	}
	
}
consol.log(sum);
