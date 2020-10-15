var arr = [
	'w3-red', 'w3-pink', 'w3-purple', 'w3-deep-purple', 
	'w3-indigo', 'w3-blue', 'w3-aqua', 'w3-teal'
];

document.write('<div class="w3-content w3-padding w3-center" style="max-width: 800px;">');
document.write('<h1 class="w3-padding w3-deep-orange w3-card-4">구구단</h1>');
document.write('<div class="w3-panel w3-margin-top">')
for(var dan = 2 ; dan < 10 ; dan++ ){
	document.write('<div class="w3-col w3-container w3-margin w3-padding wd1 w3-border w3-card-4">');
	document.write('<div class="' + arr[dan - 2] +' ttl">' + dan + ' 단</div><hr>');
	for(var gop = 1 ; gop < 10 ; gop++){
		document.write('<div class="txt">' + dan + ' x ' + gop + ' = ' + (dan*gop) + '</div>');
	}
	document.write('</div>');
}
document.write('</div>');
document.write('</div>');