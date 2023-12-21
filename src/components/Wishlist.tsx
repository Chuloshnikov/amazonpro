"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductType, StateProps } from '../../type';
import { Minus, Plus, X, CheckCircle } from "lucide-react";
import {
    addToCart,
    addAllToCart,
    deleteFavorite,
    resetFavorite,
  } from "@/redux/proSlice";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import FormatedPrice from './FormatedPrice';
import { calculatePercentage } from '@/helpers';
import { useRouter } from "next/navigation";
import Link from 'next/link';
import {loadStripe} from '@stripe/stripe-js';
import { useSession } from "next-auth/react";


const Wishlist = () => {
    const [totalAmt, setTotalAmt] = useState(0);
    const [rowPrice, setRowPrice] =useState(0);
    const { productData, favoriteData } = useSelector((state: StateProps) => state.pro);
    const dispatch = useDispatch();
    const router = useRouter();
    const { data: session } = useSession();

    const handleReset = () => {
        const confirmReset = window.confirm(
            "Are you sure you want to reset your Wishlist?"
        );
        if (confirmReset) {
            dispatch(resetFavorite());
            toast.success('Wishlist Reset Successfully');
            router.push("/");
        }
    };

    // Price value
    useEffect(() => {
        let amt = 0;
        let rowAmt = 0;
        favoriteData.map((item:ProductType) => {
            amt += item.price * item.quantity;
            return;
        });
        favoriteData.map((item: ProductType) => {
            rowAmt += item?.previousPrice * item?.quantity;
        });
        setTotalAmt(amt);
        setRowPrice(rowAmt);
    }, [favoriteData]);


    const handleToCart = async (item) => {
        dispatch(addToCart(item));
        dispatch(deleteFavorite(item?._id));
    }

    
    const handleAllToCart = () => {
        dispatch(addAllToCart(favoriteData));
        dispatch(resetFavorite());
      };
 
  return (
    <div
    className='min-h-[465px]'
    >
        {favoriteData.length > 0 ? (
        <div className='mt-5 flex flex-col min-h-[520px]'>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
                <table className="w-full text-sm text-left">
                    <thead className='text-xs text-white uppercase bg-zinc-950'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                Product Information
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Unit Price
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Old price
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Saving
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Add to cart
                            </th>
                        </tr>
                    </thead>
                    {favoriteData.map ((item:ProductType) => (
                        <tbody key={item?._id}>
                            <tr className="bg-white border-b-[1px] border-b-zinc-300">
                                <th  
                                scope="row"
                                className="px-6 py-4 flex items-center gap-3"
                                >
                                    <X 
                                    onClick={() => {dispatch(deleteFavorite(item?._id)), 
                                        toast.success(
                                            `${item.title} is removed from Wishlist!`
                                        );
                                    }}
                                    className='w-4 h-4 hover:text-red-600 cursor-pointer duration-200'
                                    />
                                    <Image
                                    src={item?.image}
                                    alt="Product image"
                                    width={500}
                                    height={500}
                                    className="w-24 object-contain"
                                    />
                                    <p className="text-base font-medium text-black">
                                        {item?.title}
                                    </p>
                                </th>
                                <td className="px-6 py-4">
                                    <FormatedPrice amount={item?.price} />
                                </td>
                                <td className="px-6 py-4">
                                <FormatedPrice amount={item?.previousPrice}/>
                                </td>
                                <td className="px-6 py-4">
                                    <p className='bg-zinc-900 w-20 text-sm font-semibold text-center text-white py-1 rounded-md'>
                                        {calculatePercentage(item?.price, item?.previousPrice)}%{" "}save
                                    </p>
                                </td>
                                <td className="px-6 py-4 flex">
                                    <CheckCircle
                                    onClick={() => handleToCart(item)}
                                    className='ml-7 hover:text-designColor duration-200 cursor-pointer'
                                    />
                                </td>
                            </tr> 
                        </tbody>
                    ))}
                </table>
            </div>
            <button 
            onClick={handleReset}
            className='bg-zinc-950 text-zinc-200 w-36 py-3 mt-5 
            rounded-md uppercase text-xs font-semibold hover:bg-red-700
             hover:text-white duration-200'>
                Reset wishlist
            </button>
            <div className='mt-4 bg-white max-w-xl p-4 flex flex-col gap-1'>
                <p className='border-b-[1px] border-b-designColor py-1'>
                    Cart Summary
                </p>
                <p className='flex items-center justify-between'>
                    Total Items <span>{favoriteData.length}</span>
                </p>
                <p className='flex items-center justify-between'>
                    Price{" "} <span><FormatedPrice amount={rowPrice}/></span>
                </p>
                <p className='flex items-center justify-between'>
                    Discount{" "} <span><FormatedPrice amount={rowPrice - totalAmt}/></span>
                </p>
                <p className='flex items-center justify-between'>
                    Total Price{" "} <span><FormatedPrice amount={totalAmt}/></span>
                </p>
                <button
                onClick={handleAllToCart}
                className='bg-zinc-800 text-zinc-200 my-2 py-2 uppercase text-center 
                rounded-md font-semibold hover:bg-black hover:text-white duration-200'
                >
                    Add all to cart
                </button>
            </div>
        </div>
        ) : (
        <div className='py-10 flex flex-col gap-1 items-center justify-center'>
            <p className='text-lg font-bold'>Your Wishlist is Empty</p>
            <Link 
            className="text-sm uppercase font-semibold underline underline-offset-2 hover:text-designColor duration-200 cursor-pointer"
            href={"/"}
            >
                Go back to Shopping
            </Link>
        </div>
        )}
        <Toaster position='bottom-right'
        toastOptions={{
            style: {
            background: "#000",
            color: '#fff'
            }
        }}
        />
    </div>
  )
}

export default Wishlist;