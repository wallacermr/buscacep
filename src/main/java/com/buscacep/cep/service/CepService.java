package com.buscacep.cep.service;

import com.buscacep.cep.dto.CepDTO;
import com.buscacep.cep.entity.Cep;

import java.util.List;

public interface CepService {

    Cep findByCep(String cep);

    CepDTO getCep(String cep);

    List<CepDTO> getListCep(String uf, String cidade, String logradouro);

    Cep save(Cep cep);
}
