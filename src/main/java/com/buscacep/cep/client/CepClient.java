package com.buscacep.cep.client;

import com.buscacep.cep.dto.CepDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

@Service
public class CepClient {
    public CepDTO getCep(String cep) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://viacep.com.br/ws/" + cep + "/json", CepDTO.class, cep);
    }

    public List<CepDTO> getListCeps(String uf, String cidade, String logradouro) {
        RestTemplate restTemplate = new RestTemplate();
        CepDTO[] ceps =
                restTemplate.getForObject("https://viacep.com.br/ws/" + uf.toUpperCase() + "/" + cidade + "/" + logradouro + "/json/", CepDTO[].class);
        if(ceps == null) {
            return Collections.emptyList();
        }
        return Arrays.asList(ceps);
    }
}
