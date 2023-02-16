
type Props = {
    language: string;
    value: number;
    style: string;
    currency: string;
}

export const formatNumber = ({language, value, style, currency}: Props) => {
    return (value).toLocaleString(language, {
        style,
        currency
    })
}