package com.buscacep.cep.repository;

import com.buscacep.cep.entity.Cep;
import org.springframework.data.repository.CrudRepository;

public interface CepRepository extends CrudRepository<Cep, Long> {
    Cep findByCep(String cep);
}
