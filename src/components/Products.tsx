import Container from "./Container";
import Link from 'next/link';
import { PcCase, ScanFace, Smartphone, Watch } from "lucide-react";

const Products = () => {
  return (
    <div
    className='mt-10 mb-60'
    >
         <Container>
            <div
            className='flex flex-col gap-2 items-center'
            >
                <h2
                className='text-3xl font-semibold'
                >
                    Chose a category
                </h2>
                <p
                className='text-lg text-center'
                >
                    Explore dezens of customized layouts made by our brilrant designers
                </p>
                <div
                className="text-zinc-500 flex items-center gap-2 md:gap-6 mt-5"
                >
                    <Link
                    href={"/phones"}
                    className="flex gap-2 hover:text-black cursor-pointer duration-200"
                    >
                        <Smartphone/>
                        <p>Phone</p>
                    </Link>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Products;