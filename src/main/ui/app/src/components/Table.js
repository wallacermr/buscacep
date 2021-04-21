import {useState, useEffect, useContext} from 'react';
import ReactPaginate from 'react-paginate';
import { FormContext } from '../contexts/FormContext';

export function Table() {
    const{uf, cidade, logradouro, size, totalPages, ceps, setCeps} = useContext(FormContext);
    const [isShowPaginateDiv, setIsShowPaginateDiv] = useState(false);
    
    function handlePageClick({ selected: selectedPage }) {
        getCepsPageable(selectedPage);
    }

    useEffect(() => {
        if(ceps.length > 0) {
            setIsShowPaginateDiv(true);
        }
    });

    async function getCepsPageable(pageNumber) {
        const data = await fetch(`${process.env.URL}/cepApi/cep/${uf}/${cidade}/${logradouro}?page=${pageNumber}&size=${size}`).then(response => response.json());
        setCeps(data.content)
    }

    return(
        <div>
            <div style={{marginTop: '0.7rem'}}>
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
            {isShowPaginateDiv && (
                <div>
                    <ReactPaginate
                        previousLabel={'anterior'}
                        nextLabel={'próximo'}
                        pageCount={totalPages}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={2}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        activeClassName={'active'}
                    />
                </div>
            )}            
        </div>
    );
}