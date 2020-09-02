package com.teste.cep.rest;

import com.teste.cep.Converter;
import com.teste.cep.dto.CepDTO;
import com.teste.cep.entity.Cep;
import com.teste.cep.service.CepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/teste")
public class TesteController {

    private CepService service;

    @Autowired
    public TesteController(CepService service) {
        this.service = service;
    }

    @GetMapping(path = "/cep/{cepId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public CepDTO getCep(@PathVariable("cepId") String cepId) {
        Cep resultado = service.findByCep(cepId);
        if(resultado == null) {
            Cep cep = service.getCep(cepId);
            Cep entity = service.save(cep);
            return Converter.CepEntityParaDTO(entity);
        }
        return Converter.CepEntityParaDTO(resultado);
    }
}
