package com.mycompany.app;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;



@Controller

public class FileUploadController {

    



    @RequestMapping(value = "/upload",method=RequestMethod.GET)
    public String welcome(Model model) {

        return "upload";
    }
    @RequestMapping(value = "/display",method= RequestMethod.POST)
    public String display(@RequestParam("file") MultipartFile file){
	
       System.out.println(file.getOriginalFilename());
        return "display";
    }
}
