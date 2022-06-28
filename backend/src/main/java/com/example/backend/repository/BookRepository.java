package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.model.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
	// all crud database methods
}
