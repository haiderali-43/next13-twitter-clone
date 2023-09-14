"use client"
// components/EditProfile.js
import React, { useState } from 'react';

const EditProfile = () => {
  const [profileData, setProfileData] = useState({
    displayName: '',
    bio: '',
    website: '',
    location: '',
    birthdate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile data submitted:', profileData);
    // Implement logic to update the user's profile data on your backend.
  };

  return (
    <div className="sm:w-[50%] w-[80%] absolute right-0 sm:relative  sm:m-auto md:border-r-2  h-[100vh] p-2">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">Display Name</label>
          <input
            type="text"
            name="displayName"
            value={profileData.displayName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            maxLength={20}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">Bio</label>
          <textarea
            name="bio"
            value={profileData.bio}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
            maxLength={160}
            rows={4}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">Website</label>
          <input
            type="text"
            name="website"
            value={profileData.website}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={profileData.location}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-600 font-semibold mb-2">Birthdate</label>
          <input
            type="date"
            name="birthdate"
            value={profileData.birthdate}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProfile;
