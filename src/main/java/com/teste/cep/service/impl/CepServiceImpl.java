package com.teste.cep.service.impl;

import com.teste.cep.client.CepClient;
import com.teste.cep.dto.CepDTO;
import com.teste.cep.entity.Cep;
import com.teste.cep.repository.CepRepository;
import com.teste.cep.service.CepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CepServiceImpl implements CepService {

    private CepClient cepClient;
    private CepRepository cepRepository;

    @Autowired
    public CepServiceImpl(CepClient cepClient, CepRepository cepRepository) {
        this.cepClient = cepClient;
        this.cepRepository = cepRepository;
    }

    @Transactional(readOnly = true)
    public Cep findByCep(String cep) {
        return cepRepository.findByCep(cep);
    }

    public CepDTO getCep(String cep) {
        return cepClient.getCep(cep);
    }

    public List<CepDTO> getListCep(String uf, String cidade, String logradouro) {
        return cepClient.getListCeps(uf, cidade, logradouro);
    }

    @Transactional
    public Cep save(Cep cep) {
        return cepRepository.save(cep);
    }
}
