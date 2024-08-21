import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TertiryButton from '../components/tertiryButton';
import { useNavigate } from 'react-router-dom';

function Billing (props){
    const navigate = useNavigate();
    const taxes = 10;
    const shipping = 10;
    return (
        <div>
            <Navbar isNotLanding="True" />
                <div className="min-h-screen mt-20 md:mt-52">
                    <div className="container px-6 py-12 mx-auto flex flex-col md:flex-row sm:flex-cols gap-4">
                        <div className="md:w-3/4">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-4 h-full">
                                <h2 className="text-3xl text-black mt-2 font-bold mb-4">Contact Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block">
                                            <span className="block text-xl mb-1 mt-4 font-md text-black">Name</span>
                                            <input type="text" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Minal Anwar" id="name" required />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="block">
                                            <span className="block text-xl mb-1 mt-4 font-md text-black">Address</span>
                                            <input type="text" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="123 Street, City, Country" id="address" required />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="block">
                                            <span className="block text-xl mb-1 font-md text-black">Email</span>
                                            <input type="email" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="example@example.com" id="email" required />
                                        </label>
                                    </div>
                                    <div>
                                        <label className="block">
                                            <span className="block text-xl mb-1 font-md text-black">Phone Number</span>
                                            <input type="tel" className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700  focus:outline-none focus:shadow-outline" placeholder="0309-8886702" id="phone" required />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/4">
                            <div className="bg-white rounded-lg shadow-md p-6 h-full">
                                <h2 className="text-3xl text-black font-bold mb-4">Summary</h2>
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
                                <div className="flex text-gray-700 text-lg justify-between mb-6">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">${parseInt(props.price) + parseInt(taxes) + parseInt(shipping)}</span>
                                </div>
                                <TertiryButton text="Checkout" className="w-full" onClick={()=>navigate("/")} />
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}

export default Billing;
