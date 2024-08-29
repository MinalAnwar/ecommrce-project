
import React, { useState } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import TertiryButton from '../components/tertiryButton';

const ProfilePage = () => {
  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    designation: "Manager",
    dateOfBirth: "1990-01-01",
    email: "john.doe@example.com",
    phoneNumber: "+1234567890",
    address: "123 Main St, City, Country",
    cnic: "1234567890123",
    age: 30,
    gender: "male"
  });

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    setEditing(false);
    console.log("Saving data:", userData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  };

  return (
    <div>
      <Navbar isNotLanding="True" />
        <div className="min-h-screen mt-40 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
              <div className="text-center">
                <h2 className="text-4xl font-extrabold text-black">Profile</h2>
                <p className="mt-2 text-md text-gray-500">View and update your profile information</p>
              </div>
              <div className="mt-8 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-black">
                    Name
                  </label>
                  <div className="mt-1">
                    {editing ? (
                      <input id="name" name="name" type="text" value={userData.name} onChange={handleChange} className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md outline-none text-gray-500" />
                    ) : (
                      <p className="text-sm text-gray-500">{userData.name}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="designation" className="block text-lg font-medium text-black">
                    CNIC
                  </label>
                  <div className="mt-1">
                    {editing ? (
                      <input id="designation" name="designation" type="text" value={userData.designation} onChange={handleChange} className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md outline-none text-gray-500" />
                    ) : (
                      <p className="text-sm text-gray-500">{userData.cnic}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="dateOfBirth" className="block text-lg font-medium text-black">
                    Date of Birth
                  </label>
                  <div className="mt-1">
                    {editing ? (
                      <input id="dateOfBirth" name="dateOfBirth" type="text" value={userData.dateOfBirth} onChange={handleChange} className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm rounded-md outline-none text-gray-500" />
                    ) : (
                      <p className="text-sm text-gray-500">{userData.dateOfBirth}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-black">
                    Email Address
                  </label>
                  <div className="mt-1">
                    {editing ? (
                      <input id="email" name="email" type="email" value={userData.email} onChange={handleChange} className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md outline-none text-gray-500" />
                    ) : (
                      <p className="text-sm text-gray-500">{userData.email}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-lg font-medium text-black">
                    Phone Number
                  </label>
                  <div className="mt-1">
                    {editing ? (
                      <input id="phoneNumber" name="phoneNumber" type="tel" value={userData.phoneNumber} onChange={handleChange} className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md outline-none text-gray-500" />
                    ) : (
                      <p className="text-sm text-gray-500">{userData.phoneNumber}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label htmlFor="address" className="block text-lg font-medium text-black">
                    Address
                  </label>
                  <div className="mt-1">
                    {editing ? (
                      <textarea id="address" name="address" value={userData.address} onChange={handleChange} rows={3} className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md outline-none text-gray-500" />
                    ) : (
                      <p className="text-sm text-gray-500">{userData.address}</p>
                    )}
                  </div>
                </div>
                {editing ? (
                  <div className="flex justify-end">
                      <TertiryButton text="Save" className="w-full" onClick={handleSave} />
                  </div>
                ) : (
                  <div className="flex justify-end">
                      <TertiryButton text="Edit" className="w-full" onClick={handleEdit} />
                  </div>
                )}
              </div>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
