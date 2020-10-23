$(document).ready(function(){
	
	var sid = $('#frm [name="id"]').val();
	var spw = $('#frm [name="pw"]').val();
	
	$('#login').click(function(){
			
		$('#id').val(sid);
		$('#pw').val(spw);
		$('#frm').submit();
		$(location).attr('href', '../jq01/sample02.html?id=' + sid + '&pw='+ spw);
		//location.href = 'sample02.html?id=' + sid + '&pw='+ spw;
	});
})