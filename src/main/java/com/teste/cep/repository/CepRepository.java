package com.teste.cep.repository;

import com.teste.cep.entity.Cep;
import org.springframework.data.repository.CrudRepository;

public interface CepRepository extends CrudRepository<Cep, Long> {
    Cep findByCep(String cep);
}
