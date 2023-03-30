<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
form[name="loginForm"] div {
	color: red;
	font-size: 8pt;
	font-weight: bold;
}

form[name="loginForm"] {
   display: flex;
   flex-direction: column;
   align-items: center;
   margin: 0 auto;
   text-align: left;
}

</style>
</head>
<body>
<form name="loginForm" id="loginForm">
	<a href="../index.jsp" style="text-decoration: none;">
		<h1>로그인</h1>
	</a>
	<table border="1" cellpadding="5" cellspacing="0">
		<tr>
			<th width="100">아이디</th>
			<td>
				<input type="text" name="id" id="id">
				<div id="idDiv"></div>
			</td>
		</tr>
		<tr>
			<th>비밀번호</th>
			<td>
				<input type="password" name="pwd" id="pwd" >
				<div id="pwdDiv"></div>
			</td>
		</tr>
		<tr>
			<th colspan="2" align="center">
				<input type="button" value="로그인" id="loginBtn">
    			<input type="button" value="회원가입" 
    			onclick="location.href='/member/writeForm.do'">
			</th>
		</tr>
	</table>
	<br><br>
	
	<div id="loginResult"></div>
	
</form>

<script type="text/javascript" src="../js/jquery-3.6.4.min.js"></script>
<script type="text/javascript">
$('#loginBtn').click(function(){
	$('#idDiv').empty();
	$('#pwdDiv').empty();
	
	if( $('#id').val() == '' ){
		$('#idDiv').text('아이디 입력');
		$('#id').focus();
	
	}else if($('#pwd').val() == ''){
		$('#pwdDiv').text('비밀번호 입력');
		$('#pwd').focus();
	
	}else{
		$.ajax({
			type: 'post', //'get' or 'post'
			url: '/member/login.do',
			data: 'id='+$('#id').val()+'&pwd='+$('#pwd').val(), //서버로 보낼 데이터(id, pwd)
			dataType: 'text', //서버로부터 받는 자료형, text, xml, html, json
			success: function(data){
				data = data.trim();
				
				if(data == 'ok'){
					location.href = '../index.jsp';
				}else if(data == 'fail'){
					$('#loginResult').text('아이디 또는 비밀번호가 맞지 않습니다');
					$('#loginResult').css('font-size', '12pt');
				}
			},	
			error: function(err){
				console.log(err);
			}
		});
	}
});
</script>

</body>
</html>



















