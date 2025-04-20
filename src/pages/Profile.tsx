import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Personal Information</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered"
              defaultValue="DevUser"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered"
              defaultValue="user@example.com"
              readOnly
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Skills</span>
            </label>
            <input
              type="text"
              placeholder="Skills"
              className="input input-bordered"
              defaultValue="React, TypeScript, Node.js"
            />
          </div>
          <div className="card-actions justify-end mt-4">
            <button className="btn btn-primary">Update Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
