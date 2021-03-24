package com.buscacep.cep.service;

import com.buscacep.cep.dto.CepDTO;
import com.buscacep.cep.entity.Cep;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CepService {

    Cep findByCep(String cep);

    CepDTO getCep(String cep);

    Page<Cep> getListCep(String uf, String cidade, String logradouro, Pageable pageable);

    Cep save(Cep cep);
}
