import React, { useEffect, useState } from "react";

import { Link } from "react-router";
const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://backend-as-10-mu-76.vercel.app/service")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 my-10">
      {services.map((service) => (
        <div
          key={service.name}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            className="w-full object-cover"
            src={service?.image}
            alt={service.name}
          />
          <div className="p-4">
          <div className="flex justify-between items-center">
          <div>
           <h2 className="text-xl font-semibold mb-2">{service.name}</h2>
           <p className="text-gray-600 mb-2">{service.description}</p>
           </div>
           <div>
           <p className="text-gray-800 font-semibold mb-4">
              Price: {service.Price ? `$${service.Price}` : "Free"}
            </p>
            <p className="mb-2">{service.location}</p>
           </div>
          </div>
            <div className="text-center">
             
              <Link
                to={`/servicedetails/${service._id}`}
                className="w-full inline-block bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-secondary transition duration-300 transform hover:scale-105"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
