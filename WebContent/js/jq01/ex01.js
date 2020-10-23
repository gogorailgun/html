var data = [
	{
		name: '이지우',
		age: 26,
		tel: '010-1111-1111',
		mail: 'jiwoo@increpas.com',
		gen: '남자'
	},
	{
		name: '장성환',
		age: 27,
		tel: '010-2222-2222',
		mail: 'hwan@increpas.com',
		gen: '남자'
	},
	{
		name: '오혜찬',
		age: 28,
		tel: '010-3333-3333',
		mail: 'chan@increpas.com',
		gen: '남자'
	},
	{
		name: '유병욱',
		age: 29,
		tel: '010-4444-4444',
		mail: 'wook@increpas.com',
		gen: '남자'
	},
	{
		name: '윤요셉',
		age: 30,
		tel: '010-5555-5555',
		mail: 'joseph@increpas.com',
		gen: '남자'
	}
]

$(document).ready(function(){
	var elList = $('.txt16');
	for(var i = 0 ; i < 5; i++ ){
		elList.eq(i).children().eq(0).html(data[i].name);
		elList.eq(i).children().eq(1).html(data[i].age);
		elList.eq(i).children().eq(2).html(data[i].tel);
		elList.eq(i).children().eq(3).html(data[i].mail);
		elList.eq(i).children().eq(4).html(data[i].gen);
	}
	
	$('.w3-btn').click(function(){
		
		//alert($(this).html());
		var elem = $(this);
		var el1 = this;
		var txt2 = el1.innerHTML;
		var txt3 = $(elem).html();	
		
		alert($(elem).html());	
		
		// 데이터 읽고
		var el = $(this).parent();
		var sname = $(el).children().eq(0).text();
		var sage = $(el).children().eq(1).text();
		var stel = $(el).children().eq(2).text();
		var smail = $(el).children().eq(3).text();
		var sgen = $(el).children().eq(4).text();
		
		// 데이터 채우고
		$('#name').val(sname);
		$('#age').val(sage);
		$('#tel').val(stel);
		$('#mail').val(smail);
		$('#gen').val(sgen);
		
		// 폼 전송하고
		$('#frm').submit();
	});
});
