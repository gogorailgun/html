var arr = new Array();

for(var i = 0 ; i < 100 ; i++ ){
	arr[i] = i + 1;
}

// 배열 출력
for(var i = 0 ; i < 100 ; i++ ){
	document.write(arr[i] + ', ');
}

document.write('<hr>');
document.write('<br><br>');
// 홀수번째 데이터 수정
for(var i = 0 ; i < 100 ; i++ ){
	if(i % 2 != 0){
		continue;
	}
	arr[i] = 0;
}

// 배열 출력
for(var i = 0 ; i < 100 ; i++ ){
	var sep = ', ';
	if((i + 1) % 10 == 0){
		sep = '<br>';
	}
	document.write(arr[i] + sep);
}

document.write('<hr>');

var arr = ['이지우', '장성환', '오혜찬'];

var str = arr.join();
var str2 = arr.join('/');

document.write('str : ' + str);
document.write('<br>');
document.write('str2 : ' + str2);
document.write('<hr>');

var stud = ['윤요셉', '유병욱'];

arr = arr.concat(stud);

document.write('concat : ' + arr.join('-'));
document.write('<br>');
document.write('concat : ' + arr.concat('박진우', '김영선').join('-'));

document.write('<hr>');
document.write('##### 배열 정렬 하기 #####');
document.write('<br>');
arr= arr.concat('박진우', '김영선');
arr.sort();

document.write('sort:' + arr);
document.write('<br>')
document.write('concat : ' + arr.join('-'));






