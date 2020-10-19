/*
var jiwoo = {
	name: '이지우',
	age: 26,
	score: [85,85, 95],
	gender: '남자',
	work: function(){
		return this.name + ' 씨가 열심히 공부합니다.';
	}
}
*/

var jiwoo = new Object();
jiwoo.name = '이지우';
jiwoo.age= 26,
jiwoo.score = [85,85, 95],
jiwoo.gender = '남자',
jiwoo.work = function(){
	return this.name + ' 씨가 열심히 공부합니다.';
}

var total = 0;
function getTotal(value){
	total += value;
}
jiwoo.score.forEach(getTotal);

jiwoo.total = total;
/*
document.write('<h2><center>');
document.write('이름 : ' + jiwoo.name + '<br>');
document.write('나이 : ' + jiwoo['age'] + '<br>');
document.write('성별 : ' + jiwoo.gender + '<br>');
document.write('점수 : ' + jiwoo.score + '<br>');
document.write('총점 : ' + total + '<br>');
document.write('</center></h2>');

document.write('<hr>');
jiwoo.name = '장성환';
document.write('<h2><center>');
document.write('이름 : ' + jiwoo.name + '<br>');
document.write('나이 : ' + jiwoo['age'] + '<br>');
document.write('성별 : ' + jiwoo.gender + '<br>');
document.write('점수 : ' + jiwoo.score + '<br>');
document.write('총점 : ' + total + '<br>');
document.write('</center></h2>');

*/

function func01(){
	alert(jiwoo.name);
	document.getElementById('name').innerHTML = jiwoo.name;
	document.getElementById('age').innerText = jiwoo['age'];
	document.getElementById('gen').textContent = jiwoo['gender'];
	document.getElementById('score').innerHTML = jiwoo.score;
	document.getElementById('total').innerHTML = jiwoo.total;
/*	document.getElementById('total').innerHTML = total;*/
	document.getElementById('work').innerHTML = jiwoo.work();
}
