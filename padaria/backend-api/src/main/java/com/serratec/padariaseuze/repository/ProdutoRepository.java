package com.serratec.padariaseuze.repository;

import java.util.ArrayList;
import java.util.List;

import com.serratec.padariaseuze.model.Produto;

import org.springframework.stereotype.Repository;

@Repository
public class ProdutoRepository  {
    
    private ArrayList<Produto> produtos = new ArrayList<Produto>();
    private Long ultimoId = 0l;

    public List<Produto> obterTodos(){
        return this.produtos;
    }

    public Produto adicionar(Produto produto){
        this.ultimoId++;
        produto.setId(ultimoId);

        this.produtos.add(produto);
        return produto;
    }
}
