type Props = {
    width?: string;
    placeholder?: string;
    name: string;
    type: string;
}

export const Input = ({width,placeholder, name, type,...rest}:Props)=> {
    return
    <>
        <input 
            type={type} 
            placeholder={placeholder}
            name={name}
            {...rest}
        />
    </>
}