
function func01(){
	
	var el = document.getElementById('dv1');
	
	var node1 = el.childNodes;
	
	alert(node1.length);
	
	alert(node1[6].nodeValue);
	
	var el2 = document.createElement('p');	
	el2.style.backgroundColor = 'green';
	el2.innerHTML = '여기는 p 태그';
	document.getElementById('dv2').append(el2);
		
}

/*
	정규 표현식
	
		전방 탐색
			?= 	---> 긍정 전방탐색
			?=!	---> 부정 전방탐색
		후방 탐색
			?<=	---> 긍정 후방 탐색
			?<!	---> 부정 후방 탐색
		
*/