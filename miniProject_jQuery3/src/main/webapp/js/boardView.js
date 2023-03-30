
$(document).ready(function(){

	$.ajax({
		type: 'post',
		url: '/board/getBoard.do',
		data: {
			'pg' :  $('#pg').val(),
			'seq' :  $('#seq').val()
		},
		dataType : 'json', 
		success: function(data){
			
			
			$('td.subject').text(data.boardDTO.subject);
			$('td.seq').text('글번호 : ' + data.boardDTO.seq);
			$('td.name').text('작성자 : ' + data.boardDTO.name);
			$('td.hit').text('조회수 : ' + data.boardDTO.hit);
			$('td  div').html('<pre>' + data.boardDTO.content +'</pre>');
			
			
		},
		error: function(err){
			console.log(err);
		}		                          
	});
});












