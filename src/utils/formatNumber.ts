import { MAIN_LANGUAGE } from "../configuration/const";

type Props = {
    value: number;
}

export const formatNumber = ({value}: Props) => {
    const currencySettings = {
        style: 'currency',
        currency: 'BRL'
    }
    return (value).toLocaleString(MAIN_LANGUAGE, currencySettings)
}