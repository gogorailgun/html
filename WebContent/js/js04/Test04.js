var kdata = ['서울', '대구', '대전', '부산'];

function printArr(item, index){ // 매개변수 두개를 입력하는 경우
	document.write('배열데이터 [' + index + '] : ' + item + '<br>');
}

/*
function printArr(index, item){
	document.write('배열데이터 [' + index + '] : ' + item + '<br>');
}
*/

function printArr2(value){ // 매개변수 하나만 입력하는 경우
	document.write('배열데이터 : ' + value + '<br>');
}

printArr('서울', 0);
printArr2('서울');
document.write('<hr>');
kdata.forEach(printArr);
/*----------------------------------------------------------------------------*/
/* kdata 배열의 데이터를 /를 구분자로 문자열로 연결해서 출력하는데..
	forEach() 를 사용해서 문자열을 하나씩 결합해서 처리하세요.
*/

// 문자열 전역변수를 만든다.
var sdata = '';

// 문자열 누적함수를 만든다.
function calcStr(item, index){
	if(index == 0){
		sdata += item;
	} else {
		sdata += '/' + item;
	}
}

kdata.forEach(calcStr);

document.write(sdata);

document.write('<hr>');

var data = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10];

function mapArr(value){
	return value * value;
}

var mapdata = data.map(mapArr);

document.write('원래 배열 : ' + data + '<br>');
document.write('map 함수 적용 배열 : ' + mapdata + '<br>');

document.write('<hr>');
/* filter() : 배열의 데이터중 조건이 참인 데이터만 반환하여 새로운 배열을 만들어 준다.*/
var data = [21, 42, 33, 14, 25, 12, 37, 28, 16, 11];

function filterArr(value){
	return value >= 20;
}

var newData = data.filter(filterArr);

document.write('data[] : ' + data + '<br>');
document.write('newData[] : ' + newData + '<br>');


document.write('<hr>');

var data = [1, 1, 1, 1, 1];

var idx = data.indexOf(1, 3);

document.write('data[] : ' + data + '<br>');
document.write('data.indexOf(1) : ' + idx + '<br>');

var lidx = data.lastIndexOf(1);
document.write('data.lastIndexOf(1) : ' + lidx + '<br>');
lidx = data.lastIndexOf(1, -2);
document.write('data.lastIndexOf(1, -2) : ' + lidx + '<br>');

/* ### 연관 배열 ### */

var smap = {'일번':'윤요셉', '이번': '유병욱', '삼번': '오혜찬', '사번': '이지우', '오번': '장성환'};

document.write('일번 : ' + smap['일번'] + '<br>');
document.write('이번 : ' + smap.이번 + '<br>');
document.write('사번 : ' + smap['사번'] + '<br>');

var mArr = {'score': [85, 85, 98], 'no': 1000, 'name': 'jiwoo'};

document.write('번호 : ' + mArr['no'] + '<br>');
document.write('이름 : ' + mArr.name + '<br>');
document.write('성적 : ' + mArr.score + '<br>');
var total = 0;

function getTotal(score){
	total += score;
}

mArr.score.forEach(getTotal);
document.write('총점 : ' + total + '<br>');



















