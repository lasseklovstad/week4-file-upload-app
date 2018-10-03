package com.mycompany.app;

import org.springframework.core.io.Resource;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.stereotype.Service;

import java.nio.file.Path;
import java.util.stream.Stream;

@Service
public class StorageService {

	MultipartFile file;

    void init(){

    }

    void store(MultipartFile file){
    	this.file = file;
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