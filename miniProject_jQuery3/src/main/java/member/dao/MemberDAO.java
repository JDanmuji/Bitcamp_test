package member.dao;

import java.io.IOException;
import java.io.Reader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.HashMap;
import java.util.Map;

import javax.naming.Context;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import member.bean.MemberDTO;

public class MemberDAO {
	private static MemberDAO memberDAO = new MemberDAO();
	private SqlSessionFactory sqlSessionFactory;
	
		
	public static MemberDAO getInstance() {
		return memberDAO;
	}

	public MemberDAO() {
		try {
			Reader reader = Resources.getResourceAsReader("mybatis-config.xml");
			sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public MemberDTO memberLogin(Map map) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		MemberDTO memberDTO = sqlSession.selectOne("memberSQL.memberLogin", map);
		sqlSession.close();
		return memberDTO;
	}
	
	public int memberWrite(MemberDTO memberDTO) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		int su = sqlSession.insert("memberSQL.memberWrite", memberDTO);
		sqlSession.commit();
		sqlSession.close();
		return su;
	}
	
	public boolean isExistId(String id) {
		boolean existId = false;
		SqlSession sqlSession = sqlSessionFactory.openSession();
		MemberDTO memberDTO = sqlSession.selectOne("memberSQL.isExistId", id);
		if(memberDTO != null) existId = true;
		sqlSession.close();
		return existId;
	}
	
	public MemberDTO getMember(String id) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		MemberDTO memberDTO = sqlSession.selectOne("memberSQL.getMember", id);
		sqlSession.close();
		return memberDTO;
	}
	
	public void memberUpdate(MemberDTO memberDTO) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		sqlSession.update("memberSQL.memberUpdate", memberDTO);
		sqlSession.commit();
		sqlSession.close();
	}
	
	public boolean isExistPwd(String id, String pwd){
		SqlSession sqlSession = sqlSessionFactory.openSession();
		boolean exist = false;
		
		Map<String, String> map = new HashMap<String, String>();
		map.put("id", id);
		map.put("pwd", pwd);
		MemberDTO memberDTO = sqlSession.selectOne("memberSQL.isExistPwd", map);
		
		if(memberDTO != null) exist = true;
		
		sqlSession.close();
		return exist;
	}
	
	public void memberDelete(String id) {
		SqlSession sqlSession = sqlSessionFactory.openSession();
		sqlSession.delete("memberSQL.memberDelete", id);
		sqlSession.commit();
		sqlSession.close();
	}
}



















