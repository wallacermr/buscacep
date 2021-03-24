package com.buscacep.cep.service.impl;

import com.buscacep.cep.client.CepClient;
import com.buscacep.cep.dto.CepDTO;
import com.buscacep.cep.entity.Cep;
import com.buscacep.cep.mapper.CepMapper;
import com.buscacep.cep.repository.CepRepository;
import com.buscacep.cep.service.CepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    @Transactional
    public Page<Cep> getListCep(String uf, String cidade, String logradouro, Pageable pageable) {
        List<Cep> resultado =
                cepRepository.findAllByUfCidadeLogradouro(uf.toLowerCase(), cidade.toLowerCase(), logradouro.toLowerCase());

        if(resultado == null || resultado.isEmpty()) {
            List<CepDTO> listCeps = cepClient.getListCeps(uf, cidade, logradouro);
            listCeps.forEach(dto -> {
                Cep cep = CepMapper.INSTANCE.dtoToEntity(dto);
                cepRepository.save(cep);
            });
        }

        return cepRepository.findAll(uf.toLowerCase(), cidade.toLowerCase(), logradouro.toLowerCase(), pageable);
    }

    @Transactional
    public Cep save(Cep cep) {
        return cepRepository.save(cep);
    }
}
