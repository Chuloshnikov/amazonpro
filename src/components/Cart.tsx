"use client"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductType, StateProps } from '../../type';
import { Minus, Plus, X } from "lucide-react";
import {
    decreaseQuantity,
    deleteProduct,
    increaseQuantity,
    resetCart,
  } from "@/redux/proSlice";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import FormatedPrice from './FormatedPrice';
import { calculatePercentage } from '@/helpers';
import { useRouter } from "next/navigation";
import Link from 'next/link';

const Cart = () => {
    const { productData, favoriteData } = useSelector((state: StateProps) => state.pro);
    const dispatch = useDispatch();
    const router = useRouter();

    const handleReset = () => {
        const confirmReset = window.confirm(
            "Are you sure you want to reset your Cart?"
        );
        if (confirmReset) {
            dispatch(resetCart());
            toast.success('Cart Reset Successfully');
            router.push("/");
        }
    }
  return (
    <>
        {productData.length > 0 ? (
        <div className='mt-5 flex flex-col'>
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
                                Quantity
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                SubTotal
                            </th>
                            <th scope='col' className='px-6 py-3'>
                                Saving
                            </th>
                        </tr>
                    </thead>
                    {productData.map ((item:ProductType) => (
                        <tbody key={item?._id}>
                            <tr className="bg-white border-b-[1px] border-b-zinc-300">
                                <th  
                                scope="row"
                                className="px-6 py-4 flex items-center gap-3"
                                >
                                    <X 
                                    onClick={() => {dispatch(deleteProduct(item?._id)), 
                                        toast.success(
                                            `${item.title} is removed from Wishlist!`
                                        );
                                    }}
                                    className='w-4 h-4 hover:text-red-600 cursor-pointer duration-200'
                                    />
                                    <Image
                                    src={item?.image}
                                    alt="proudct image"
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
                                <td className="px-6 py-4 flex items-center gap-4">
                                    <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex items-center justify-center">
                                        <Minus
                                        onClick={() =>
                                            item?.quantity > 1
                                            ? dispatch(decreaseQuantity(item)) &&
                                                toast.success(
                                                "Quantity decreased Successfully!"
                                                )
                                            : toast.error("Can not delete less than 1")
                                            }
                                        className="w-4 h-4"
                                        />
                                    </span>
                                    <span className="font-semibold">{item?.quantity}</span>
                                    <span className="border border-zinc-300 p-1 rounded-md hover:border-zinc-800 cursor-pointer duration-200 inline-flex items-center justify-center">
                                        <Plus
                                        onClick={() => {
                                            dispatch(increaseQuantity(item)),
                                            toast.success(`${item?.title} quantity added`);
                                        }}
                                        className="w-4 h-4"
                                        />
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <FormatedPrice amount={item?.price * item?.quantity} />
                                </td>
                                <td className="px-6 py-4">
                                    <p className='bg-zinc-900 w-20 text-sm font-semibold text-center text-white py-1 rounded-md'>
                                        {calculatePercentage(item?.price, item?.previousPrice)}%{" "}save
                                    </p>
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
                Reset Cart
            </button>
            <div className='mt-4 bg-white max-w-xl p-4 flex flex-col gap-1'>
                <p className='border-b-[1px] border-b-designColor py-1'>
                    Cart Summary
                </p>
                <p>
                    Total Items <span>{productData.length}</span>
                </p>
            </div>
        </div>
        ) : (
        <div className='py-10 flex flex-col gap-1 items-center justify-center'>
            <p className='text-lg font-bold'>Your Cart is Empty</p>
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
    </>
  )
}

export default Cart;