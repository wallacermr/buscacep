package com.buscacep.cep.repository;

import com.buscacep.cep.entity.Cep;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface CepRepository extends JpaRepository<Cep, Long>, JpaSpecificationExecutor<Cep> {

    @Query(value = "SELECT c FROM Cep c WHERE c.cep = :cep")
    Cep findByCep(@Param("cep") String cep);
}
