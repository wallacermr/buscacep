import { useState, useEffect, useContext } from 'react';
import { UnidadeFederativa } from '../class/UnidadeFederativa';
import { FormContext } from '../contexts/FormContext';

export function ForgotForm() {
    const { uf, setUf, cidade, setCidade, logradouro, setLogradouro } = useContext(FormContext);
    const[items, setItems] = useState([]);
    

    useEffect(() => {
        async function getUfList() {
            const data = await fetch(`${process.env.URL}/cepApi/uf`).then(response => response.json());
            const listaUnidadesFederativas = [new UnidadeFederativa("", "", Math.random())];

            data.forEach(element => {
                listaUnidadesFederativas.push(new UnidadeFederativa(element.id, element.nome, element.codigoUf));
            });
            setItems(listaUnidadesFederativas);
        }
        getUfList();
    }, []);

    return (
        <div className="row">
            <div className="form-group col-md-2">
                <label htmlFor="uf">UF:</label>
                <select id="uf" className="form-control" value={uf} onChange={(event) => setUf(event.currentTarget.value)}>
                    {items.map((item) => (
                        <option key={item.codigoUf} value={item.id}>
                            {item.nome}
                        </option>
                    ))}
                </select>
            </div>
            <div className="form-group col-md-4">
                <label htmlFor="cidade">Cidade:</label>
                <input type="text" className="form-control" id="cidade" value={cidade} onChange={(event) => setCidade(event.target.value)} />
            </div>
            <div className="form-group col-md-6">
                <label htmlFor="logradouro">Logradouro:</label>
                <input type="text" className="form-control" id="logradouro" value={logradouro} onChange={(event) => setLogradouro(event.target.value)} />
            </div>
        </div>
    );
}