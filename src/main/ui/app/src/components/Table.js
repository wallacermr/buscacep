export function Table({ceps}) {
    return(
        <div className="row" style={{marginTop: '0.7rem'}}>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>cep</th>
                        <th>logradouro</th>
                        <th>complemento</th>
                        <th>bairro</th>
                        <th>localidade</th>
                        <th>uf</th>
                        <th>ibge</th>
                        <th>gia</th>
                        <th>ddd</th>
                        <th>siafi</th>
                    </tr>
                </thead>
                <tbody>
                    {ceps.map((cep) => {
                        return (
                        <tr key={cep.cep}>
                            <td>{cep.cep}</td>
                            <td>{cep.logradouro}</td>
                            <td>{cep.complemento}</td>
                            <td>{cep.bairro}</td>
                            <td>{cep.localidade}</td>
                            <td>{cep.uf}</td>
                            <td>{cep.ibge}</td>
                            <td>{cep.gia}</td>
                            <td>{cep.ddd}</td>
                            <td>{cep.siafi}</td>
                        </tr>);
                    })}
                    
                </tbody>
            </table>
        </div>
    );
} 