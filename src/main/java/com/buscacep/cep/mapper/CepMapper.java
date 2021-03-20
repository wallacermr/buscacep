package com.buscacep.cep.mapper;

import com.buscacep.cep.dto.CepDTO;
import com.buscacep.cep.entity.Cep;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import org.springframework.stereotype.Component;

@Mapper
@Component
public interface CepMapper {
    CepMapper INSTANCE = Mappers.getMapper(CepMapper.class);

    CepDTO entityToDTO(Cep cep);
    Cep dtoToEntity(CepDTO cepDto);
    
}
