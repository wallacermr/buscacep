package com.teste.cep.client;

import com.teste.cep.entity.Cep;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class CepClient {
    public Cep getCep(String cep) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject("https://viacep.com.br/ws/" + cep + "/json", Cep.class, cep);
    }
}
