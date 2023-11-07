import { getProducts } from "@/helpers";
import { ProductType } from "../../../type";

type Props = {
    searchParams: { [key: string]: string | string[] | undefined };
  };

const ProductPage = async ({searchParams}: Props) => {
    const products = await getProducts();
    const _idString = searchParams?._id
    const _id = Number(_idString);

    const singleProduct = (_id:number) => {
        const item = products.find((product: ProductType) => product._id === _id);
        return item;
    };

    const product = singleProduct(_id);
    console.log(products);

  return (
    <div>зфпу</div>
  )
}

export default ProductPage;