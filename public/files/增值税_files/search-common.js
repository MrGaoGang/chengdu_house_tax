$(document).ready(function() {
	$('#searchbtn').on('click', function() {
		if($('#sw').val().trim() == '') showMsg('请输入检索内容');
		else $('#search-form').submit();
	});
});