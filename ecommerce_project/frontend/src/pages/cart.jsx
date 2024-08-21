import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TertiryButton from '../components/tertiryButton';
import { useNavigate } from 'react-router-dom';

function ShopingCart (props){
    const navigate = useNavigate();
    const taxes = 10;
    const shipping = 10;
    return (
        <div>
            <Navbar isNotLanding="True" />
            <div className="mt-44 h-screen py-8">
                <div className="container mx-auto px-4">
                    <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="md:w-3/4">
                            <div className="rounded-lg shadow-md p-6 mb-4">
                                <table className="w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left font-semibold">Product</th>
                                            <th className="text-left font-semibold">Price</th>
                                            <th className="text-left font-semibold">Quantity</th>
                                            <th className="text-left font-semibold">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <img className="h-16 w-16 mr-4" src="https://via.placeholder.com/150" alt="Product" />
                                                    <span className="font-semibold">Product name</span>
                                                </div>
                                            </td>
                                            <td className="py-4">$19.99</td>
                                            <td className="py-4">
                                                <div className="flex items-center">
                                                    <button className="border rounded-md py-2 px-4 mr-2">-</button>
                                                    <span className="text-center w-8">1</span>
                                                    <button className="border rounded-md py-2 px-4 ml-2">+</button>
                                                </div>
                                            </td>
                                            <td className="py-4">$19.99</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="md:w-1/4">
                            <div className="bg-white rounded-lg shadow-md p-6 h-full">
                                <h2 className="text-3xl font-bold mb-4">Summary</h2>
                                <div className="flex text-gray-700  text-lg justify-between mb-2">
                                    <span >Product Name</span>
                                    <span>{props.name}</span>
                                </div>
                                <div className="flex text-gray-700  text-lg justify-between mb-2">
                                    <span>Price</span>
                                    <span>{props.price}</span>
                                </div>
                                <div className="flex text-gray-700  text-lg justify-between mb-2">
                                    <span>Quantity</span>
                                    <span>{props.quantity}</span>
                                </div>
                                <div className="flex text-gray-700  text-lg justify-between mb-2">
                                    <span>Shipping</span>
                                    <span>{shipping}</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex text-gray-700 text-lg justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">${parseInt(props.price) + parseInt(taxes) + parseInt(shipping)}</span>
                                </div>
                                <TertiryButton text="Checkout" className="w-full" onClick={()=>navigate("/billing")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default ShopingCart;
