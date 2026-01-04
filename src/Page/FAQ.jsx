import React, { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I adopt a pet through PawMart?",
      answer: "You can browse available pets in our adoption section, submit an application, and our team will contact you within 24-48 hours to schedule a meet-and-greet. All pets are vaccinated, spayed/neutered, and health-checked before adoption.",
      icon: "🐕",
      category: "Adoption"
    },
    {
      question: "What types of pet services do you offer?",
      answer: "We offer a comprehensive range of services including pet grooming, veterinary care, training sessions, pet sitting, and dog walking. Our partners are all verified professionals with proper certifications.",
      icon: "🛠️",
      category: "Services"
    },
    {
      question: "How does the pet delivery service work?",
      answer: "We offer safe and comfortable delivery for pet supplies, food, and accessories. Delivery times vary by location (1-3 business days). Live animal delivery is handled by specialized pet transport services with trained handlers.",
      icon: "🚚",
      category: "Delivery"
    },
    {
      question: "Are the pet products on your platform safe and authentic?",
      answer: "Absolutely! All products sold on PawMart are from verified suppliers, come with authenticity guarantees, and meet safety standards. We never compromise on quality when it comes to your pet's health.",
      icon: "✅",
      category: "Products"
    },
    {
      question: "Can I return a pet product if my pet doesn't like it?",
      answer: "Yes, we offer a 30-day return policy on most products (except perishable food items). The product must be unused and in original packaging. For adopted pets, we have a different return policy which our team will explain during adoption.",
      icon: "🔄",
      category: "Returns"
    },
    {
      question: "Do you offer emergency veterinary services?",
      answer: "We partner with 24/7 emergency vet clinics in most major cities. Through our app, you can find the nearest emergency clinic and book immediate appointments. Some partners also offer telemedicine consultations.",
      icon: "🏥",
      category: "Emergency"
    },
    {
      question: "How are pet sitters and walkers verified?",
      answer: "All service providers undergo thorough background checks, reference verification, and training. They're also insured and bonded for your peace of mind. You can read reviews from other pet parents before booking.",
      icon: "🔒",
      category: "Safety"
    },
    {
      question: "Do you support pet rescue organizations?",
      answer: "Yes! A portion of every transaction goes to support local animal shelters and rescue organizations. We also host regular adoption events and work closely with rescue groups to find homes for pets in need.",
      icon: "❤️",
      category: "Community"
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = ["All", "Adoption", "Services", "Delivery", "Products", "Emergency", "Safety", "Community"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredFaqs = activeCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-3">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
            Got questions? We've got answers! Find everything you need to know about 
            PawMart's services, policies, and how we care for your furry friends.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-content shadow-lg shadow-primary/25"
                  : "bg-base-100 text-base-content hover:bg-base-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredFaqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-base-100 rounded-2xl p-6 transition-all duration-300 ${
                openIndex === index
                  ? "shadow-xl border-2 border-primary/20"
                  : "shadow-lg hover:shadow-xl"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left flex items-start justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{faq.icon}</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${
                    openIndex === index
                      ? "bg-primary text-primary-content rotate-180"
                      : "bg-base-200 group-hover:bg-base-300"
                  }`}>
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
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index
                    ? "mt-6 opacity-100 max-h-96"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pt-4 border-t border-base-300">
                  <p className="text-base-content/70 mb-4">{faq.answer}</p>
                  {index === 0 && (
                    <button className="btn btn-sm btn-outline btn-primary rounded-full">
                      Learn more about adoption
                    </button>
                  )}
                  {index === 6 && (
                    <button className="btn btn-sm btn-outline btn-primary rounded-full">
                      View safety guidelines
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
};

export default FAQ;