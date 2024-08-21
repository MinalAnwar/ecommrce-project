import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TertiryButton from '../components/tertiryButton';
import { EnvelopeIcon, UserIcon, LockClosedIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';

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
        <div className="md:py-24 py-16 m-4">
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
                    <a href="{% url 'social:begin' 'google' %}" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md shadow-purple-100 hover:bg-gray-100">
                        <div className="px-4 py-3">
                            <svg className="h-6 w-6" viewBox="0 0 40 40">
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#FFC107"
                                />
                                <path
                                    d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                                    fill="#FF3D00"
                                />
                                <path
                                    d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                                    fill="#4CAF50"
                                />
                                <path
                                    d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                                    fill="#1976D2"
                                />
                            </svg>
                        </div>
                        <h1 className="px-4 py-3 w-5/6 text-center text-gray-700 font-bold">Sign Up with Google</h1>
                    </a>
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
    );
}

export default SignUp;
