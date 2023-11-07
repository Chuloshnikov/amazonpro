import { cn } from "@/lib/utils";

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
    <span
    className={cn("text-base text-black", className)}
    >
        {formatedAmount}
    </span>
  )
}

export default FormatedPrice;