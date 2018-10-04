package com.mycompany.app;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.mycompany.app.StorageService;
import java.io.IOException;


@Controller

public class FileUploadController {

    private final StorageService storageService;
    private byte[]data;

    @Autowired
    public FileUploadController(StorageService storageService) {
        this.storageService = storageService;
    }


    @RequestMapping(value = "/upload",method=RequestMethod.GET)
    public String welcome(Model model) {

        return "upload";
    }
    @RequestMapping(value = "/display",method= RequestMethod.POST)
    public String display(@RequestParam("file") MultipartFile file,Model model){
	String fileName = file.getOriginalFilename();
	storageService.store(file);
	try{
		data=file.getBytes();
	}catch(IOException e){
		System.out.println("error");
	}

	model.addAttribute("name",fileName);
       	
        return "redirect:/display";
    }

    @RequestMapping(value = "/display",method= RequestMethod.GET)
    public String displayGet(){
	
	
       	
        return "display";
    }

	@RequestMapping(value = "/getfile",produces="application/pdf")
	@ResponseBody
	public byte[] getFileData()  {
	MultipartFile file = storageService.getFile();
	System.out.println(file.getOriginalFilename());
	System.out.println(file.getContentType());
	return data;
	
  	
	}

}
