//alert('location.href : \n\n' + decodeURIComponent(location.href));
var data = decodeURIComponent(location.search);
//alert(data);
data = data.substring(1);
//alert(data);
var arr = data.split('&');
//alert(arr);

var paradata = {};

for(var i = 0 ; i < arr.length; i++ ){
	let key = arr[i].substring(0, arr[i].indexOf('='));
	let val = arr[i].substring(arr[i].indexOf('=') + 1);
	paradata[key] = val;
}


alert(paradata.gen);
//data = data.substring(1);
//alert(decodeURIComponent(data));

function func01(){

	 var str = '<div class="w3-content w3-center mw650">' + 
				'	<h1 class="w3-indigo w3-padding">여기는 sample.html 파일</h1>' + 
				'	<div class="w3-col w3-padding w3-card-4 w3-margin-top">' + 
				'		<div class="w3-col l12 m6 s4"><h4 class="w3-text-gray">이름 : <span id="tname"></span></h4></div>' + 
				'		<div class="w3-col l12 m6 s4"><h4 class="w3-text-gray">나이 : <span id="tage"></span></h4></div>' + 
				'		<div class="w3-col l12 m6 s4"><h4 class="w3-text-gray">전화 : <span id="ttel" class="w3-text-red"></span></h4></div>' + 
				'		<div class="w3-col l12 m6 s4"><h4 class="w3-text-gray">메일 : <span id="tmail"></span></h4></div>' + 
				'		<div class="w3-col l12 m6 s4"><h4 class="w3-text-gray">성별 : <span id="tgen"></span></h4></div>' + 
				'	</div>' +
				'</div>';
	document.getElementById('bd').innerHTML = str;
	
	setData();
}

function setData(){
	document.getElementById('tname').innerHTML = paradata.name;
	document.getElementById('tage').innerHTML = paradata.age;
	document.getElementById('ttel').innerHTML = paradata.tel;
	document.getElementById('tmail').innerHTML = paradata.mail;
	document.getElementById('tgen').innerHTML = paradata.gen;
}