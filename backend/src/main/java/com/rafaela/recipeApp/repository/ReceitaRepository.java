package com.rafaela.recipeApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rafaela.recipeApp.model.Receita;

public interface ReceitaRepository extends JpaRepository <Receita, Long> {

}