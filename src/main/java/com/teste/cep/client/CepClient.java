package com.teste.cep.client;

import com.teste.cep.dto.CepDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class CepClient {
    public CepDTO getCepService(String cep) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://viacep.com.br/ws/" + cep + "/json", CepDTO.class, cep);
    }
}
