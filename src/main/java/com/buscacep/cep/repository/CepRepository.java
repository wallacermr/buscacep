package com.buscacep.cep.repository;

import com.buscacep.cep.entity.Cep;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CepRepository extends JpaRepository<Cep, Long> {
    Cep findByCep(String cep);
}
