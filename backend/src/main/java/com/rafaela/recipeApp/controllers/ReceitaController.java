package com.rafaela.recipeApp.controllers;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.rafaela.recipeApp.model.Receita;
import com.rafaela.recipeApp.service.interfaceService.IReceitaService;

@RestController
@RequestMapping("/receitas")
public class ReceitaController {
	 private final IReceitaService receitaService;


	    public ReceitaController(IReceitaService receitaService) {
	        this.receitaService = receitaService;
	    }

	    @PostMapping
	    public ResponseEntity<Receita> create(@RequestBody Receita receita){
	        return receitaService.create(receita);
	    }

	    @GetMapping
	    public List<Receita> findAll(){
	        return receitaService.findAll();
	    }
	    @GetMapping(path ={"/{id}"})
	    public ResponseEntity<Receita> getById(@PathVariable Long id){
	        return receitaService.getById(id);
	    }
	    @DeleteMapping(path = {"/{id}"})
	    public ResponseEntity<Receita> delete(@PathVariable Long id){
	        return receitaService.delete(id);
	    }

	    @PutMapping(path = {"/{id}"})
	    public ResponseEntity<Receita> edit(@PathVariable("id") Long id, @RequestBody Receita receita){
	        return receitaService.edit(id, receita);
	    }
}
