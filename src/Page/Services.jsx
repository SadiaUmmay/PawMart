import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { toast } from "react-hot-toast";
import axios from "axios";

const Services = () => {
  // State for services data
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // State for filters and search
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [locationFilter, setLocationFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Fetch services from backend
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      setLoading(true);
      
      const response = await axios.get("https://backend-as-10-mu-76.vercel.app/service"); 
      
     
      console.log("API Response:", response);
      console.log("Response data:", response.data);
      
     
      let servicesData = [];
      
      if (Array.isArray(response.data)) {
        // If response.data is already an array

        servicesData = response.data;
      } else if (response.data && Array.isArray(response.data.services)) {
        // If response.data has a services property that's an array
        servicesData = response.data.services;
      } else if (response.data && Array.isArray(response.data.data)) {
        // If response.data has a data property that's an array
        servicesData = response.data.data;
      } else if (response.data && typeof response.data === 'object') {
        // If response.data is an object, try to convert it to array
        servicesData = Object.values(response.data);
      } else {
        // If it's something else, wrap it in an array
        servicesData = [response.data];
      }
      
      // Ensure it's an array
      if (!Array.isArray(servicesData)) {
        servicesData = [];
      }
      
      console.log("Processed services data:", servicesData);
      setServices(servicesData);
      
      // Set dynamic price range based on actual data
      if (servicesData.length > 0) {
        const prices = servicesData.map(s => s.Price || s.price || 0);
        const maxPrice = Math.max(...prices, 1000);
        setPriceRange([0, maxPrice]);
      }
      
    } catch (err) {
      console.error("Error fetching services:", err);
      setError("Failed to fetch services. Please try again later.");
      toast.error("Failed to load services");
    } finally {
      setLoading(false);
    }
  };

  // Extract unique categories and locations from actual data
  const categories = ["All", ...new Set(services
    .map(service => service.category || service.Category || "Uncategorized")
    .filter(Boolean))];
    
  const locations = ["All", ...new Set(services
    .map(service => service.location || service.Location)
    .filter(Boolean))];

  // Filter and sort services based on actual data structure
  const filteredServices = services
    .filter(service => {
      if (!service) return false;
      
      const serviceName = service.name || service.Name || "";
      const serviceDesc = service.description || service.Description || "";
      const serviceCategory = service.category || service.Category || "";
      const servicePrice = service.Price || service.price || 0;
      const serviceLocation = service.location || service.Location || "";
      
      const matchesSearch = 
        serviceName.toLowerCase().includes(searchQuery.toLowerCase()) || 
        serviceDesc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = categoryFilter === "All" || serviceCategory === categoryFilter;
      const matchesPrice = servicePrice >= priceRange[0] && servicePrice <= priceRange[1];
      const matchesLocation = locationFilter === "All" || serviceLocation === locationFilter;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesLocation;
    })
    .sort((a, b) => {
      const aPrice = a.Price || a.price || 0;
      const bPrice = b.Price || b.price || 0;
      const aRating = a.rating || a.Rating || 0;
      const bRating = b.rating || b.Rating || 0;
      const aDate = a.createdAt || a.date || a.createdDate || 0;
      const bDate = b.createdAt || b.date || b.createdDate || 0;
      
      switch(sortBy) {
        case "price-low":
          return aPrice - bPrice;
        case "price-high":
          return bPrice - aPrice;
        case "rating":
          return bRating - aRating;
        case "newest":
          return new Date(bDate) - new Date(aDate);
        case "oldest":
          return new Date(aDate) - new Date(bDate);
        default:
          return 0;
      }
    });

  // Pagination logic
  const totalPages = Math.ceil(filteredServices.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentServices = filteredServices.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Reset filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setCategoryFilter("All");
    // Reset to actual price range
    if (services.length > 0) {
      const prices = services.map(s => s.Price || s.price || 0);
      const maxPrice = Math.max(...prices, 1000);
      setPriceRange([0, maxPrice]);
    } else {
      setPriceRange([0, 1000]);
    }
    setLocationFilter("All");
    setSortBy("newest");
    setCurrentPage(1);
    toast.success("Filters reset successfully!");
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 flex items-center justify-center">
        <div className="text-center">
          <span className="loading loading-spinner loading-lg text-primary"></span>
          <p className="mt-4 text-base-content">Loading services...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😿</div>
          <h3 className="text-2xl font-bold mb-2">Error Loading Services</h3>
          <p className="text-base-content/70 mb-6">{error}</p>
          <button
            onClick={fetchServices}
            className="btn btn-primary rounded-full px-8"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 border border-primary/20">
            <span className="text-lg">🔍</span>
            Browse Services
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pet Service
            </span>
          </h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Discover {services.length}+ amazing pet services, accessories, and care products
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-base-100 rounded-3xl shadow-xl border border-base-300 p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="text-base-content/60 text-lg">🔍</span>
              </div>
              <input
                type="text"
                placeholder="Search services, products, or pets..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="input input-bordered w-full pl-10 text-lg bg-base-200 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="flex gap-4">
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setCurrentPage(1);
                }}
                className="select select-bordered flex-1 bg-base-200 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                <option value="newest">Sort by: Newest</option>
                <option value="oldest">Sort by: Oldest</option>
                <option value="price-low">Sort by: Price Low to High</option>
                <option value="price-high">Sort by: Price High to Low</option>
                <option value="rating">Sort by: Highest Rated</option>
              </select>
              
              <button
                onClick={handleResetFilters}
                className="btn btn-outline btn-primary rounded-full px-6"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Filter Controls */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="label">
                <span className="label-text text-base-content font-semibold">Category</span>
              </label>
              <select
                value={categoryFilter}
                onChange={(e) => {
                  setCategoryFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="select select-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                {categories.map((cat, index) => (
                  <option key={cat || index} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            {/* Price Range - Dynamic based on actual data */}
            <div>
              <label className="label">
                <span className="label-text text-base-content font-semibold">
                  Price Range: ${priceRange[0]} - ${priceRange[1]}
                </span>
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="0"
                  max={priceRange[1]}
                  value={priceRange[0]}
                  onChange={(e) => {
                    setPriceRange([parseInt(e.target.value), priceRange[1]]);
                    setCurrentPage(1);
                  }}
                  className="range range-primary flex-1"
                />
                <input
                  type="range"
                  min="0"
                  max={priceRange[1]}
                  value={priceRange[1]}
                  onChange={(e) => {
                    setPriceRange([priceRange[0], parseInt(e.target.value)]);
                    setCurrentPage(1);
                  }}
                  className="range range-secondary flex-1"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div>
              <label className="label">
                <span className="label-text text-base-content font-semibold">Location</span>
              </label>
              <select
                value={locationFilter}
                onChange={(e) => {
                  setLocationFilter(e.target.value);
                  setCurrentPage(1);
                }}
                className="select select-bordered w-full bg-base-200 border-base-300 focus:border-primary focus:ring-2 focus:ring-primary/20"
              >
                {locations.map((loc, index) => (
                  <option key={loc || index} value={loc}>{loc}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 flex items-center justify-between">
            <p className="text-base-content/70">
              Showing <span className="font-bold text-primary">{currentServices.length}</span> of{" "}
              <span className="font-bold">{filteredServices.length}</span> results
            </p>
            <div className="flex items-center gap-2">
              <span className="text-base-content/60">Filtered by:</span>
              {categoryFilter !== "All" && (
                <span className="badge badge-primary badge-lg">{categoryFilter}</span>
              )}
              {locationFilter !== "All" && (
                <span className="badge badge-secondary badge-lg">{locationFilter}</span>
              )}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        {services.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">😿</div>
            <h3 className="text-2xl font-bold mb-2">No Services Available</h3>
            <p className="text-base-content/70 mb-6">Check back later or add a new service</p>
            <Link to="/add-service" className="btn btn-primary rounded-full px-8">
              Add New Service
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentServices.map((service) => {
                if (!service) return null;
                
                const serviceName = service.name || service.Name || "Unnamed Service";
                const serviceDesc = service.description || service.Description || "";
                const serviceCategory = service.category || service.Category || "Uncategorized";
                const servicePrice = service.Price || service.price || 0;
                const serviceLocation = service.location || service.Location || "";
                const serviceImage = service.image || service.Image || "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800";
                const serviceId = service._id || service.id;
                
                return (
                  <div
                    key={serviceId}
                    className="group bg-base-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-300 hover:border-primary/30 hover:-translate-y-2 relative"
                  >
                    {/* Image Container */}
                    <div className="relative overflow-hidden h-64">
                      <img
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        src={serviceImage}
                        alt={serviceName}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993?w=800";
                        }}
                      />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-content text-xs font-bold rounded-full shadow-lg backdrop-blur-sm">
                        {serviceCategory}
                      </div>
                      
                     
                    </div>

                    {/* Content Section */}
                    <div className="p-6">
                      {/* Title and Location */}
                      <div className="flex items-start justify-between mb-3">
                        <h2 className="text-xl font-bold text-base-content group-hover:text-primary transition-colors duration-300 truncate flex-1">
                          {serviceName}
                        </h2>
                        {serviceLocation && (
                          <span className="text-sm text-base-content/60 ml-2">{serviceLocation}</span>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-base-content/70 text-sm mb-2 line-clamp-2 min-h-[40px] leading-relaxed">
                        {serviceDesc}
                      </p>

                      {/* Price Section */}
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-sm text-base-content/60 mb-1">Price</p>
                          <p className="text-2xl font-bold text-primary">
                            {servicePrice ? `$${servicePrice}` : "Free"}
                          </p>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="text-center">
                        <Link
                          to={`/servicedetails/${serviceId}`}
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
                );
              })}
            </div>

            {/* No Results Message */}
            {currentServices.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold mb-2">No services found</h3>
                <p className="text-base-content/70 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={handleResetFilters}
                  className="btn btn-primary rounded-full px-8"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-4 mt-12">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="btn btn-outline btn-circle hover:scale-105 transition-transform disabled:opacity-50"
                >
                  ❮
                </button>
                
                <div className="flex gap-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => handlePageChange(pageNum)}
                        className={`btn btn-circle w-12 h-12 ${currentPage === pageNum ? 'btn-primary' : 'btn-outline'}`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="btn btn-outline btn-circle hover:scale-105 transition-transform disabled:opacity-50"
                >
                  ❯
                </button>
              </div>
            )}

            {/* Results Summary */}
            <div className="mt-8 text-center text-base-content/60 text-sm">
              Showing page {currentPage} of {totalPages} • {filteredServices.length} total items • {services.length} total services
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Services;