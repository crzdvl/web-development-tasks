/*First*/
button.onclick = function() {
	let a = parseInt(document.getElementById('value1').value),
    	b = parseInt(document.getElementById('value2').value),
		sum = 0,
		min, max,
		re = /3$|7$|2$/;
	
	if(a < b){
		[max, min] = [b, a];
	} else { 
		[max, min] = [a, b];
	}
	
	for(;min <= max;min++){
		if(re.test(min)){
			sum += min;
		}
	}

    document.getElementById('sum').innerHTML = 'Sum = ' + sum;
};

/*Second*/
button_2.onclick = function() {
	let seconds = parseInt(document.getElementById('userSeconds').value),
		date = new Date(null);
	if (seconds > 99999999999){
		document.getElementById('timeString').innerHTML =  'Введите меньшее число';
	} else {
		date.setSeconds(seconds);
	let timeString = date.toISOString().substr(11, 8);
	document.getElementById('timeString').innerHTML = 'Time = ' + timeString;
	}
};

/*Third*/
button_3.onclick = function() {
	const timeString = document.getElementById('appt-time').value;
	let a = timeString.split(':'); // split it at the colons
	secondss = (+a[0]) * 3600 + (+a[1]) * 60 + (+a[2]); // 3600s in hour, 60s in minute
	if (Object.is(secondss, NaN)){
		document.getElementById('seconds').innerHTML = 'Введите значение';
	} else {
		document.getElementById('seconds').innerHTML = 'Seconds = ' + secondss;
	}
}


button_4.onclick = function() {
		let date1 = document.dateForm.date1,
			date2 = document.dateForm.date2,
			currentDate = [];

		date1 = new Date(date1.value);
		date2 = new Date(date2.value);

		if (!date1.getTime() || !date2.getTime()) {
			document.getElementById('datesDifference').innerHTML = ' Введите значения';
		} else {
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
				currentDate['hour']  = date2.getHours()    - date1.getHours();
			} else {
				currentDate['hour']  = date1.getHours()    - date2.getHours();
			}
	
			if (date1.getMinutes() < date2.getMinutes()){
				currentDate['minute'] = date2.getMinutes()  - date1.getMinutes();
			} else {
				currentDate['minute'] = date1.getMinutes()  - date2.getMinutes();
			}

			document.getElementById('datesDifference').innerHTML = ' Прошло дней ' + currentDate['day'] + ' Прошло месяцев: ' + currentDate['month'] +
			' Прошло лет: ' + currentDate['year'] + ' Прошло часов: ' + currentDate['hour'] +
			' Прошло минут: ' + currentDate['minute'];
		}
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
		expression,
		urlRegexpFirst,
		urlRegexpSecond,
		ipRegexp,
		x = undefined,
		a = document.createElement('a');

	let information = informationn.split(',');

	expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
	urlRegexpFirst = new RegExp(expression);

	expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
	urlRegexpSecond = new RegExp(expression);

	expression = /(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}/g;
	ipRegexp = new RegExp(expression);

	for(let i = 0; i < information.length; i++){
		if(information[i].match(urlRegexpFirst) || information[i].match(urlRegexpSecond) || information[i].match(ipRegexp) ) {
			console.log(information[i]);
		} else {
			delete information[i]; //.splice(i, i); //начиная с позиции 1, удалить 1 элемент
		}
	}

	information.sort();

	for (let i = 0; i < information.length; i++) {
		if(information[i] != x){
			link = a.cloneNode();
			link.href = information[i];
			link.innerHTML = information[i].replace(/(http:\/\/|www\.|https:\/\/www\.|http:\/\/|https:\/\/)/gm, '') + '</br>';
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