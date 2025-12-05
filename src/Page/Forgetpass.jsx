import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { useParams } from "react-router-dom";
import auth from "../firebase/firebase.config"; // fix path
import Swal from "sweetalert2";

const Forgetpass = () => {
  const { email } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userEmail = e.target.email.value;

    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Email Sent!",
          text: "Password reset email sent! Check your inbox.",
          confirmButtonText: "Open Gmail",
        }).then((result) => {
          if (result.isConfirmed) {
            window.open("https://mail.google.com/mail/u/0/", "_blank");
          }
        });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
        });
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h2 className="text-2xl font-bold text-center mb-4">
            Reset Password
          </h2>

          <form onSubmit={handleSubmit}>
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              defaultValue={email || ""}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />

            <button className="btn btn-neutral w-full mt-4">
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgetpass;
