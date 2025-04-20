import React, { useState } from "react";

const RegistrationModal = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement registration logic here
    console.log({ username, email, password });

    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
    // Close modal using daisyUI's modal method
    const modal = document.getElementById(
      "registration_modal"
    ) as HTMLDialogElement;
    if (modal) modal.close();
  };

  return (
    <dialog
      id="registration_modal"
      className="modal modal-bottom sm:modal-middle"
    >
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Register for DevTinder</h3>
        <form onSubmit={handleRegister}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Username"
              className="input input-bordered w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="modal-action">
            <button
              type="button"
              className="btn"
              onClick={() => {
                const modal = document.getElementById(
                  "registration_modal"
                ) as HTMLDialogElement;
                if (modal) modal.close();
              }}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default RegistrationModal;
