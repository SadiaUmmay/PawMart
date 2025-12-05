import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
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

  const fetchServices = async () => {
    try {
      const res = await fetch(
        `http://localhost:4000/mylistings?email=${user.email}`
      );
      const data = await res.json();
      setMyservice(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load services.");
    }
  };
  useEffect(() => {
    if (user?.email) {
      fetchServices();
    }
  }, [user?.email]);

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
    if (!window.confirm("Are you sure you want to delete this service?"))
      return;

    try {
      await axios.delete(`http://localhost:4000/mylistings/${serviceId}`);
      fetchServices();
    } catch (error) {
      console.error("Error deleting service:", error);
      alert("Failed to delete service. Please try again.");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm({
      ...editForm,
      [name]: value,
    });
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:4000/mylistings/${serviceToEdit._id}`,
        editForm
      );
      setEditModalOpen(false);
      fetchServices();
    } catch (error) {
      console.error("Error updating service:", error);
      alert("Failed to update service. Please try again.");
    }
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && editModalOpen) {
        setEditModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [editModalOpen]);

  if (!user) {
    return (
      <div className="text-center py-8 dark:text-white">
        Please log in to view your services.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 dark:bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 dark:text-white">Loading your services...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 dark:bg-gray-900 min-h-screen">
        <div className="text-center py-8">
          <p className="text-red-500 dark:text-red-400">{error}</p>
          <button
            onClick={fetchServices}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 dark:bg-gray-900 min-h-screen">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold dark:text-white">My Services</h1>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {myservice.length} service{myservice.length !== 1 ? "s" : ""} found
          </span>
        </div>

        {myservice.length === 0 ? (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <div className="text-gray-400 dark:text-gray-500 mb-4">
                <svg
                  className="w-16 h-16 mx-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mb-2">
                No services found
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500">
                You haven't created any services yet.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myservice.map((service) => (
              <div
                key={service._id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow dark:shadow-gray-800/30 overflow-hidden border dark:border-gray-700 transition-all hover:shadow-lg dark:hover:shadow-gray-800/50"
              >
                {service.image && (
                  <div className="relative h-48 overflow-hidden group">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-black/80 text-white text-xs rounded-full dark:bg-white/20 dark:text-gray-200 backdrop-blur-sm">
                        {service.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg dark:text-white truncate mr-2">
                      {service.name}
                    </h3>
                    <span className="font-medium dark:text-white whitespace-nowrap">
                      {service.Price === 0 ? (
                        <span className="text-green-600 dark:text-green-400">
                          Free
                        </span>
                      ) : (
                        `$${service.Price}`
                      )}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 min-h-[2.5rem]">
                    {service.description}
                  </p>

                  <div className="flex justify-between text-sm mb-6">
                    <span className="text-gray-500 dark:text-gray-400 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {service.location}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 flex items-center">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {new Date(service.date).toLocaleDateString()}
                    </span>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditClick(service)}
                      className="flex-1 btn btn-sm btn-outline btn-primary dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white flex items-center justify-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(service._id)}
                      className="flex-1 btn btn-sm btn-outline btn-error dark:border-red-500 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white flex items-center justify-center gap-1"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
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
            className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70 z-40"
            onClick={() => setEditModalOpen(false)}
          ></div>
          <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold dark:text-white">
                    Edit Service
                  </h2>
                  <button
                    onClick={() => setEditModalOpen(false)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl leading-none p-1"
                  >
                    &times;
                  </button>
                </div>

                <form onSubmit={handleSubmitEdit}>
                  {/* Image Preview */}
                  {editForm.image && (
                    <div className="mb-6">
                      <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                        Image Preview
                      </label>
                      <div className="relative h-48 rounded-lg overflow-hidden border dark:border-gray-600">
                        <img
                          src={editForm.image}
                          alt="Preview"
                          className="w-full h-full object-cover"
                        />
                        <a
                          href={editForm.image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
                        >
                          <span className="text-white bg-black/70 px-3 py-1 rounded">
                            View Full Image
                          </span>
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                        Service Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={editForm.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                        placeholder="Enter service name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                          Category *
                        </label>
                        <select
                          name="category"
                          value={editForm.category}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        >
                          <option value="">Select category</option>
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
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                          Price ($) *
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-2 text-gray-500 dark:text-gray-400">
                            $
                          </span>
                          <input
                            type="number"
                            name="Price"
                            value={editForm.Price}
                            onChange={handleInputChange}
                            className="w-full pl-8 pr-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            min="0"
                            step="0.01"
                            required
                            placeholder="0.00"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                        Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={editForm.location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                        placeholder="City, State"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                        Description *
                      </label>
                      <textarea
                        name="description"
                        value={editForm.description}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        rows="4"
                        required
                        placeholder="Describe your service in detail..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 dark:text-gray-300">
                        Image URL *
                      </label>
                      <input
                        type="url"
                        name="image"
                        value={editForm.image}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                        placeholder="https://example.com/image.jpg"
                      />
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        Enter a valid image URL
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-8 pt-6 border-t dark:border-gray-700">
                    <button
                      type="button"
                      onClick={() => setEditModalOpen(false)}
                      className="flex-1 btn btn-outline dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-600 hover:border-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 btn btn-primary dark:bg-blue-600 dark:hover:bg-blue-700 hover:bg-blue-600"
                    >
                      Update Service
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Myservice;
