package com.mycompany.app;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
/**
 * Hello world!
 *
 */
@SpringBootApplication
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello Spring Boot!" );
        SpringApplication.run(App.class, args);
    }
}

