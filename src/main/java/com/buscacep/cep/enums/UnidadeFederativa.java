package com.buscacep.cep.enums;

import com.fasterxml.jackson.annotation.JsonFormat;

@JsonFormat(shape = JsonFormat.Shape.OBJECT)
public enum UnidadeFederativa {
    RO("RO", "Rondônia", "11"),
    AC("AC", "Acre", "12"),
    AM("AM", "Amazonas", "13"),
    RR("RR", "Roraima", "14"),
    PA("PA", "Pará", "15"),
    AP("AP", "Amapá", "16"),
    TO("TO", "Tocantins", "17"),
    MA("MA", "Maranhão", "21"),
    PI("PI", "Piauí", "22"),
    CE("CE", "Ceará", "23"),
    RN("RN", "Rio Grande do Norte", "24"),
    PB("PB", "Paraíba", "25"),
    PE("PE", "Pernambuco", "26"),
    AL("AL", "Alagoas", "27"),
    SE("SE", "Sergipe", "28"),
    BA("BA", "Bahia", "29"),
    MG("MG", "Minas Gerais", "31"),
    ES("ES", "Espírito Santo", "32"),
    RJ("RJ", "Rio de Janeiro", "33"),
    SP("SP", "São Paulo", "35"),
    PR("PR", "Paraná", "41"),
    SC("SC", "Santa Catarina", "42"),
    RS("RS", "Rio Grande do Sul", "43"),
    MS("MS", "Mato Grosso do Sul", "50"),
    MT("MT", "Mato Grosso", "51"),
    GO("GO", "Goiás", "52"),
    DF("DF", "Distrito Federal", "53");

    private String id;
    private String nome;
    private String codigoUf;

    UnidadeFederativa(String id, String nome, String codigoUf) {
        this.id = id;
        this.nome = nome;
        this.codigoUf = codigoUf;
    }

    public String getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getCodigoUf() {
        return codigoUf;
    }
}
