package com.mycompany.app;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;


@Controller
public class TestController{
	@RequestMapping(value="/")
	public String home(){
		return "greetings.html";
	}
}