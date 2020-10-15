document.getElementById('reset').onclick = function(){
	document.getElementById('id').value = '';
	document.getElementById('pw').value = '';
	document.getElementById('name').value = '';
	document.getElementById('sid').innerHTML = '';
	document.getElementById('spw').innerHTML = '';
	document.getElementById('sname').innerHTML = '';
	
	document.getElementById('show').classList.add('w3-hide');
};

document.getElementById('read').onclick = function(){
	var sid = document.getElementById('id').value;
	var spw = document.getElementById('pw').value;
	var sname = document.getElementById('name').value;
	
	document.getElementById('sid').innerHTML = sid;
	document.getElementById('spw').innerHTML = spw;
	document.getElementById('sname').innerHTML = sname;
	
	document.getElementById('show').classList.remove('w3-hide');
};

document.getElementById('test').onkeyup = function(){
	var el = this;
	var txt = document.getElementById('test').value;
	alert(txt);
	alert('입력내용 : ' + el.value);
};

var list = document.getElementsByClassName('btn');

for(var i = 0 ; i < list.length ; i++ ){
	list[i].onclick = function(){
		var txt = this.innerText;
		//alert(txt);
		var tid = this.getAttribute('class');
		alert(tid);
	}
}