import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const PopularSection = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://backend-as-10-mu-76.vercel.app/service")
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
  const top4Services = services.slice(0, 6);

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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
  {/* Header Section with Enhanced Design */}
  <div className="text-center mb-12 relative">
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    
    <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 border border-primary/20">
      <span className="text-lg">📋</span>
      Fresh Listings
    </span>
    
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Discover{" "}
      <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Recent Listings
      </span>
    </h1>
    
    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
      Explore our latest pet products and services. Fresh arrivals updated daily for your furry friends.
    </p>
  </div>

  {/* Grid Section */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {top4Services.map((service) => (
      <div
        key={service.name}
        className="group bg-base-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-300 hover:border-primary/30 hover:-translate-y-2 relative"
      >
        {/* Image Container */}
        <div className="relative overflow-hidden h-64">
          <img
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={service?.image}
            alt={service.name}
            loading="lazy"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-content text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
            New
          </div>
          
          {/* Quick View Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link
              to={`/service/${service._id}`}
              className="btn btn-primary btn-sm rounded-full px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              Quick View
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          {/* Title and Rating */}
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-300 truncate flex-1">
              {service.name}
            </h2>
           
          </div>

          {/* Description */}
          <p className="text-base-content/70 text-sm mb-2 line-clamp-2 min-h-10 leading-relaxed">
            {service.description}
          </p>

          {/* Price Section */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-base-content/60 mb-1">Price</p>
              <p className="text-2xl font-bold text-primary">
                {service.Price ? `$${service.Price}` : "Contact for Price"}
              </p>
            </div>
            
           
          </div>

          {/* Action Button */}
          <div className="text-center">
            <Link
              to={`/service/${service._id}`}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 group/btn"
            >
              <span>View Details</span>
              <span className="transform group-hover/btn:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </div>

          
        </div>
        
        {/* Corner Accent */}
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-primary/20 rotate-45"></div>
        </div>
      </div>
    ))}
  </div>

  {/* View All Button */}
  <div className="text-center mt-12">
    <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 max-w-3xl mx-auto border border-base-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-left">
          <h3 className="text-xl font-bold mb-2">Want to see more?</h3>
          <p className="text-base-content/70">Browse our complete collection of {top4Services.length * 10}+ items</p>
        </div>
        
        <Link
          to="/services"
          className="btn btn-primary btn-lg rounded-full px-8 hover:scale-105 transition-transform shadow-lg shadow-primary/25 group"
        >
          <span>Explore All Listings</span>
          <span className="ml-2 transform group-hover:translate-x-1 transition-transform">
            🔍
          </span>
        </Link>
      </div>
      
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-base-300">
        <div className="text-center">
          <p className="text-2xl font-bold text-primary">50+</p>
          <p className="text-sm text-base-content/60">Categories</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-secondary">100%</p>
          <p className="text-sm text-base-content/60">Verified Sellers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-accent">4.9★</p>
          <p className="text-sm text-base-content/60">Customer Rating</p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default PopularSection;
