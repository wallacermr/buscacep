import { createContext, useState } from 'react';

export const FormContext = createContext({});

export function FormProvider({children}) {
    const [uf, setUf] = useState("");
    const [cidade, setCidade] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [isForgotForm, setIsForgotForm] = useState(false);
    const [payload, setPayload] = useState({});

    return(
        <FormContext.Provider value={{
            uf,
            setUf,
            cidade,
            setCidade,
            logradouro,
            setLogradouro,
            isForgotForm,
            setIsForgotForm,
            payload,
            setPayload
        }}>
            {children}
        </FormContext.Provider>
    );
}