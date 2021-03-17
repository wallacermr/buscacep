export function Botao({onClick}) {
    return(
        <div style={{paddingTop: '1.0rem'}}>
            <button id="sendBtn" className="btn btn-primary" onClick={onClick}>Enviar</button>
        </div>
    );
}