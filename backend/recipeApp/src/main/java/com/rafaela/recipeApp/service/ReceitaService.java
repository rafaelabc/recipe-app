package com.rafaela.recipeApp.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.rafaela.recipeApp.model.Receita;
import com.rafaela.recipeApp.repository.ReceitaRepository;
import com.rafaela.recipeApp.service.interfaceService.IReceitaService;

@Service
public class ReceitaService implements IReceitaService{

	private final ReceitaRepository receitaRepository;
	public ReceitaService(ReceitaRepository receitaRepository) {
        this.receitaRepository = receitaRepository;
    }
	
	@Override
	public ResponseEntity<Receita> create(Receita receita) {
        return new ResponseEntity<Receita>(receitaRepository.save(receita), HttpStatus.OK);

	}

	@Override
	public List<Receita> findAll() {
		return receitaRepository.findAll();
	}

	@Override
	public ResponseEntity<Receita> edit(Long id, Receita receita) {
		 return receitaRepository.findById(id).map(record ->{

	            record.setTitulo(receita.getTitulo());
	            record.setCategoria(receita.getCategoria());
	            record.setTipoRefeicao(receita.getTipoRefeicao());
				record.setQtdPessoasServidas(receita.getQtdPessoasServidas());
				record.setNivelDificuldade(receita.getNivelDificuldade());
				record.setLinkVideo(receita.getLinkVideo());
				record.setEnderecoImg(receita.getEnderecoImg());
				record.setInstrucoes(receita.getInstrucoes());
				record.setIngredientes(receita.getIngredientes());

				Receita receitaUpdated = receitaRepository.save(record);
	            return new ResponseEntity<Receita>(receitaUpdated, HttpStatus.OK);
	        }).orElse(ResponseEntity.notFound().build());
	}

	@Override
	public ResponseEntity<Receita> delete(Long id) {
		return receitaRepository.findById(id).map(record -> {
			receitaRepository.deleteById(id);
            return new ResponseEntity<Receita>(record, HttpStatus.OK);
        }).orElse(ResponseEntity.notFound().build());
	}

	@Override
	public ResponseEntity<Receita> getById(Long id) {
        return receitaRepository.findById(id).map(record -> ResponseEntity.ok().body(record)).orElse(ResponseEntity.notFound().build());

	}

}
