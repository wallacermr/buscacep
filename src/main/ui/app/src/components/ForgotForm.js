export function ForgotForm() {
    return (
        <div>
            <div className="form-group">
                <div className="col-xs-2 col-md-2 col-sm-2 col-lg-2" style={{padding: 0}}>
                    <label htmlFor="uf">UF:</label>
                    <select id="uf" className="form-control col-xs-3 col-md-3 col-sm-3 col-lg-3">
                        <option value=""></option>
                        <option value="es">ES</option>
                        <option value="sp">SP</option>
                    </select>
                </div>
                <div className="col-xs-4 col-md-4 col-sm-4 col-lg-4">
                    <label htmlFor="cidade">Cidade:</label>
                    <input type="text" id="cidade" className="form-control" maxlength="100" />
                </div>
                <div className="col-xs-6 col-md-6 col-sm-6 col-lg-6">
                    <label htmlFor="logradouro">Logradouro:</label>
                    <input type="text" id="logradouro" className="form-control" maxlength="200" />
                </div>
            </div>
        </div>
    );
}