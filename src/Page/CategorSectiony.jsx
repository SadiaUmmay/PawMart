import React from "react";
import { Link } from "react-router-dom";

const categories = [
 
  {
    name: "Premium Food",
    image: "https://images.unsplash.com/photo-1518717202715-9fa9d099f58a?auto=format&fit=crop&w=600&q=80",
    description: "Nutrition for every life stage",
    route: "/services",
    icon: "🥩",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=600&q=80",
    description: "Toys, beds & essentials",
    route: "/services",
    icon: "🎮",
  },
  {
    name: "Pet Care",
    image: "https://images.unsplash.com/photo-1509205477838-a534e43a849f?auto=format&fit=crop&w=600&q=80",
    description: "Grooming & health services",
    route: "/services",
    icon: "💇‍♀️",
  },
  {
    name: "Training",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80",
    description: "Obedience & behavior classes",
    route: "/services",
    icon: "🎓",
  },
  
  {
    name: "Pet Sitting",
    image: "https://images.unsplash.com/photo-1560743641-3914f2c45636?auto=format&fit=crop&w=600&q=80",
    description: "Trusted care while you're away",
    route: "/services",
    icon: "🏠",
  },
  {
    name: "Pet Supplies",
    image: "https://images.unsplash.com/photo-1574231164645-d6f0e8553590?auto=format&fit=crop&w=600&q=80",
    description: "Everything your pet needs",
    route: "/services",
    icon: "🛍️",
  },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-3">
            Our Categories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Find Everything Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Pet Needs
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            From adoption to accessories, we have everything to keep your furry friends happy and healthy
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <Link
              to={cat.route}
              key={cat.name}
              className="group relative bg-base-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-base-300"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-base-100/80 via-transparent to-transparent" />
                {/* Icon */}
                <div className="absolute top-4 right-4 text-3xl bg-base-100/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                  {cat.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <span className="text-xs text-primary font-semibold bg-primary/10 px-2 py-1 rounded-full">
                    {index + 1}
                  </span>
                </div>
                <p className="text-sm text-base-content/60 mb-4">{cat.description}</p>
                
                {/* Hover Indicator */}
                <div className="flex items-center text-primary text-sm font-medium">
                  <span>Explore</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 left-0 w-12 h-12 overflow-hidden">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-primary/20 rotate-45"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 btn btn-primary btn-lg rounded-full px-8 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25"
          >
            <span>View All Categories</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;