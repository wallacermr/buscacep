import { createContext, useState } from 'react';

export const FormContext = createContext({});

export function FormProvider({children}) {
    const [uf, setUf] = useState("");
    const [cidade, setCidade] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [size] = useState(10);
    const [data, setData] = useState({});
    const [dataList, setDataList] = useState([]);
    const [isCepList, setIsCepList] = useState(false);

    return(
        <FormContext.Provider value={{
            uf,
            setUf,
            cidade,
            setCidade,
            logradouro,
            setLogradouro,
            page,
            setPage,
            totalPages,
            setTotalPages,
            size,
            data,
            setData,
            dataList,
            setDataList,
            isCepList,
            setIsCepList
        }}>
            {children}
        </FormContext.Provider>
    );
}