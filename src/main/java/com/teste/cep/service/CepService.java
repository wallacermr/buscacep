package com.teste.cep.service;

import com.teste.cep.entity.Cep;

public interface CepService {

    Cep findByCep(String cepId);

    Cep getCep(String cepId);

    Cep save(Cep cep);
}
