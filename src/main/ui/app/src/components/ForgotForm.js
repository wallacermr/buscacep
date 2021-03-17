export function ForgotForm() {
    return (
        <div className="form-row">
            <div className="form-group col-md-2">
                <label htmlFor="uf">UF:</label>
                <select id="uf" className="form-control">
                    <option defaultValue="">Choose...</option>
                    <option value="es">ES</option>
                    <option value="sp">SP</option>
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