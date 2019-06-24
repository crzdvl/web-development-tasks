/*First*/
button.onclick = function() {
	let a = parseInt(document.getElementById("value1").value);
    let b = parseInt(document.getElementById("value2").value);
	let sum = 0, min, max;
	
	if(a < b){
		max = b;
		min = a;
	} else { 
		max = a;
		min = b;
	}
	
	for(;min <= max;min++){
		let i = Math.abs(min) % 10; //почитать про Math.abs
		if(i === 2 || i === 3 || i === 7){
			sum = sum + min;
		}
	}

    document.getElementById("suma").innerHTML = sum;
};

/*Second*/
button_2.onclick = function() {
	let seconds = parseInt(document.getElementById("seconds").value);

	let date = new Date(null);
	date.setSeconds(seconds);
	let timeString = date.toISOString().substr(11, 8);

	document.getElementById("timeString").innerHTML = timeString;
};

/*Third*/
button_3.onclick = function() {
	let timeString = document.getElementById("appt-time").value;

	let b = timeString.split(":"); //Метод split() разбивает объект String на массив строк путём разделения строки указанной подстрокой.
	let seconds = (+b[0]) * 3600 + (+b[1]) * 60 + (+b[2]);

	document.getElementById("seconds").innerHTML = seconds;
}

button_4.onclick = function() {
	let a = document.getElementById("datetime-local-1").value;
	let b = document.getElementById("datetime-local-2").value;



	
};