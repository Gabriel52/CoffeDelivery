import { InputStyled } from "./styled";

type Props = {
    width?: string;
    placeholder?: string;
    name: string;
    type: string;
}

export const Input = ({
    width='100%',
    placeholder, 
    name, 
    type,
    ...rest
}:Props)=> {
    return(
        <InputStyled
            width={width}
            type={type} 
            placeholder={placeholder}
            name={name}
            {...rest}
        />
    )
}