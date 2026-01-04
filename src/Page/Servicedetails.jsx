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
        <p className="mt-4 text-base-content">Loading  details...</p>
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
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-100 to-base-200 py-8 md:py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <div className="text-sm breadcrumbs text-base-content/60">
          <ul>
            <li><Link to="/services" className="hover:text-primary transition-colors">Listings</Link></li>
            <li><Link to="#" className="hover:text-primary transition-colors">{service?.category || "Category"}</Link></li>
            <li className="text-base-content font-semibold">{service?.name}</li>
          </ul>
        </div>
      </div>
  
      <div className="bg-base-100 rounded-3xl shadow-2xl overflow-hidden border border-base-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Left Column - Image */}
          <div className="relative bg-gradient-to-br from-primary/5 to-secondary/5 p-8 md:p-12">
            <div className="relative rounded-2xl overflow-hidden border border-base-300 shadow-lg">
              <img
                src={service?.image}
                alt={service?.name}
                className="w-full h-[500px] object-cover transition-transform duration-500 hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=800&q=80";
                }}
              />
              {/* Price Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-primary/90 backdrop-blur-sm text-primary-content px-4 py-2 rounded-full shadow-lg font-bold text-lg">
                  {service?.Price === 0 ? "FREE" : `$${service?.Price}`}
                </div>
              </div>
              {/* Favorite Button */}
              <button className="absolute top-4 left-4 w-10 h-10 bg-base-100/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-content transition-colors shadow-lg">
                <span className="text-xl">❤️</span>
              </button>
            </div>
            
            {/* Image Gallery (Placeholder) */}
            <div className="flex gap-3 mt-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-20 h-20 rounded-lg border border-base-300 overflow-hidden cursor-pointer hover:border-primary transition-colors">
                  <img
                    src={service?.image}
                    alt={`View ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
  
          {/* Right Column - Content */}
          <div className="p-8 md:p-12">
            {/* Header Section */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {service?.category || "Uncategorized"}
                    </span>
                    {service?.Price === 0 && (
                      <span className="px-3 py-1 bg-success/10 text-success text-xs font-semibold rounded-full">
                        🎁 Free
                      </span>
                    )}
                    <span className="px-3 py-1 bg-warning/10 text-warning text-xs font-semibold rounded-full flex items-center gap-1">
                      ⭐ 4.8
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-base-content mb-3 leading-tight">
                    {service?.name}
                  </h1>
                </div>
              </div>
              
              {/* Seller Info */}
              <div className="flex items-center gap-3 p-4 bg-base-200 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-white font-bold">
                  {service?.email?.charAt(0).toUpperCase() || "S"}
                </div>
                <div>
                  <p className="font-semibold">Listed by</p>
                  <p className="text-sm text-base-content/60">{service?.email || "Seller"}</p>
                </div>
              </div>
            </div>
  
            {/* Description Card */}
            <div className="mb-8">
              <div className="bg-gradient-to-br from-base-200 to-base-100 rounded-2xl p-6 border border-base-300 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl">📝</span>
                  </div>
                  <h2 className="text-2xl font-bold text-base-content">
                    Description
                  </h2>
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-base-content leading-relaxed text-lg">
                    {service?.description || "No description provided."}
                  </p>
                </div>
              </div>
            </div>
  
            {/* Contact Info Card */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/20 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl">📞</span>
                  </div>
                  <h2 className="text-2xl font-bold text-primary">
                    Contact Information
                  </h2>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-base-100/50 rounded-xl hover:bg-base-100 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl">📧</span>
                    </div>
                    <div>
                      <p className="text-sm text-base-content/60">Email</p>
                      <p className="font-semibold">{service?.email || "Email not provided"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-base-100/50 rounded-xl hover:bg-base-100 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <p className="text-sm text-base-content/60">Location</p>
                      <p className="font-semibold">{service?.location || "Location not specified"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Order Now Button */}
            <div className="mt-10">
              <button
                onClick={() => setShowModal(true)}
                className="w-full btn btn-primary btn-lg rounded-2xl hover:scale-105 transition-transform shadow-lg shadow-primary/25 group"
              >
                <span className="text-xl mr-3">🛒</span>
                <span className="text-lg">Order Now</span>
                <span className="ml-3 transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
              <p className="text-center text-sm text-base-content/60 mt-3">
                Secure checkout • 24/7 support • 30-day return policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    {/* Modal - Enhanced Design */}
    {showModal && (
      <div className="modal modal-open backdrop-blur-sm">
        <div className="modal-box bg-base-100 border-2 border-primary/20 rounded-3xl max-w-2xl shadow-2xl relative">
          {/* Modal Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl text-white">🛒</span>
            </div>
            <h3 className="text-2xl font-bold text-base-content mb-2">
              Complete Your Order
            </h3>
            <p className="text-base-content/70">
              Requesting: <span className="font-semibold text-primary">{service?.name}</span>
            </p>
          </div>
  
          <form onSubmit={handleRequest} className="space-y-6">
            {/* Product Name */}
            <div className="bg-base-200/50 rounded-2xl p-4">
              <label className="label">
                <span className="label-text text-base-content font-semibold">
                  Product/Service
                </span>
              </label>
              <input
                type="text"
                value={service?.name}
                className="input input-bordered w-full bg-base-100 border-base-300"
                readOnly
              />
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Buyer Name */}
              <div className="bg-base-200/50 rounded-2xl p-4">
                <label className="label">
                  <span className="label-text text-base-content font-semibold">
                    Your Full Name
                  </span>
                </label>
                <input
                  type="text"
                  name="buyerName"
                  defaultValue={user?.displayName}
                  placeholder="Enter your full name"
                  className="input input-bordered w-full bg-base-100 border-base-300 focus:border-primary"
                  required
                />
              </div>
  
              {/* Email */}
              <div className="bg-base-200/50 rounded-2xl p-4">
                <label className="label">
                  <span className="label-text text-base-content font-semibold">
                    Email Address
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  placeholder="Enter your email"
                  className="input input-bordered w-full bg-base-100 border-base-300 focus:border-primary"
                  required
                />
              </div>
  
              {/* Phone */}
              <div className="bg-base-200/50 rounded-2xl p-4">
                <label className="label">
                  <span className="label-text text-base-content font-semibold">
                    Phone Number
                  </span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  className="input input-bordered w-full bg-base-100 border-base-300 focus:border-primary"
                  required
                />
              </div>
  
              {/* Quantity */}
              <div className="bg-base-200/50 rounded-2xl p-4">
                <label className="label">
                  <span className="label-text text-base-content font-semibold">
                    Quantity
                  </span>
                </label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  max="10"
                  defaultValue="1"
                  className="input input-bordered w-full bg-base-100 border-base-300 focus:border-primary"
                  required
                />
              </div>
            </div>
  
            {/* Price */}
            <div className="bg-primary/5 rounded-2xl p-4 border border-primary/10">
              <label className="label">
                <span className="label-text text-primary font-semibold">
                  Price per item
                </span>
              </label>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  {formatPrice(service?.Price)}
                </span>
                <span className="text-sm text-base-content/60">Total: <span className="font-semibold">{formatPrice(service?.Price)}</span></span>
              </div>
            </div>
  
            {/* Address */}
            <div className="bg-base-200/50 rounded-2xl p-4">
              <label className="label">
                <span className="label-text text-base-content font-semibold">
                  Delivery Address
                </span>
              </label>
              <textarea
                name="address"
                placeholder="Enter your complete delivery address"
                className="textarea textarea-bordered w-full bg-base-100 border-base-300 focus:border-primary"
                rows="3"
                required
              />
            </div>
  
            {/* Additional Notes */}
            <div className="bg-base-200/50 rounded-2xl p-4">
              <label className="label">
                <span className="label-text text-base-content font-semibold">
                  Additional Notes (Optional)
                </span>
              </label>
              <textarea
                name="additionalNotes"
                placeholder="Any special requirements or notes for the seller"
                className="textarea textarea-bordered w-full bg-base-100 border-base-300 focus:border-primary"
                rows="2"
              />
            </div>
  
            {/* Modal Actions */}
            <div className="modal-action pt-6 border-t border-base-300">
              <button
                type="button"
                className="btn btn-outline btn-lg rounded-2xl px-8 hover:scale-105 transition-transform"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button type="submit" className="btn btn-primary btn-lg rounded-2xl px-8 hover:scale-105 transition-transform shadow-lg shadow-primary/25">
                <span className="text-xl mr-2">✓</span>
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </div>
  );
};

export default Servicedetails;
