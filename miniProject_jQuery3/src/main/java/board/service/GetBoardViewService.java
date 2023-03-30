package board.service;

import java.text.SimpleDateFormat;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

import com.control.CommandProcess;

import board.bean.BoardDTO;
import board.bean.BoardPaging;
import board.dao.BoardDAO;

public class GetBoardViewService implements CommandProcess {

	@Override
	public String requestPro(HttpServletRequest request, HttpServletResponse response) {
		//데이터
		int seq = Integer.parseInt(request.getParameter("seq"));
		int pg = Integer.parseInt(request.getParameter("pg"));
		
		BoardDAO boardDAO = BoardDAO.getInstance();
		
		BoardDTO boardDTO = boardDAO.getBoard(seq);
	
		System.out.println(boardDTO);
		System.out.println(seq);
		System.out.println(pg);
		
		//List객체를 json으로 변환시켜서 보내야 한다.
		JSONObject json = new JSONObject();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy.MM.dd");
		
		System.out.println(boardDTO.getSeq());
		JSONObject temp = new JSONObject();
		temp.put("seq", boardDTO.getSeq());
		temp.put("id", boardDTO.getId());
		temp.put("name", boardDTO.getName());
		temp.put("email", boardDTO.getEmail());
        temp.put("subject", boardDTO.getSubject());
        temp.put("content", boardDTO.getContent());
        temp.put("ref", boardDTO.getRef());
        temp.put("lev", boardDTO.getLev());
        temp.put("step", boardDTO.getStep());
        temp.put("pseq", boardDTO.getPseq());
        temp.put("reply", boardDTO.getReply());
        temp.put("hit", boardDTO.getHit());
        temp.put("logtime", sdf.format(boardDTO.getLogtime())); //Date -> String으로 변환
        
			
		json.put("boardDTO", temp);
		
		request.setAttribute("json", json);
		return "/board/getBoard.jsp";
	}

}










