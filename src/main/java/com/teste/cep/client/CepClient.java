package com.teste.cep.client;

import com.teste.cep.dto.CepDTO;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
<<<<<<< HEAD
=======
import java.util.Collections;
>>>>>>> dev
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
<<<<<<< HEAD
            return null;
=======
            return Collections.emptyList();
>>>>>>> dev
        }
        return Arrays.asList(ceps);
    }
}
