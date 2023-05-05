import { useState } from "react";

type UseFormAddressType = {
    cep: string,
    isValidCep: boolean
    handleCepChange: (event: any)=> void
}

export const useFormAddress = ():UseFormAddressType => {
    const [cep, setCep] = useState("");
    const [isValidCep, setIsValidCep] = useState(false);

    const validateCep = (cep: string) => {
        const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;
        setIsValidCep(cepRegex.test(cep));
    };

    const handleCepChange = (event: any) => {
        const {value: newCep} = event.target;
        setCep(newCep);
        validateCep(newCep);
    };

    return {
        cep,
        isValidCep,
        handleCepChange,
    }
}