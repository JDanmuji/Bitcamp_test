<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

  
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
pre{
white-space: pre-line;
word-break:break-all;
}

</style>
</head>
<body>
<input type="hidden" id ="seq" value="${param.seq }">
<input type="hidden" id ="pg" value="${param.pg }"> 
<%-- <%if(boardDTO != null){ %> --%>
<form name ="boardView">
<h3 style= color:#BE6DB7;>글 상세보기</h3>
<table id="boardView" style=background-color:#FFFAFA; border ="1" cellpadding = "5" cellspacing="0" frame="hsides" rules="rows" >
   <tr>
      <td class="subject" id="subject" colspan="3">
      </td>
   </tr>
   <tr>
      <td width="200" align="center" class="seq"></td>
      <td width="200" align="center" class="name"></td>
      <td width="200" align="center" class="hit"></td>
   </tr>
   <tr>
      <td colspan="3" height="250" valign="top">
         <div style="width: 100%; height:100%; overflow:auto;">
         </div>
      </td>
   </tr>
   <tr>
      <td colspan="2"  align = "left">
         <input type="button" value ="목록" onclick="location.href='/board/boardList.do?pg=1'">         
   </tr>
</table>
</form>
<script type="text/javascript" src="http://code.jquery.com/jquery-3.6.4.min.js"></script>
<script type="text/javascript" src="../js/boardView.js"></script>


</body>
</html>