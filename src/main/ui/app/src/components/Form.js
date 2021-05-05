import { Botao } from '../components/Botao';
import { ForgotForm } from './ForgotForm';

import { useState, useEffect, useContext } from 'react';
import { FormContext } from '../contexts/FormContext';
import { Cep } from '../class/Cep';

export function Form() {
    const {uf, setUf, cidade, setCidade, logradouro, setLogradouro, setIsForgotForm, setPayload} = useContext(FormContext);
    const [cepField, setCepField]  = useState("");
    const [isChecked, setIsChecked] = useState(false);
    
    /*
    * Como o nextjs usa um servidor para renderizar esta parte do código
    * o document, neste ponto, não é acessível pois estamos fora do escopo do DOM
    * então é usado a função do react useEffect() para acessá-lo.
    */
    useEffect(() => {
        let sendButton = document.getElementById("sendBtn");
        let clearButton = document.getElementById("clearBtn");

        if(isChecked == false) {
            cepField.trim().length == 8 ? sendButton.disabled = false : sendButton.disabled = true;
            cepField.length > 0 ? clearButton.disabled = false : clearButton.disabled = true;
        } else {
            uf != "" || cidade.trim().length > 0 || logradouro.trim().length > 0 ? clearButton.disabled = false : clearButton.disabled = true;
            uf != "" && cidade.trim().length >= 3 && logradouro.trim().length >= 3 ? sendButton.disabled = false : sendButton.disabled = true;
        }
    });

    const enviar = async () => {
        let data = {};
        if(isChecked) {
            const page = 0;
            const size = 10;
            setIsForgotForm(isChecked);
            data = await fetch(`${process.env.URL}/cepApi/cep?uf=${uf}&cidade=${cidade}&logradouro=${logradouro}&page=${page}&size=${size}`).then(response => response.json());
        } else {
            setIsForgotForm(isChecked);
            data = await fetch(`${process.env.URL}/cepApi/cep/${cepField.toString()}`).then(response => response.json());
        }
        setPayload(data);
    }

    const cleanFields = () => {
        if(isChecked === false) {
            setCepField("");
        } else {
            setCidade("");
            setLogradouro("");
            setUf("");
        }
        setPayload({});
    }

    return (
        <div>
            <h1 className="text-center">Buscador de Cep</h1>
            <div className="form-group col-md-4">
                <label htmlFor="cepInput">CEP:</label>
                <input type="number" className="form-control" value={cepField} id="cepInput" maxLength="8" placeholder="Ex: 99999999"
                        onChange={(event) => {setCepField(event.target.value)}} />
                <small id="hintCep" className="form-text text-muted">
                    Informe somente números.
                </small>
            </div>

            <div className="form-check" style={{paddingBottom: '1.0rem'}}>
                <input type="checkbox"  className="form-check-input" id="forgotCep" onChange={(event) => {  
                    const wasChecked = event.target.checked;
                    if(wasChecked) {
                        setCepField("");
                        document.getElementById("cepInput").disabled = wasChecked;
                    } else {
                        setUf("");
                        setCidade("");
                        setLogradouro("");
                        document.getElementById("cepInput").disabled = wasChecked;
                    }
                    
                    setIsChecked(wasChecked);
                }} />
                
                <label className="form-check-label" htmlFor="forgotCep">Esqueceu o cep?</label>
            </div>

            {isChecked && (<ForgotForm />)}
            <div className="row">
                <Botao idButton="sendBtn" theme="Enviar" action={enviar} />
                <Botao idButton="clearBtn" theme="Limpar" action={cleanFields} />
            </div>
        </div>
    );
}