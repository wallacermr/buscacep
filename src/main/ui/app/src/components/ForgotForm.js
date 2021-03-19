import { useState, useEffect } from 'react';
import { UF } from '../class/Uf';

export function ForgotForm() {
    const[items, setItems] = useState([]);
    const[ufValue, setUfValue] = useState('');

    useEffect(() => {
        async function getUfList() {
            const data = await fetch(`${process.env.URL}/teste/uf`).then(response => response.json());
            const arr = [];
            
            //funciona, mas o map é usado quando eu quiser retornar algum valor
            //data.map((value, label) => {
            //    result.push(new UF(value, value));
            //});

            //neste caso vou usar apenas um forEach, ja q não poreciso retornar valor
            data.forEach(element => {
                arr.push(new UF(element, element));
            });
            setItems(arr);
        }
        getUfList();
    }, []);

    return (
        <div className="form-row">
            <div className="form-group col-md-1">
                <label htmlFor="uf">UF:</label>
                <select id="uf" className="form-control" value={ufValue} onChange={(event) => setUfValue(event.currentTarget.value)}>
                    {items.map((item) => (
                        <option key={item.value} value={item.value}>
                            {item.label}
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