package com.teste.cep.rest;

import com.teste.cep.dto.CepDTO;
import com.teste.cep.entity.Cep;
import com.teste.cep.mapper.CepMapper;
import com.teste.cep.service.CepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/teste")
public class TesteController {

    private CepService service;

    @Autowired
    public TesteController(CepService service) {
        this.service = service;
    }

    @GetMapping(path = "/cep/{cep}", produces = MediaType.APPLICATION_JSON_VALUE)
    public CepDTO getCep(@PathVariable("cep") String cep) {
        Cep resultado = service.findByCep(cep);
        if(resultado == null) {
            CepDTO cepDTO = service.getCepService(cep);
            Cep cepEntity = CepMapper.INSTANCE.DTOToEntity(cepDTO);
            return CepMapper.INSTANCE.entityToDTO(service.save(cepEntity));
        }
        return CepMapper.INSTANCE.entityToDTO(resultado);
    }

    @GetMapping(path = "/cep/{uf}/{cidade}/{logradouro}", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<CepDTO> getCeps(@PathVariable("uf") String uf,
                                @PathVariable("cidade") String cidade,
                                @PathVariable("logradouro") String logradouro) {

        String txt = uf + cidade + logradouro;
        return null;
    }
}
