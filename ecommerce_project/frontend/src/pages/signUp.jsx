import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TertiryButton from '../components/tertiryButton';
import { EnvelopeIcon, UserIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

function SignUp() {
    const navigate = useNavigate();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post('http://localhost:8000/api/auth/register/', {
                username,
                email,
                password,
            });
            setSuccess('Registration successful!');
            setUsername('');
            setEmail('');
            setPassword('');
            navigate("/login");
        } catch (err) {
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div>
            <Navbar isNotLanding="True" />
            <div className="md:py-24 py-16 mt-14">
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div
                        className="hidden lg:block lg:w-1/2 bg-cover"
                        style={{ backgroundImage: "url('/static/Assets/images/Login.avif')" }}
                    >
                    </div>
                    <div className="w-full p-8 lg:w-1/2">
                        <h2 className="text-5xl font-monoton font-extrabold uppercase text-center">Luxion</h2>
                        <p className="text-xl text-gray-700 text-center">Register</p>
                        {error && <p className="text-red-500 text-center">{error}</p>}
                        {success && <p className="text-green-500 text-center">{success}</p>}
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b border-purple-300 w-1/5 lg:w-1/4"></span>
                            <p className="text-xs text-center text-gray-500 uppercase">or Register with email</p>
                            <span className="border-b border-purple-300 w-1/5 lg:w-1/4"></span>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="relative mt-4">
                                <UserIcon className="absolute inset-y-0 mt-10 left-3 flex items-center text-gray-500 h-5 w-5" />
                                <label className="block text-gray-700 text-sm font-bold mb-2">User Name</label>
                                <input
                                    className="text-gray-700 focus:outline-none focus:shadow-outline shadow-sm shadow-purple-100 border border-purple-200 rounded py-2 pl-10 block w-full appearance-none"
                                    type="text"
                                    placeholder="Username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="relative mt-4">
                                <EnvelopeIcon className="absolute inset-y-0 mt-10 left-3 flex items-center text-gray-500 h-5 w-5" />
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input
                                    className="text-gray-700 focus:outline-none focus:shadow-outline shadow-sm shadow-purple-100 border border-purple-200 rounded py-2 pl-10 block w-full appearance-none"
                                    type="email"
                                    placeholder="mail@gmail.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mt-4 relative">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                </div>
                                <LockClosedIcon className="absolute inset-y-0 left-3 flex mt-10 items-center text-gray-500 h-5 w-5" />
                                <input
                                    className="text-gray-700 focus:outline-none focus:shadow-outline shadow-sm shadow-purple-100 border border-purple-200 rounded py-2 pl-10 block w-full appearance-none pr-10"
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center px-3 mt-6 cursor-pointer"
                                    onClick={() => setIsPasswordVisible(prevState => !prevState)}
                                >
                                    {isPasswordVisible ? (
                                        <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5 text-gray-500" />
                                    )}
                                </button>
                            </div>
                            <div className="mt-8">
                                <TertiryButton text="Signup" className="font-extrabold w-full" type="submit" />
                            </div>
                        </form>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b border-purple-300 w-1/5 md:w-1/4"></span>
                            <a href="/login" className="text-xs text-gray-500 uppercase">or Login</a>
                            <span className="border-b border-purple-300 w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default SignUp;
