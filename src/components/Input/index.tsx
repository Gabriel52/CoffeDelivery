import { ContentInputStyled, InputStyled } from "./styled";

type Props = {
    width?: string;
    placeholder?: string;
    name: string;
    type?: string;
    disabled?: boolean
    value?: string
    errorMessage?: string
    isError?: boolean
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined

}

export const Input = ({
    width='100%',
    placeholder="placeholder", 
    name, 
    type="text",
    disabled=false,
    value,
    errorMessage,
    isError,
    onChange,
    ...rest
}:Props)=> {
    return(
        <ContentInputStyled>
            <InputStyled
                width={width}
                value={value}
                type={type} 
                placeholder={placeholder}
                name={name}
                disabled={disabled}
                onChange={onChange}
                {...rest}
            />
            {isError && <span>{errorMessage}</span>}
        </ContentInputStyled>
    )
}