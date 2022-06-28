package com.example.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.example.backend.model.Book;
import com.example.backend.repository.BookRepository;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}
	
	@Autowired
	private BookRepository bookRepository;
	
	@Override
	public void run(String... args) throws Exception {
//	Book book = new Book();
//	book.setTitle("Harry Potter and the sorcerer's stone");
//	book.setSummary("Lorem ipsum");
//	book.setCategory("Fantasy");
//	bookRepository.save(book);
//	
//	Book book1 = new Book();
//	book1.setTitle("Harry Potter and the chamber of secrets");
//	book1.setSummary("Lorem ipsum");
//	book1.setCategory("Fantasy");
//	bookRepository.save(book1);
	}

}
