import React from 'react';


type Props = {
    amount: number;
    className?: string;
}

const FormatedPrice = ({amount, className}: Props) => {
    const formatedAmount = new Number(amount).toLocaleString('en-US', {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 2,
    });
  return (
    <span>{formatedAmount}</span>
  )
}

export default FormatedPrice;