export function Botao({action}) {
    return(
        <div style={{paddingTop: '1.0rem'}}>
            <button id="sendBtn" className="btn btn-primary" onClick={action}>Enviar</button>
        </div>
    );
}