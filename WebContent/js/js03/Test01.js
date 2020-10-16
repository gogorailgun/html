var color = [
	'w3-red', // 0
	'w3-pink', // 1
	'w3-purple', // 2
	'w3-deep-purple', // 3 
	'w3-indigo', //4
	'w3-blue', // 5
	'w3-aqua', // 6
	'w3-teal' // 7
];

var btntag = '';
for(var i = 0 ; i < color.length ; i++ ){
	let pd = 'rpd10';
	if(i + 1 % 4 == 0){
		pd = 'lpd10';
	}
	btntag += 	'<div class="w3-quarter ' + pd + '">' +
				'	<h4 class="w3-col w3-button w3-card-4 ' + color[i] + ' btn">'+ color[i].substring(3) +'</h4>' +
				'</div>';
}
document.getElementById('btnwin').innerHTML = btntag;

var taglist = document.getElementsByClassName('btn');

function rmvClr(){
	for(var i = 0 ; i < color.length ; i++ ){
		document.getElementById('dpwin').classList.remove(color[i]);		
	}
}

for(var i = 0 ; i < taglist.length ; i++ ){
	taglist[i].onclick = function(){
		rmvClr();
		var txt = 'w3-' + this.innerText;
		alert(txt);
		document.getElementById('dpwin').classList.add(txt);
		document.getElementById('dptxt').innerHTML = txt;
	}
}

var img = [
	'../img/planet/Mercurius.jpg',
	'../img/planet/Venus.jpg',
	'../img/planet/Earth.jpg',
	'../img/planet/Mars.jpg',
	'../img/planet/Jupiter.jpg',
	'../img/planet/Saturnus.jpg',
	'../img/planet/Uranus.jpg',
	'../img/planet/Neptune.jpg',
]

img[i].substring(img[i].length()-14, img[i].length()-4)
