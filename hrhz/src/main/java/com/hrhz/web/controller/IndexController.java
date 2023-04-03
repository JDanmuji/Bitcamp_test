package com.hrhz.web.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.Controller;

//front controller
public class IndexController implements Controller {

	public ModelAndView handleRequest(HttpServletRequest request, HttpServletResponse response) throws Exception {
		
		
		System.out.println("hello");
		ModelAndView mv = new ModelAndView("index");
		mv.addObject("data", "Hello MVC");
		//mv.setViewName("/WEB-INF/view/index.jsp");
		return mv;
	}

}
