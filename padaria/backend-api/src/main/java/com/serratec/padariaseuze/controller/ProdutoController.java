package com.serratec.padariaseuze.controller;

import java.util.List;

import com.serratec.padariaseuze.model.Produto;
import com.serratec.padariaseuze.service.ProdutoService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/produtos")
public class ProdutoController {
    
    @Autowired
    ProdutoService servicoProduto;

    @GetMapping
    public List<Produto> obterTodos(){
        return servicoProduto.obterTodos();
    }

    @PostMapping
    public ResponseEntity<Produto> adicionar(@RequestBody Produto produto){
        var novoProduto = servicoProduto.adicionar(produto);
        return new ResponseEntity<>(novoProduto, HttpStatus.CREATED);
    }
    
}

