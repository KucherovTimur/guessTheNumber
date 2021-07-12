let N;
let result;
let counter = 0;
let Tips = document.querySelector('#Tips');
let New = document.querySelector('.new');
let Start = document.querySelector('.start');
let MinNum = 1, MaxNum = 15;
let Easy = document.querySelector('.Easy');
let Medium = document.querySelector('.Medium');
let Hard = document.querySelector('.Hard');
let UserInput = document.querySelector('input');

	UserInput.select();

function NewGame(min,max){
	UserInput.select();
	counter = 0;
	document.querySelector("p").innerHTML = "Количество попыток: " + counter;
	result = '';
	document.querySelector("h1").innerHTML = "Результат: " + result;
	Tips.innerHTML = '';
	UserInput.value = '';
	N = getRandomInt(min,max);
	console.log(N);
	Start.disabled = false;
}

function getRandomInt(min,max){
	return Math.floor(Math.random()*(max-min + 1)) + min;
}

NewGame(MinNum,MaxNum);

document.querySelector('.start').onclick = function(){
	UserInput.select();
	let Inp = UserInput.value;
	counter = counter + 1;
	if (Inp==N) {
		Tips.innerHTML = 'Поздравляю';
		result = "Yes";
		document.querySelector("h1").innerHTML = "Результат: " + result;
		Start.disabled = true;	
	} else {
		result = "No";
		document.querySelector("h1").innerHTML = "Результат: " + result;
		if (Math.abs(Inp - N)==1) {
			Tips.innerHTML = 'Вы близко';
		} else {
			Tips.innerHTML = 'Холодно';
		}
		document.querySelector("p").innerHTML = "Количество попыток: " + counter;
		if (counter==10) {
			document.querySelector('h1').innerHTML = 'You lose';
			Start.disabled = true;
		}
	}
}
document.querySelector('.clear').onclick = function(){
	UserInput.select();
	UserInput.value = '';
}

New.onclick = function(){
	NewGame(MinNum,MaxNum);
}
Easy.onclick = function(){
	MinNum = 1;
	MaxNum = 15;
	NewGame(MinNum,MaxNum);
}
Medium.onclick = function(){
	MinNum = 1;
	MaxNum = 50;
	NewGame(MinNum,MaxNum);
}
Hard.onclick = function(){
	MinNum = 1;
	MaxNum = 100;
	NewGame(MinNum,MaxNum);
}