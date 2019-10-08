/*First*/
button.onclick = function() {
	let a = parseInt(document.getElementById('value1').value),
    	b = parseInt(document.getElementById('value2').value),
		sum = 0;
	let min, max;
	
	if(a < b){
		[max, min] = [b, a];
	} else { 
		[max, min] = [a, b];
	}
	
	for(;min <= max;min++){
		let number = Math.abs(min) % 10,
			re = new RegExp('/3$|7$|2$/');

		if(re.test(number)){
			sum = sum + min;
		}
	}

    document.getElementById('sum').innerHTML = 'Sum = ' + sum;
};

/*Second*/
button_2.onclick = function() {
	let seconds = parseInt(document.getElementById('userSeconds').value),
		date = new Date(null);

	date.setSeconds(seconds);
	let timeString = date.toISOString().substr(11, 8);
	document.getElementById('timeString').innerHTML = 'Time = ' + timeString;
};

/*Third*/
button_3.onclick = function() {
	const timeString = document.getElementById('appt-time').value;
	let a = timeString.split(':'); // split it at the colons
	secondss = (+a[0]) * 3600 + (+a[1]) * 60 + (+a[2]); // 3600s in hour, 60s in minute

	document.getElementById('seconds').innerHTML = 'Seconds = ' + secondss;
}


button_4.onclick = function() {
		let date1 = document.dateForm.date1,
			date2 = document.dateForm.date2,
			currentDate = [];

		date1 = new Date(date1.value);
		date2 = new Date(date2.value);
		
		if (date1 > date2) {
			[date1 , date2] = [date2, date1];
		}

		currentDate['day'] = date2.getDate() - date1.getDate();
		currentDate['month'] = date2.getMonth() - date1.getMonth();
		currentDate['year'] = date2.getFullYear() - date1.getFullYear();
		currentDate['hour']   = date2.getHours()    - date1.getHours();
		currentDate['minute'] = date2.getMinutes()  - date1.getMinutes();



		document.getElementById('datesDifference').innerHTML = 'Time = ' + ' Прошло дней ' + currentDate['day'] + ' Прошло месяцев: ' + currentDate['month'] +
			' Прошло лет: ' + currentDate['year'] + ' Прошло часов: ' + currentDate['hour'] +
			' Прошло минут: ' + currentDate['minute'];
	}


button_5.onclick = function() { 
	const a = document.getElementById('num1').value,
		b = document.getElementById('num2').value;
	let tableContainer = document.getElementById('tableResult');

	let container = "<table border='1' width='300' height='300'>";
	for(let i=1; i<= a; i++) {
		container += '</tr>';
		for(let j=1; j<= b; j++) {
			if ((i+j)%2!=0){
				container += "<td bgcolor='white'></td>";
			}
			else {
				container += "<td bgcolor='black'></td>";
			}}
			container += '</tr>';
	}
	container += '</table>';
	tableContainer.innerHTML = container;
}

const userData = document.getElementById('area');
userData.addEventListener('blur', function() {
	let informationn = document.getElementById('area').value,
		information = informationn.split(','),
		expression,
		urlRegexpFirst,
		urlRegexpSecond,
		ipRegexp,
		x = undefined,
		a = document.createElement('a');

	expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
	urlRegexpFirst = new RegExp(expression);

	expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
	urlRegexpSecond = new RegExp(expression);

	expression = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/g;
	ipRegexp = new RegExp(expression);

	for(let i = 0; i < information.length; i++){
		if(information[i].match(urlRegexpFirst) || information[i].match(urlRegexpSecond) || information[i].match(ipRegexp) ) {
		} else {
			delete information[i]; //.splice(i, i); //начиная с позиции 1, удалить 1 элемент
		}
	}

	information.sort();

	for (let i = 0; i < information.length; i++) {
		if(information[i] != x){
			link = a.cloneNode();
			link.href = information[i];
			link.innerHTML = information[i] + '</br>';
			document.getElementById('list').appendChild(link);
		}
	}
});

button_7.onclick = function() {
	let text = document.getElementById('text').value,
		regexp = new RegExp(document.getElementById('regexp').value, 'gm');

	text = text.replace(regexp, '<mark>$&</mark>');

	document.getElementById('newText').innerHTML = 'Marked text: ' + text;
};