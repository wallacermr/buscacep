import {useState, useEffect} from 'react';
import ReactPaginate from 'react-paginate';

export function Table({ceps}) {

    //Paginate items
    const PER_PAGE = 10;
    const pageCount = Math.ceil(ceps.length / PER_PAGE);
    const [currentPage, setCurrentPage] = useState(0);
    const offset = currentPage * PER_PAGE;

    const [isShowPaginateDiv, setIsShowPaginateDiv] = useState(false);
    
    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    useEffect(() => {
        if(ceps.length > 0) {
            setIsShowPaginateDiv(true);
        }
    });

    return(
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
            {isShowPaginateDiv && (
                <div>
                    <ReactPaginate
                        previousLabel={'anterior'}
                        nextLabel={'próximo'}
                        pageCount={pageCount}
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