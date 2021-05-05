package com.buscacep.cep.repository;

import com.buscacep.cep.entity.Cep;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CepRepository extends JpaRepository<Cep, Long>, JpaSpecificationExecutor<Cep> {

    Cep findByCep(String cep);

    @Query(value = "SELECT c FROM Cep c WHERE LOWER(c.uf) = :uf AND LOWER(c.localidade) LIKE %:cidade% AND LOWER(c.logradouro) LIKE %:logradouro%")
    List<Cep> findAllByUfCidadeLogradouro(String uf,
                                          String cidade,
                                          String logradouro);


    @Query(value = "SELECT c FROM Cep c WHERE LOWER(c.uf) = :uf AND LOWER(c.localidade) LIKE %:cidade% AND LOWER(c.logradouro) LIKE %:logradouro%")
    Page<Cep> findAll(String uf,
                      String cidade,
                      String logradouro,
                      Pageable pageable);
}
