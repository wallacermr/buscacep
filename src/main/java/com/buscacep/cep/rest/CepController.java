package com.buscacep.cep.rest;

import com.buscacep.cep.dto.CepDTO;
import com.buscacep.cep.entity.Cep;
import com.buscacep.cep.enums.UnidadeFederativa;
import com.buscacep.cep.service.CepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "cepApi")
public class CepController {

    private final CepService service;

    @Autowired
    public CepController(CepService service) {
        this.service = service;
    }

    @GetMapping(path = "cep/{cep}", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<CepDTO> getCep(@PathVariable("cep") String cep) {
        CepDTO resultado = service.getCep(cep);
        return ResponseEntity.ok(resultado);
    }

    @GetMapping(path = "uf", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UnidadeFederativa[]> getUfList() {
        return ResponseEntity.ok(UnidadeFederativa.values());
    }

    @GetMapping(path = "cep", produces = MediaType.APPLICATION_JSON_VALUE)
    public Page<Cep> getCeps(@RequestParam("uf") String uf,
                             @RequestParam("cidade") String cidade,
                             @RequestParam("logradouro") String logradouro,
                             Pageable pageable) {
        return service.getListCep(uf, cidade, logradouro, pageable);
    }
}
