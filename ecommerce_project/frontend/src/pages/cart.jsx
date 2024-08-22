import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../redux/cartSlice';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TertiryButton from '../components/tertiryButton';
import { TrashIcon } from '@heroicons/react/24/outline';

function ShoppingCart() {
    const cartItems = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const shipping = 10;

    const increaseQuantity = (id) => {
        const currentItem = cartItems.find(item => item.id === id);
        if (currentItem) {
            dispatch(updateQuantity({ productId: id, quantity: currentItem.quantity + 1 }));
        }
    };

    const decreaseQuantity = (id) => {
        const currentItem = cartItems.find(item => item.id === id);
        if (currentItem) {
            dispatch(updateQuantity({ productId: id, quantity: Math.max(1, currentItem.quantity - 1) }));
        }
    };

    const handleRemove = (id) => {
        dispatch(removeFromCart({ productId: id }));
    };

    const handleCheckout = () => {
        navigate("/billing", { state: { price: totalPrice, totalItems: cartItems.length }});
    };

    const subtotal = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('Rs', '')) * item.quantity, 0);
    const taxes = subtotal * 0.17;
    const totalPrice = subtotal + taxes + shipping;

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
                                            <th className="text-left font-semibold">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map(item => (
                                            <tr key={item.id}>
                                                <td className="py-4">
                                                    <div className="flex items-center">
                                                        <img className="h-16 w-16 mr-4" src={(item.images && item.images[0] && item.images[0].image) || item.image } alt="Product" />
                                                        <span className="font-semibold">{item.name}</span>
                                                    </div>
                                                </td>
                                                <td className="py-4">{item.price}</td>
                                                <td className="py-4">
                                                    <div className="flex items-center">
                                                        <button
                                                            className="border rounded-md py-2 px-4 mr-2"
                                                            onClick={() => decreaseQuantity(item.id)}
                                                        >
                                                            -
                                                        </button>
                                                        <span className="text-center w-8">{item.quantity}</span>
                                                        <button
                                                            className="border rounded-md py-2 px-4 ml-2"
                                                            onClick={() => increaseQuantity(item.id)}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="py-4">{(parseFloat(item.price.replace('Rs', '')) * item.quantity).toFixed(2)}Rs</td>
                                                <td className="py-4">
                                                    <button
                                                        className="ml-2 text-black-500"
                                                        onClick={() => handleRemove(item.id)}
                                                    >
                                                        <TrashIcon className="h-6 w-6" />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="md:w-1/4">
                            <div className="bg-white rounded-lg shadow-md p-6 h-full">
                                <h2 className="text-3xl font-bold mb-4">Summary</h2>
                                <div className="flex text-gray-700 text-lg justify-between mb-2">
                                    <span>Total Items</span>
                                    <span>{cartItems.length}</span>
                                </div>
                                <div className="flex text-gray-700 text-lg justify-between mb-2">
                                    <span>Subtotal</span>
                                    <span>{subtotal.toFixed(2)}Rs</span>
                                </div>
                                <div className="flex text-gray-700 text-lg justify-between mb-2">
                                    <span>Taxes</span>
                                    <span>{taxes.toFixed(2)}Rs</span>
                                </div>
                                <div className="flex text-gray-700 text-lg justify-between mb-2">
                                    <span>Shipping</span>
                                    <span>{shipping}Rs</span>
                                </div>
                                <hr className="my-2" />
                                <div className="flex text-gray-700 text-lg justify-between mb-2">
                                    <span className="font-semibold">Total</span>
                                    <span className="font-semibold">{totalPrice.toFixed(2)}Rs</span>
                                </div>
                                <TertiryButton text="Checkout" className="w-full" onClick={handleCheckout} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ShoppingCart;
