function func01(){
	// 할일
	// 데이터를 읽는다.
	var sname = document.getElementById('tname').innerHTML;
	var sage = document.getElementById('tage').innerHTML;
	var stel = document.getElementById('ttel').innerText;
	var smail = document.getElementById('tmail').innerHTML;
	var sgen = document.getElementById('tgen').value;
	
	document.getElementById('btn1').onclick = function(){
		location.href = 'sample.html?name=' + sname + '&age=' + sage + 
						'&tel=' + stel + '&mail=' + smail + '&gen=' + sgen;
	}
	document.getElementById('btn2').onclick = function(){
		// 읽은 데이터 입력태그에 채워주고
/*		document.frm.name.value = sname;*/
		document.getElementById('name').value = sname;
		document.getElementById('age').value = sage;
		document.getElementById('tel').value = stel;
		document.getElementById('mail').value = smail;
		document.getElementById('gen').value = sgen;
		
		// 입력태그의 내용이 모두 채워지면 폼을 전송한다.
		document.getElementById('frm').submit();
	}
}