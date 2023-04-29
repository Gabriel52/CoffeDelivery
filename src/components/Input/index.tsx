import { InputStyled } from "./styled";

type Props = {
    width?: string;
    placeholder?: string;
    name: string;
    type?: string;
    disabled?: boolean
}

export const Input = ({
    width='100%',
    placeholder="placeholder", 
    name, 
    type="text",
    disabled=false,
    ...rest
}:Props)=> {
    return(
        <InputStyled
            width={width}
            type={type} 
            placeholder={placeholder}
            name={name}
            disabled={disabled}
            {...rest}
        />
    )
}