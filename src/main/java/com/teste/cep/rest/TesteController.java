package com.teste.cep.rest;

import com.teste.cep.Converter;
import com.teste.cep.client.CepClient;
import com.teste.cep.dto.CepDTO;
import com.teste.cep.entity.Cep;
import com.teste.cep.repository.CepRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/teste")
public class TesteController {

    private CepClient cepClient;
    private CepRepository cepRepository;

    @Autowired
    public TesteController(CepClient cepClient, CepRepository cepRepository) {
        this.cepClient = cepClient;
        this.cepRepository = cepRepository;
    }

    @GetMapping(path = "/cep/{cepId}", produces = MediaType.APPLICATION_JSON_VALUE)
    public CepDTO getCep(@PathVariable("cepId") String cepId) {
        Cep resultado = cepRepository.findByCep(cepId);
        if(resultado == null) {
            Cep cep = cepClient.getCep(cepId);
            Cep entity = cepRepository.save(cep);
            return Converter.CepEntityParaDTO(entity);
        }
        return Converter.CepEntityParaDTO(resultado);
    }
}
