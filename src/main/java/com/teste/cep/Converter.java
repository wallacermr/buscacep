package com.teste.cep;

import com.teste.cep.dto.CepDTO;
import com.teste.cep.entity.Cep;

public class Converter {
    public static CepDTO CepEntityParaDTO(Cep input) {
        if(input == null) {
            return null;
        }
        CepDTO output = new CepDTO();
        output.setCep(input.getCep());
        output.setBairro(input.getBairro());
        output.setComplemento(input.getComplemento());
        output.setDdd(input.getDdd());
        output.setGia(input.getGia());
        output.setIbge(input.getIbge());
        output.setLocalidade(input.getLocalidade());
        output.setLogradouro(input.getLogradouro());
        output.setUf(input.getUf());
        return output;
    }

    public static Cep CepDTOParaEntity(CepDTO input) {
        if(input == null) {
            return null;
        }
        Cep output = new Cep();
        output.setCep(input.getCep());
        output.setBairro(input.getBairro());
        output.setComplemento(input.getComplemento());
        output.setDdd(input.getDdd());
        output.setGia(input.getGia());
        output.setIbge(input.getIbge());
        output.setLocalidade(input.getLocalidade());
        output.setLogradouro(input.getLogradouro());
        output.setUf(input.getUf());
        return output;
    }
}
