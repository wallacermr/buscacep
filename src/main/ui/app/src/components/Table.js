import {useState, useEffect, useContext} from 'react';
import ReactPaginate from 'react-paginate';
import { FormContext } from '../contexts/FormContext';
import { Cep } from '../class/Cep';
import styles from '../styles/components/Table.module.css';

export function Table() {
    const {uf, cidade, logradouro, isForgotForm, setIsForgotForm, payload, setPayload} = useContext(FormContext);
    const [totalPages, setTotalPages] = useState();
    const [cep, setCep] = useState({});
    const [cepArray, setCepArray] = useState([]);    

    useEffect(() => {
        if(Object.keys(payload).length > 0) {
            convertToCep();
        } else {
            setCep({});
            setCepArray([]);
            setIsForgotForm(false);
        }
    }, [payload]);

    async function handlePageClick({ selected: selectedPage }) {
        const size = 10;
        const data = await fetch(`${process.env.URL}/cepApi/cep?uf=${uf}&cidade=${cidade}&logradouro=${logradouro}&page=${selectedPage}&size=${size}`).then(response => response.json())
        setPayload(data);
    }

    async function getCepsPageable(pageNumber) {
        const data = await fetch(`${process.env.URL}/cepApi/cep?uf=${uf}&cidade=${cidade}&logradouro=${logradouro}&page=${pageNumber}&size=${size}`).then(response => response.json())
        setPayload(data);
        setTotalPages(data.totalPages);
    }

    let insertArray = (obj) => {
        let tempArray = [];
        setTotalPages(obj.totalPages);
        obj.content.map((c) => {
            tempArray.push(new Cep(c.id, c.cep, c.logradouro, c.complemento, c.bairro, c.localidade, c.uf, c.ibge, c.gia, c.ddd));
        });
        setCepArray(tempArray);
    }

    let convertToCep = () => {
        let obj = {};
        if(isForgotForm) {
            insertArray(payload);
        } else {
            obj = payload;
            setCep(new Cep(obj.id, obj.cep, obj.logradouro, obj.complemento, obj.bairro, obj.localidade, obj.uf, obj.ibge, obj.gia, obj.ddd));
        }
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
                        {isForgotForm === false ? (<tr>
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
                            </tr>) : (
                            cepArray.map((cep) => {
                                return(<tr key={cep.cep}>
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
                            })
                        )}
                    </tbody>
                </table>                
            </div>
            {isForgotForm && (
                <div className={styles.paginationDiv}>
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