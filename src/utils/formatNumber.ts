import { MAIN_LANGUAGE } from "../configuration/const";

export const formatNumber = (value: number) => {
    const currencySettings = {
        style: 'currency',
        currency: 'BRL'
    }
    return (value).toLocaleString(MAIN_LANGUAGE, currencySettings)
}