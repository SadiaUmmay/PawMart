import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PopularSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://backend-five-mu-76.vercel.app/service")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch services");
        }
        return res.json();
      })
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching services:", err);
        setLoading(false);
      
      });
  }, []);
  const top4Services = services.slice(0, 4);

  if (loading) {
    return (
      <div className="text-center p-10 text-xl">
        Loading popular services...
      </div>
    );
  }
  if (services.length === 0) {
    return (
      <div className="text-center p-10 text-xl text-red-500">
        No services found.
      </div>
    );
  }
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-primary">
        Our Most Popular Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
       
        {top4Services.map((service) => (
          <div
            key={service.name}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100 transform hover:scale-[1.02]"
          >
            <img
              className="w-full h-48 object-cover"
              src={service?.image}
              alt={service.name}
              loading="lazy"
            />
            <div className="p-5">
              <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
                {service.name}
              </h2>
            
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {service.description}
              </p>
              <p className="text-lg text-primary font-bold mb-4">
                Price:{" "}
                {service.Price ? `$${service.Price}` : "Contact for Price"}
              </p>

              <div className="text-center">
              
                <Link
                  to={`/service/${service._id}`}
                  className="w-full inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-secondary transition duration-300 transform hover:scale-105"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link
          to="/services"
          className="btn btn-lg btn-outline btn-primary shadow-md hover:shadow-lg"
        >
          See All Services
        </Link>
      </div>
    </div>
  );
};

export default PopularSection;
