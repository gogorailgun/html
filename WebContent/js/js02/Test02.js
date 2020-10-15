// 칼라 클래스 변수
var color = [
	'w3-red', 'w3-pink', 'w3-purple', 'w3-deep-purple',
	'w3-indigo', 'w3-blue', 'w3-aqua', 'w3-teal'
];
document.write('<div class="w3-content w3-padding w3-center" style="max-width:800px;">');
document.write('		<h1 class="w3-deep-orange w3-padding">구 구 단</h1>');
document.write('		<div class="w3-col">');
for(var k=0; k < 8; k++){

document.write('			<div class="w3-quarter w3-col">');
document.write('				<div class="w3-col w3-padding '+ color[k]+' w3-border txt">' + (k+2) + ' 단</div>');
document.write('				<div class="w3-col w3-padding">');
for(var i= 0; i < 9 ; i++){
	document.write('				<div class="w3-col"> ' + (k+2) + ' x ' + (i+1)+ ' = ' + ((k+2) * (i+1)) + '</div>')
}
/*
document.write('					<div class="w3-col">2 x 1 = 2</div>');
document.write('					<div class="w3-col">2 x 2 = 4</div>');
document.write('					<div class="w3-col">2 x 3 = 6</div>');
document.write('					<div class="w3-col">2 x 4 = 8</div>');
document.write('					<div class="w3-col">2 x 5 = 10</div>');
document.write('					<div class="w3-col">2 x 6 = 12</div>');
document.write('					<div class="w3-col">2 x 7 = 14</div>');
document.write('					<div class="w3-col">2 x 8 = 16</div>');
document.write('					<div class="w3-col">2 x 9 = 18</div>');
*/
document.write('				</div>');
document.write('			</div>');
}
document.write('		</div>');
document.write('	</div>');