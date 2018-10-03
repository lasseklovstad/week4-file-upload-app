package com.mycompany.app;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;



@Controller

public class FileUploadController {

    



    @RequestMapping(value = "/upload",method=RequestMethod.GET)
    public String welcome(Model model) {

        return "upload";
    }
    @RequestMapping(value = "/display",method= RequestMethod.POST)
    public String display(Model model){

       
        return "display";
    }
}
