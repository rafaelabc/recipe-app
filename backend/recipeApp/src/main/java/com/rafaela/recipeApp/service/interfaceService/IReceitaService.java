package com.rafaela.recipeApp.service.interfaceService;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.rafaela.recipeApp.model.Receita;

public interface IReceitaService {
	ResponseEntity<Receita> create(Receita receita);
    List<Receita> findAll();
    ResponseEntity<Receita> edit(Long id, Receita receita);
    ResponseEntity<Receita> delete(Long id);
    ResponseEntity<Receita> getById(Long id);
}
