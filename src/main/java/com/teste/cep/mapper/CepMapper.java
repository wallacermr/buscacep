package com.teste.cep.mapper;

import com.teste.cep.dto.CepDTO;
import com.teste.cep.entity.Cep;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface CepMapper {
    CepMapper INSTANCE = Mappers.getMapper(CepMapper.class);

    CepDTO entityToDTO(Cep cep);
    Cep DTOToEntity(CepDTO cepDto);
}
