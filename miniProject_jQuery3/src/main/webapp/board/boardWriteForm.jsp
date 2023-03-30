<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
#boardWriteForm div{
	font-size: 8pt;
	color: red;
	font-weight: bold;
}
</style>
</head>
<body>
<form id="boardWriteForm">
	<h3>글쓰기</h3>
	<table border="1" cellpadding="5" cellspacing="0">
		<tr>
			<th>제목</th>
			<td>
				<input type="text" name="subject" id="subject" size="50">
				<div id="subjectDiv"></div>
			</td>
		</tr>
		
		<tr>
			<th>내용</th>
			<td>
				<textarea name="content" id="content" cols="50" rows="15"></textarea>
				<div id="contentDiv"></div>
			</td>
		</tr>
		
		<tr>
			<td colspan="2" align="center">
				<input type="button" value="글쓰기" id="boardWriteBtn">
				<input type="reset" value="다시작성">
			</td>
		</tr>
	</table>
</form>

<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.4.min.js"></script>
<script type="text/javascript">
$(function(){
	$('#boardWriteBtn').click(function(){
		$('#subjectDiv').empty();
		$('#contentDiv').empty();
		
		if($('#subject').val() == ''){
			$('#subjectDiv').text('제목을 입력하세요');
			$('#subjectDiv').focus();
			
		}else if($('#content').val() == ''){
			$('#contentDiv').text('내용을 입력하세요');
			$('#content').focus();
			
		}else {
			$.ajax({
				type: 'post',
				url: '/board/boardWrite.do',
				data: $('#boardWriteForm').serialize(),
				      //'subject='+$('#subject').val()+'&content='+$('#content').val()
				      //{'subject': $('#subject').val(), 'content': $('#content').val()}
				success: function(){
					alert('글작성 완료!!');
					location.href='/board/boardList.do?pg=1';
				},
				error: function(err){
					console.log(err);
				}
			});
		}

	});
});
	
</script>



<script type="text/javascript">
function checkBoardWrite(){

	
	if(document.getElementById("subject").value == ""){
		document.getElementById("subjectDiv").innerText = "제목 입력";
		document.getElementById("subject").focus();
	
	}else if(document.getElementById("content").value == ""){
		document.getElementById("contentDiv").innerText = "내용 입력";
		document.getElementById("content").focus();
	
	}else
		document.boardWriteForm.submit();
}
</script>
</body>
</html>













