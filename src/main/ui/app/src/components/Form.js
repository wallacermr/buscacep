import { Botao } from '../components/Botao';
import { ForgotForm } from './ForgotForm';

import { useState, useEffect, useContext } from 'react';
import { FormContext } from '../contexts/FormContext';

export function Form({setCeps}) {
    const { uf, setUf, cidade, setCidade, logradouro, setLogradouro } = useContext(FormContext);
    const[cep, setCep] = useState("");
    const[isChecked, setIsChecked] = useState(false);
    
    /*
    * Como o nextjs usa um servidor para renderizar esta parte do código
    * o document, neste ponto, não é acessível pois estamos fora do escopo do DOM
    * então é usado a função do react useEffect() para acessá-lo.
    */
    useEffect(() => {
        if(isChecked === false && (cep.length == "" || cep.length < 8)) {
            setUf("");
            setCidade("");
            setLogradouro("");
            document.getElementById("sendBtn").disabled = true;
        } else if (isChecked && (uf === "" || cidade.length < 3 || logradouro.length < 3)) {
            document.getElementById("sendBtn").disabled = true;
        } else {
            document.getElementById("sendBtn").disabled = false;
        }
    });

    const enviar = async () => {
        let parameter = "";
        if(!isChecked) {
            parameter = cep.toString();
        }
        const data = await fetch(`${process.env.URL}/cep/cep/${parameter}`).then(response => response.json());
        setCeps(data);
    }

    return (
        <div>
            <h1 className="text-center">Buscador de Cep</h1>
            <div className="form-group col-md-4">
                <label htmlFor="cepInput">CEP:</label>
                <input type="number" className="form-control" value={cep} id="cepInput" maxLength="8" placeholder="Ex: 99999999"
                        onChange={(event) => {setCep(event.target.value)}} />
                <small id="hintCep" className="form-text text-muted">
                    Informe somente números.
                </small>
            </div>

            <div className="form-check" style={{paddingBottom: '1.0rem'}}>
                <input type="checkbox"  className="form-check-input" id="forgotCep" onChange={(event) => {  
                    const wasChecked = event.target.checked;
                    if(wasChecked) {
                        setCep("");
                        document.getElementById("cepInput").disabled = wasChecked;
                    } else {
                        document.getElementById("cepInput").disabled = wasChecked;
                    }
                    
                    setIsChecked(wasChecked);
                }} />
                
                <label className="form-check-label" htmlFor="forgotCep">Esqueceu o cep?</label>
            </div>

            {isChecked && (<ForgotForm />)}
            <div className="row">
                <Botao idButton="sendBtn" theme="Enviar" action={enviar} />
                <Botao idButton="clearBtn" theme="Limpar" />
            </div>
        </div>
    );
}