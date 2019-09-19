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
		let i = Math.abs(min) % 10; 
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

	let a = timeString.split(':'); // split it at the colons

	let secondss = (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]); 

	document.getElementById("secondss").innerHTML = secondss;
}



button_4.onclick = function() {
	var date1 = document.dateForm.date1;
	var date2 = document.dateForm.date2;
	var currentDate = [];
	var date1 = new Date(date1.value);
	var date2 = new Date(date2.value);
	
		if (date1.getDate() < date2.getDate()){
			currentDate['day'] = date2.getDate() - date1.getDate();
		} else {
			currentDate['day'] = date1.getDate() - date2.getDate();
		}
		if (date1.getMonth() < date2.getMonth()){
			currentDate['month'] = date2.getMonth() - date1.getMonth();
		} else {
			currentDate['month'] = date1.getMonth() - date2.getMonth();
		}
		if (date1.getFullYear() < date2.getFullYear()){
			currentDate['year'] = date2.getFullYear() - date1.getFullYear();
		} else {
			currentDate['year'] = date1.getFullYear() - date2.getFullYear();
		}
		if (date1.getHours() < date2.getHours()){
			currentDate['hour'] = date2.getHours() - date1.getHours();
		} else {
			currentDate['hour'] = date1.getHours() - date2.getHours();
		}
		if (date1.getMinutes() < date2.getMinutes()){
			currentDate['minute'] = date2.getMinutes() - date1.getMinutes();
		} else {
			currentDate['minute'] = date1.getMinutes() - date2.getMinutes();
		}

	alert(' Прошло дней ' + currentDate['day'] + ' Прошло месяцев: ' + currentDate['month'] +
			' Прошло лет: ' + currentDate['year'] + ' Прошло часов: ' + currentDate['hour'] +
			' Прошло минут: ' + currentDate['minute']);
}



button_5.onclick = function() { 
	let a = document.getElementById("num").value;

	document.write("<table border='1' width='300' height='300'>");
	for(let i=1; i<= a; i++) {
		document.write("</tr>");
		for(let j=1; j<= a; j++) {
			if ((i+j)%2!=0){
			document.write("<td bgcolor='white'></td>");
			}
			else {
			document.write("<td bgcolor='black'></td>");
			}}
			document.write("</tr>");
	}
	document.write("</table>");
}


button_6.onclick = function() {
	let informationn = document.getElementById("area").value;
   
	let information = informationn.split(',');
   
	let expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
	let urlRegexpFirst = new RegExp(expression);
   
	expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
	let urlRegexpSecond = new RegExp(expression);
   
	expression = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/g;
	let ipRegexp = new RegExp(expression);
   
	for(let i = 0; i < information.length; i++){
	 if(information[i].match(urlRegexpFirst) || information[i].match(urlRegexpSecond) || information[i].match(ipRegexp) ) {
	 } else {
	  console.log('delete' + information[i]);
	  delete information[i]; //.splice(i, i); //начиная с позиции 1, удалить 1 элемент
	 }
	}
   
	let x = undefined;
   
	let a = document.createElement('a');
	for (let i = 0; i < information.length; i++) {
	 if(information[i] != x){
	  link = a.cloneNode();
		link.href = information[i];
		link.innerHTML = information[i] + '</br>';
		document.getElementById('list').appendChild(link);
	 }
	}
}

button_7.onclick = function() {
	let text = document.getElementById('text').value,
		regexp = new RegExp(document.getElementById('regexp').value);

	text = text.replace(regexp, '<mark>$&</mark>');

	document.getElementById("newText").innerHTML = text;
}

