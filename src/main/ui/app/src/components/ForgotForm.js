import { useState, useEffect } from 'react';
import { UnidadeFederativa } from '../class/UnidadeFederativa';

export function ForgotForm() {
    const[items, setItems] = useState([]);
    const[ufValue, setUfValue] = useState('');

    useEffect(() => {
        async function getUfList() {
            const data = await fetch(`${process.env.URL}/cep/uf`).then(response => response.json());
            const listaUnidadesFederativas = [];

            data.forEach(element => {
                listaUnidadesFederativas.push(new UnidadeFederativa(element.id, element.nome, element.codigoUf));
            });
            setItems(listaUnidadesFederativas);
        }
        getUfList();
    }, []);

    return (
        <div className="form-row">
            <div className="form-group col-md-1">
                <label htmlFor="uf">UF:</label>
                <select id="uf" className="form-control" value={ufValue} onChange={(event) => setUfValue(event.currentTarget.value)}>
                    {items.map((item) => (
                        <option key={item.codigoUf} value={item.id}>
                            {item.nome}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group col-md-4">
                <label htmlFor="cidade">Cidade:</label>
                <input type="text" className="form-control" id="cidade" />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="logradouro">Logradouro:</label>
                <input type="text" className="form-control" id="logradouro" />
            </div>
        </div>
    );
}