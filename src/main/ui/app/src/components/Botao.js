export function Botao({action, theme, idButton}) {
    return(
        <div style={{paddingTop: '1.0rem'}} className="col-1 col-sm-1 col-md-1 col-lg-1 col-xl- 1">
            <button id={idButton} className="btn btn-primary" onClick={action}>{theme}</button>
        </div>
    );
}