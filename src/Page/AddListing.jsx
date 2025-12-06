import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const initialListingState = {
  name: "",
  category: "Pets",
  Price: 0,
  location: "",
  description: "",
  image: "",
  email: "",
  date: new Date().toISOString().slice(0, 10),
};

const AddListing = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [listingData, setListingData] = useState(initialListingState);
  const [isLoading, setIsLoading] = useState(false);

 
  useEffect(() => {
    if (user?.email) {
      setListingData((prev) => ({
        ...prev,
        email: user.email,
      }));
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setListingData((prevData) => ({
      ...prevData,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const listingToSend = listingData;

    axios
      .post("https://backend-five-mu-76.vercel.app/service", listingToSend)
      .then((res) => {
        console.log(res.data);

        if (res.data.success) {
          Swal.fire({
            icon: "success",
            title: "Listing Added!",
            text: "Your pet listing has been added successfully!",
            timer: 2000,
            showConfirmButton: false,
          });

          
          setListingData({
            ...initialListingState,
            email: user?.email || "",
          });

          setTimeout(() => {
            navigate("/services");
          }, 2000);
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Server error: Listing was not saved.",
          });
        }
      })
      .catch((err) => {
        console.error("Axios Error:", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Check the server connection.",
          footer: "Server URL: https://backend-five-mu-76.vercel.app/service",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h2 className="text-3xl font-bold text-center mb-6 text-primary">
         Add a New PawMart Listing
      </h2>

      <div className="card shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSubmit}>
          {/* Listing Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Pet/Product Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g., Golden Retriever Puppy"
              className="input input-bordered w-full"
              value={listingData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Category */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <select
                name="category"
                className="select select-bordered w-full"
                value={listingData.category}
                onChange={handleChange}
                required
              >
                <option disabled>Select a category</option>
                <option>Pets</option>
                <option>Accessories</option>
                <option>Food</option>
                <option>Care Products</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price (0 for Adoption)</span>
              </label>
              <input
                type="number"
                name="Price"
                placeholder="0"
                className="input input-bordered w-full"
                value={listingData.Price}
                onChange={handleChange}
                min="0"
                required
              />
            </div>

            {/* Location */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Location</span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="e.g., Dhaka"
                className="input input-bordered w-full"
                value={listingData.location}
                onChange={handleChange}
                required
              />
            </div>

            {/* Owner Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Contact Email</span>
              </label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full bg-gray-100"
                value={listingData.email}
                readOnly
              />
            </div>
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="url"
              name="image"
              placeholder="https://example.com/pet.jpg"
              className="input input-bordered w-full"
              value={listingData.image}
              onChange={handleChange}
              required
            />
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Friendly 2-month-old puppy available for adoption."
              className="textarea textarea-bordered h-24 w-full"
              value={listingData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Hidden Date */}
          <input type="hidden" name="date" value={listingData.date} />

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className={`btn btn-primary ${isLoading ? "animate-pulse" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading loading-spinner"></span>
                  Submitting...
                </>
              ) : (
                "Post Listing"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
