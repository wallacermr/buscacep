import { Botao } from '../components/Botao';
import { useState, useEffect } from 'react';

export function Form({setCeps}) {
    const[isChecked, setIsChecked] = useState(false);
    const[cep, setCep] = useState('');

    /*
    * Como o nextjs usa um servidor para renderizar esta parte do código
    * o document, neste ponto, não é acessível pois estamos fora do escopo do DOM
    * então é usado a função do react useEffect() para acessá-lo.
    */
    useEffect(() => {
        cep.length == '' || cep.length < 8 ? document.getElementById('sendBtn').disabled = true : document.getElementById('sendBtn').disabled = false;
    });

    const onSubmit = async () => {
        let parameter = '';
        if(!isChecked) {
            parameter = cep.toString();
        }
        const data = await fetch(`${process.env.URL}/teste/cep/${parameter}`).then(response => response.json());
        setCeps(data);
    }

    return (
        <div>
            <h1 className="text-center">Busca Cep</h1>
            
            <div className="row">
                <div className="form-group">
                    <label htmlFor="cepInput">CEP:</label>
                    
                    <div style={{display: 'grid', gridTemplateColumns: '30% 70%'}}>
                        <div style={{paddingLeft: 0}}>
                            <input type="number" className="form-control" value={cep} id="cepInput" maxLength="8" placeholder="Ex: 99999999"
                            onChange={(event) => {setCep(event.target.value)}} />
                            <small id="hintCep" className="form-text text-muted">
                                Informe somente números.
                            </small>
                        </div>
                        <div className="custom-control custom-checkbox" style={{margin: 'auto auto auto 1rem'}}>
                            <input type="checkbox" className="custom-control-input" id="forgotCep"
                            onChange={(event) => {                                
                                const wasChecked = event.target.checked;
                                if(wasChecked) {
                                    setCep('');
                                    document.getElementById('cepInput').disabled = wasChecked;
                                } else {
                                    document.getElementById('cepInput').disabled = wasChecked;
                                }
                                setIsChecked(wasChecked);
                            }} />
                            <label style={{paddingLeft: '0.2rem'}} className="custom-control-label" htmlFor="forgotCep">Esqueceu o cep?</label>
                        </div>

                        {isChecked && (<h1>Teste</h1>)}

                        <Botao onClick={onSubmit} />
                    </div>
                </div>
            </div>
        </div>
    );
}