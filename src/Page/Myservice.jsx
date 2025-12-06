import axios from "axios";
import React, { useContext, useEffect, useState, useCallback } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Myservice = () => {
  const [myservice, setMyservice] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [serviceToEdit, setServiceToEdit] = useState(null);

  const [editForm, setEditForm] = useState({
    name: "",
    category: "",
    Price: "",
    location: "",
    description: "",
    image: "",
  });

  const { user } = useContext(AuthContext);

  const fetchServices = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://backend-five-mu-76.vercel.app/mylistings?email=${user.email}`
      );
      const data = await res.json();

      setMyservice(data);
    } catch (err) {
      setError("Failed to load services.");
    } finally {
      setLoading(false);
    }
  }, [user?.email]);

  useEffect(() => {
    if (user?.email) {
      fetchServices();
    }
  }, [fetchServices]);

  
  const handleEditClick = (service) => {
    setServiceToEdit(service);
    setEditForm({
      name: service.name,
      category: service.category,
      Price: service.Price,
      location: service.location,
      description: service.description,
      image: service.image,
    });
    setEditModalOpen(true);
  };

  const handleDeleteClick = async (serviceId) => {
    if (!window.confirm("Are you sure you want to delete this Listing?")) return;

    try {
      await axios.delete(`https://backend-five-mu-76.vercel.app/mylistings/${serviceId}`);
      fetchServices();
    } catch (error) {
      console.error("Error deleting service:", error);
      alert("Failed to delete List. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://backend-five-mu-76.vercel.app/mylistings/${serviceToEdit._id}`,
        editForm
      );

      setEditModalOpen(false);
      fetchServices();
    } catch (error) {
      console.error("Error updating service:", error);
      alert("Failed to update listing. Please try again.");
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setEditModalOpen(false);
    };

    if (editModalOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [editModalOpen]);

  if (!user) {
    return (
      <div className="text-center py-8 dark:text-white">
        Please log in to view your Listing.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin h-10 w-10 border-b-2 border-blue-500 rounded-full mx-auto"></div>
          <p className="mt-3 dark:text-gray-300">Loading your Listing...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20 dark:text-white">
        <p className="text-red-500">{error}</p>
        <button
          onClick={fetchServices}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  
  return (
    <>
    
      <div className="container mx-auto px-4 py-10 dark:bg-gray-900 min-h-screen">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold dark:text-white">Listing</h1>
          <span className="text-sm dark:text-gray-300">
            {myservice.length} listing{myservice.length !== 1 && "s"} found
          </span>
        </div>

        {/* Empty State */}
        {myservice.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 dark:text-gray-500 mb-2">
              No Listing found.
            </p>
            <p className="text-sm dark:text-gray-400">
              You haven't created any Listing yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {myservice.map((service) => (
              <div
                key={service._id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow"
              >
                {service.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-5">
                  <h3 className="font-bold text-lg dark:text-white">{service.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 my-2">
                    {service.description.slice(0, 80)}...
                  </p>

                  <div className="flex justify-between text-sm my-3 dark:text-gray-400">
                    <span>{service.location}</span>
                    <span>{new Date(service.date).toLocaleDateString()}</span>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <button
                      onClick={() => handleEditClick(service)}
                      className="btn btn-sm btn-outline btn-primary flex-1"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(service._id)}
                      className="btn btn-sm btn-outline btn-error flex-1"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}

          </div>
        )}
      </div>

      {/* Edit Modal */}
      {editModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setEditModalOpen(false)}
          ></div>

          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-lg w-full p-6 overflow-y-auto max-h-[90vh]">

              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold dark:text-white">
                  Edit Service
                </h2>
                <button
                  className="text-2xl dark:text-gray-300"
                  onClick={() => setEditModalOpen(false)}
                >
                  &times;
                </button>
              </div>

              {/* Edit Form */}
              <form onSubmit={handleSubmitEdit}>
                <div className="space-y-4">

                  <input
                    type="text"
                    name="name"
                    value={editForm.name}
                    onChange={handleInputChange}
                    placeholder="Service Name"
                    className="input input-bordered w-full"
                    required
                  />

                  <select
                    name="category"
                    value={editForm.category}
                    onChange={handleInputChange}
                    className="input input-bordered w-full"
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Pets">Pets</option>
                    <option value="Home Services">Home Services</option>
                    <option value="Tutoring">Tutoring</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Technology">Technology</option>
                    <option value="Health & Wellness">
                      Health & Wellness
                    </option>
                    <option value="Other">Other</option>
                  </select>

                  <input
                    type="number"
                    name="Price"
                    value={editForm.Price}
                    onChange={handleInputChange}
                    placeholder="Price"
                    className="input input-bordered w-full"
                    min="0"
                    required
                  />

                  <input
                    type="text"
                    name="location"
                    value={editForm.location}
                    onChange={handleInputChange}
                    placeholder="Location"
                    className="input input-bordered w-full"
                    required
                  />

                  <textarea
                    name="description"
                    value={editForm.description}
                    onChange={handleInputChange}
                    placeholder="Description"
                    className="textarea textarea-bordered w-full"
                    rows="4"
                    required
                  ></textarea>

                  <input
                    type="url"
                    name="image"
                    value={editForm.image}
                    onChange={handleInputChange}
                    placeholder="Image URL"
                    className="input input-bordered w-full"
                    required
                  />

                </div>

                <div className="flex gap-4 mt-6">
                  <button
                    type="button"
                    onClick={() => setEditModalOpen(false)}
                    className="btn flex-1"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary flex-1"
                  >
                    Update Service
                  </button>
                </div>

              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Myservice;
