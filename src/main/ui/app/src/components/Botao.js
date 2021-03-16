export function Botao({onClick}) {
    return(
        <div  style={{marginTop: '0.3rem'}}>
            <button className="btn btn-primary" id="sendBtn" onClick={onClick}>Enviar</button>
        </div>
    );
}