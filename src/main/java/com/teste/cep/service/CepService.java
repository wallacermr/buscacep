package com.teste.cep.service;

import com.teste.cep.dto.CepDTO;
import com.teste.cep.entity.Cep;

public interface CepService {

    Cep findByCep(String cep);

    CepDTO getCepService(String cep);

    Cep save(Cep cep);
}
