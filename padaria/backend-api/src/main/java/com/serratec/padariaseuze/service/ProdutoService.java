package com.serratec.padariaseuze.service;

import java.util.List;

import com.serratec.padariaseuze.model.Produto;
import com.serratec.padariaseuze.repository.ProdutoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProdutoService {
    
    @Autowired
    ProdutoRepository repositorioProduto;

    public List<Produto> obterTodos(){
        return this.repositorioProduto.obterTodos();
    }

    public Produto adicionar(Produto produto){
        return this.repositorioProduto.adicionar(produto);
    }
}
