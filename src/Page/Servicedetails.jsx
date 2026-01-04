import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Servicedetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();

  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://backend-as-10-mu-76.vercel.app/service/${id}`);

        if (!res.data || res.data.error) {
          setError("Service not found");
          setService(null);
        } else {
          setService(res.data);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch service details");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchService();
  }, [id]);

  

  // Format price display
  const formatPrice = (price) => {
    if (price === 0 || price === "0") return "Free";
    if (!price) return "Contact for Price";
    return `$${price}`;
  };


  const handleRequest = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const requestData = {
      productId: id,
      productName: service?.name,
      buyerName: formData.get("buyerName"),
      email: formData.get("email"),
      quantity: parseInt(formData.get("quantity")) || 1,
      price: service?.Price || 0,
      address: formData.get("address"),
      phone: formData.get("phone"),
      date: new Date().toISOString().split("T")[0],
      additionalNotes: formData.get("additionalNotes") || "",
    };

    console.log("Sending request data:", requestData);

    try {
      const response = await fetch("https://backend-as-10-mu-76.vercel.app/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        alert(
          `Failed to send request: ${responseData.message || response.statusText
          }`
        );
        return;
      }

      Swal.fire({
        icon: "success",
        title: " Submitted Successfully",
        text: "Submitted request",
        timer: 1500,
        showConfirmButton: false,
      });
      e.target.reset();
      setShowModal(false);
    } catch (err) {
      console.error("Request error:", err);
      alert("Server error: could not send request.");
      setShowModal(false);
    }
  };


  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
        <div className="loading loading-spinner loading-lg text-primary"></div>
        <p className="mt-4 text-base-content">Loading service details...</p>
      </div>
    );
  }


  if (error || !service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-base-100">
        <div className="alert alert-error max-w-md bg-error text-error-content">
          {error}
        </div>
        <Link to="/services" className="btn btn-primary mt-4">
          Back to Services
        </Link>
      </div>
    );
  }


  return (
    <div className="bg-base-100 p-4 md:p-8">
      <div className=" mx-auto">
        <div className="bg-base-100 rounded-xl shadow-lg overflow-hidden border border-base-300">
          {/* Image */}
          <div className="">
            <img
              src={service?.image}
              alt={service?.name}
              className="w-[500px] h-[500px] mx-auto object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/800x400?text=Service+Image";
              }}
            />
          </div>

          {/* Content */}
          <div className="p-4 md:p-8">

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
              <div>
                <h1 className="text-3xl font-bold text-base-content">
                  {service?.name}
                </h1>
                <div className="flex items-center gap-2 mt-2">
                  <span className="badge badge-primary badge-lg">
                    {service?.category || "Uncategorized"}
                  </span>
                  {service?.Price === 0 && (
                    <span className="badge badge-secondary badge-lg">Free</span>
                  )}
                </div>
              </div>
            </div>

            <div className="my-2">
              {/* Description */}
              <div >
                <div className="bg-base-200 rounded-lg p-6 my-4">
                  <h2 className="text-2xl font-bold mb-4 text-base-content">
                    Description
                  </h2>
                  <p className="text-base-content leading-relaxed">
                    {service?.description || "No description provided."}
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                {/* Contact Info Card */}
                <div className="bg-primary text-primary-content p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                      <span>{service?.email || "Email not provided"}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>
                        {service?.location || "Location not specified"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact button */}
                <button
                  onClick={() => setShowModal(true)}
                  className="btn btn-primary w-full btn-lg"
                >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
      {
    showModal && (
      <div className="modal modal-open">
        <div className="modal-box bg-base-100 border border-base-300 max-w-md">
          <h3 className="font-bold text-lg mb-4 text-base-content">
            Fill The Form
          </h3>
          <p className="text-base-content/70 mb-6">
            Requesting: <span className="font-semibold">{service?.name}</span>
          </p>

          <form onSubmit={handleRequest}>
            <div className="space-y-4">
              {/* Product Name (Read-only) */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content">
                    Product/Service
                  </span>
                </label>
                <input
                  type="text"
                  value={service?.name}
                  className="input input-bordered w-full bg-base-200"
                  readOnly
                />
              </div>

              {/* Buyer Name */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content">
                    Your Full Name
                  </span>
                </label>
                <input
                  type="text"
                  name="buyerName"
                  defaultValue={user?.displayName}
                  placeholder="Enter your full name"
                  className="input input-bordered w-full bg-base-200"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Enter your email"
                  className="input input-bordered w-full bg-base-200"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content">
                    Phone Number
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="input input-bordered w-full bg-base-200"
                  required
                />
              </div>

              {/* Quantity */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content">
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  max="10"
                  defaultValue="1"
                  className="input input-bordered w-full bg-base-200"
                  required
                />
              </div>

              {/* Price */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content">
                    Price per item
                  </span>
                </label>
                <input
                  type="text"
                  value={formatPrice(service?.Price)}
                  className="input input-bordered w-full bg-base-200"
                  readOnly
                />
              </div>

              {/* Address */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content">
                    Delivery Address
                  </span>
                </label>
                <textarea
                  name="address"
                  placeholder="Enter your complete delivery address"
                  className="textarea textarea-bordered w-full bg-base-200"
                  rows="3"
                  required
                />
              </div>

              {/* Additional Notes */}
              <div>
                <label className="label">
                  <span className="label-text text-base-content">
                    Additional Notes (Optional)
                  </span>
                </label>
                <textarea
                  name="additionalNotes"
                  placeholder="Any special requirements or notes for the seller"
                  className="textarea textarea-bordered w-full bg-base-200"
                  rows="2"
                />
              </div>

              <div className="modal-action">
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                 
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
    </div >
  );
};

export default Servicedetails;
