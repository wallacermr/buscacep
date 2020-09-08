package com.teste.cep.service;

import com.teste.cep.dto.CepDTO;
import com.teste.cep.entity.Cep;

import java.util.List;

public interface CepService {

    Cep findByCep(String cep);

    CepDTO getCep(String cep);

    List<CepDTO> getListCep(String uf, String cidade, String logradouro);

    Cep save(Cep cep);
}
