package com.rafaela.recipeApp.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Receita implements Serializable {
	
	private static final long serialVersionUID = -7554611318998590325L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	
	@Column
	private String titulo;
	@Column
	private String categoria;
	@Column
	private String tipoRefeicao;
	@Column
	private Integer qtdPessoasServidas;
	@Column
	private String nivelDificuldade;
	@Column
	private String linkVideo;
	@Column
	private String enderecoImg;
	@Column
	private String instrucoes;
	@Column
	private String ingredientes;
	
	
	public Receita() {}

	
	public Receita(Long id, String titulo, String categoria, String tipoRefeicao, Integer qtdPessoasServidas,
			String nivelDificuldade, String linkVideo, String enderecoImg, String instrucoes, String ingredientes) {
		super();
		this.id = id;
		this.titulo = titulo;
		this.categoria = categoria;
		this.tipoRefeicao = tipoRefeicao;
		this.qtdPessoasServidas = qtdPessoasServidas;
		this.nivelDificuldade = nivelDificuldade;
		this.linkVideo = linkVideo;
		this.enderecoImg = enderecoImg;
		this.instrucoes = instrucoes;
		this.ingredientes = ingredientes;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getTitulo() {
		return titulo;
	}


	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}


	public String getCategoria() {
		return categoria;
	}


	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}


	public String getTipoRefeicao() {
		return tipoRefeicao;
	}


	public void setTipoRefeicao(String tipoRefeicao) {
		this.tipoRefeicao = tipoRefeicao;
	}


	public Integer getQtdPessoasServidas() {
		return qtdPessoasServidas;
	}


	public void setQtdPessoasServidas(Integer qtdPessoasServidas) {
		this.qtdPessoasServidas = qtdPessoasServidas;
	}


	public String getNivelDificuldade() {
		return nivelDificuldade;
	}


	public void setNivelDificuldade(String nivelDificuldade) {
		this.nivelDificuldade = nivelDificuldade;
	}


	public String getLinkVideo() {
		return linkVideo;
	}


	public void setLinkVideo(String linkVideo) {
		this.linkVideo = linkVideo;
	}


	public String getEnderecoImg() {
		return enderecoImg;
	}


	public void setEnderecoImg(String enderecoImg) {
		this.enderecoImg = enderecoImg;
	}


	public String getInstrucoes() {
		return instrucoes;
	}


	public void setInstrucoes(String instrucoes) {
		this.instrucoes = instrucoes;
	}


	public String getIngredientes() {
		return ingredientes;
	}


	public void setIngredientes(String ingredientes) {
		this.ingredientes = ingredientes;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}



	
	
	

}
