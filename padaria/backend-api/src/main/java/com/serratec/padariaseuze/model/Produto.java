package com.serratec.padariaseuze.model;

public class Produto {
    
    private Long id;
    private String nome;
    private Integer quantidade;
    private Double valor;
    private String urlImagem;
    
    //#region construtores
    public Produto() {}

    public Produto(Long id, String nome, Integer quantidade, Double valor, String urlImagem) {
        this.id = id;
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
        this.urlImagem = urlImagem;
    }   

    //#endregion
    public Produto(String nome, Integer quantidade, Double valor, String urlImagem) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
        this.urlImagem = urlImagem;
    }

    //#region getter e Setter
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(Integer quantidade) {
        this.quantidade = quantidade;
    }

    public Double getValor() {
        return valor;
    }

    public void setValor(Double valor) {
        this.valor = valor;
    }

    public String getUrlImagem() {
        return urlImagem;
    }

    public void setUrlImagem(String urlImagem) {
        this.urlImagem = urlImagem;
    }
    //#endregion
    
}
