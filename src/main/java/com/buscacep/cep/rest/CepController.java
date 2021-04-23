package com.buscacep.cep.rest;

import com.buscacep.cep.dto.CepDTO;
import com.buscacep.cep.entity.Cep;
import com.buscacep.cep.enums.UnidadeFederativa;
import com.buscacep.cep.mapper.CepMapper;
import com.buscacep.cep.service.CepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping(path = "cepApi")
public class CepController {

    private CepService service;

    @Autowired
    public CepController(CepService service) {
        this.service = service;
    }

    @GetMapping(path = "cep/{cep}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CepDTO> getCep(@PathVariable("cep") String cep) {
        Cep resultado = service.findByCep(cep);
        if(resultado == null) {
            CepDTO cepDTO = service.getCep(cep);
            Cep cepEntity = CepMapper.INSTANCE.dtoToEntity(cepDTO);
            return Collections.singletonList(CepMapper.INSTANCE.entityToDTO(service.save(cepEntity)));
        }
        return Collections.singletonList(CepMapper.INSTANCE.entityToDTO(resultado));
    }

    @GetMapping(path = "uf", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UnidadeFederativa[]> getUfList() {
        return ResponseEntity.ok(UnidadeFederativa.values());
    }

    @GetMapping(path = "cep/{uf}/{cidade}/{logradouro}", produces = MediaType.APPLICATION_JSON_VALUE)
    public Page<Cep> getCeps(@PathVariable("uf") String uf,
                                @PathVariable("cidade") String cidade,
                                @PathVariable("logradouro") String logradouro,
                                Pageable pageable) {
        return service.getListCep(uf, cidade, logradouro, pageable);
    }
}
