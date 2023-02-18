type Props = {
    productPrice: number;
    productAmount: number;
}

export const calculateValue = ({ productPrice, productAmount}: Props) => {
    const calculatedValue = productPrice * productAmount
    return calculatedValue
}