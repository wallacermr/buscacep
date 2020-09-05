package com.teste.cep.mapper;

import com.teste.cep.dto.CepDTO;
import com.teste.cep.entity.Cep;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface CepMapper {
    CepMapper INSTANCE = Mappers.getMapper(CepMapper.class);

    Cep entityToDTO(CepDTO cepDTO);
    CepDTO DTOToEntity(Cep cep);
}
