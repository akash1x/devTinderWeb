import React, { useState } from "react";

const LoginModal = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement login logic here
    console.log({ email: loginEmail, password: loginPassword });

    // Reset form
    setLoginEmail("");
    setLoginPassword("");
    // Close modal using daisyUI's modal method
    const modal = document.getElementById("login_modal") as HTMLDialogElement;
    if (modal) modal.close();
  };

  return (
    <dialog id="login_modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">Login to DevTinder</h3>
        <form onSubmit={handleLogin}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
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
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </div>

          <div className="modal-action">
            <button
              type="button"
              className="btn"
              onClick={() => {
                const modal = document.getElementById(
                  "login_modal"
                ) as HTMLDialogElement;
                if (modal) modal.close();
              }}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      </div>
    </dialog>
  );
};

export default LoginModal;
