package com.mycompany.app;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.stereotype.Service;

import java.nio.file.Path;
import java.util.stream.Stream;
import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.io.IOException;

@Service
public class StorageService {

	MultipartFile file;

    void init(){

    }

    void store(MultipartFile file){
    	this.file = file;
    }


    String getText(){
    	try{
    		return new String(file.getBytes());
    	}
    	catch(IOException e){
    		return "Didn't work boss";
    	}

    }

    String getMetaData(){
    	String retVar = "";
    	if(file.getContentType().contains("image")){
    		try{
    			BufferedImage image = ImageIO.read(file.getInputStream());
    			Integer width = image.getWidth();
				Integer height = image.getHeight();
    			retVar = "Filename: "+file.getOriginalFilename()+"<br>File type: "+file.getContentType()+"<br>Size: "+file.getSize()+" bytes<br>Image width: "+width+"<br>Image height: "+height;
    		}
    		catch(IOException e){
    			retVar = "Something went wrong boss";
    		}
    	}
    	else{
    		retVar = "Filename: "+file.getOriginalFilename()+"<br>"+"File type: "+file.getContentType()+"<br>"+"Size: "+file.getSize()+" bytes";
    	}
    	return retVar;
    }



/*
    Stream<Path> loadAll(){

    }

    Path load(String filename){

    }
*/
    //Resource loadAsResource(String filename);

    //void deleteAll();

}