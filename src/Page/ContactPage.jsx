import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    preferredContact: "email"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactOptions = [
    { 
      icon: "📞", 
      title: "Phone Support", 
      details: "+1 (555) 123-PAWS", 
      description: "Mon-Fri: 9AM-6PM EST",
      type: "phone",
      color: "primary"
    },
    { 
      icon: "📧", 
      title: "Email", 
      details: "help@pawmart.com", 
      description: "Response within 24 hours",
      type: "email",
      color: "secondary"
    },
    { 
      icon: "📍", 
      title: "Visit Us", 
      details: "123 Pet Street, Paw City", 
      description: "Appointment recommended",
      type: "location",
      color: "accent"
    },
    { 
      icon: "💬", 
      title: "Live Chat", 
      details: "Available 24/7", 
      description: "Click the chat icon below",
      type: "chat",
      color: "info"
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        preferredContact: "email"
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20">
              <span className="text-lg">💌</span>
              Get in Touch
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              We're Here to{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Help
              </span>
            </h1>
            
            <p className="text-xl text-base-content/80 leading-relaxed mb-8 max-w-2xl mx-auto">
              Have questions about adoption, pet care, or our services? Our team is ready 
              to assist you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactOptions.map((option, index) => (
              <div
                key={index}
                className={`group bg-base-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300`}
              >
                <div className={`w-14 h-14 rounded-xl bg-${option.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{option.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-lg font-semibold mb-1">{option.details}</p>
                <p className="text-sm text-base-content/60">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-base-100 rounded-3xl p-8 shadow-2xl border border-base-300">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Send Us a{" "}
                  <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>
                <p className="text-base-content/70">We typically respond within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="label">
                      <span className="label-text text-base-content font-semibold">Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary"
                      required
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text text-base-content font-semibold">Email Address *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="label">
                      <span className="label-text text-base-content font-semibold">Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 123-4567"
                      className="input input-bordered w-full bg-base-200 border-base-300 focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="label">
                      <span className="label-text text-base-content font-semibold">Subject *</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="select select-bordered w-full bg-base-200 border-base-300 focus:border-primary"
                      required
                    >
                      <option value="">Select a topic</option>
                      <option value="adoption">Adoption Inquiry</option>
                      <option value="pet-care">Pet Care Questions</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Preferred Contact Method</span>
                  </label>
                  <div className="flex flex-wrap gap-3">
                    {["email", "phone", "both"].map((method) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleChange}
                          className="radio radio-primary"
                        />
                        <span className="capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text text-base-content font-semibold">Your Message *</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you today?"
                    className="textarea textarea-bordered w-full h-40 bg-base-200 border-base-300 focus:border-primary"
                    required
                  />
                </div>

                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg rounded-full px-8 hover:scale-105 transition-transform flex-1"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading loading-spinner loading-sm"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <span className="text-xl mr-2">✉️</span>
                        Send Message
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                      preferredContact: "email"
                    })}
                    className="btn btn-outline btn-lg rounded-full px-6"
                  >
                    Clear
                  </button>
                </div>

                <p className="text-sm text-base-content/60 text-center">
                  By submitting this form, you agree to our{" "}
                  <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </p>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Office Info */}
              <div className="bg-linear-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 border border-primary/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Our Office</h3>
                    <p className="text-base-content/70">Visit us for in-person consultations</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-base-100/50 rounded-xl">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold">Main Office</p>
                      <p className="text-base-content/70">123 Pet Street, Paw City, PC 10001</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-base-100/50 rounded-xl">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <p className="font-semibold">Business Hours</p>
                      <div className="text-base-content/70">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 bg-base-100/50 rounded-xl">
                    <span className="text-2xl">🚗</span>
                    <div>
                      <p className="font-semibold">Parking & Accessibility</p>
                      <p className="text-base-content/70">Free parking available. Fully wheelchair accessible.</p>
                    </div>
                  </div>
                </div>
              </div>

             
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Find Our{" "}
              <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                Location
              </span>
            </h2>
            <p className="text-base-content/70">Visit our adoption center and meet our pets in person</p>
          </div>

          <div className="bg-base-100 rounded-3xl overflow-hidden shadow-2xl border border-base-300">
            <div className="relative h-96 bg-linear-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              {/* Map Placeholder */}
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                <p className="text-base-content/70">Map integration would go here</p>
                <div className="mt-4">
                  <button className="btn btn-primary rounded-full">
                    <span className="mr-2">📍</span>
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">🚗</div>
                  <h4 className="font-bold mb-1">Parking</h4>
                  <p className="text-sm text-base-content/70">Free onsite parking</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">♿</div>
                  <h4 className="font-bold mb-1">Accessibility</h4>
                  <p className="text-sm text-base-content/70">Wheelchair friendly</p>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl mb-2">🐕</div>
                  <h4 className="font-bold mb-1">Pet Friendly</h4>
                  <p className="text-sm text-base-content/70">Bring your pets!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-linear-to-r from-red-500/10 to-orange-500/10 rounded-3xl p-8 border border-red-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center">
                  <span className="text-3xl">🚨</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-1">Emergency Contact</h3>
                  <p className="text-base-content/70">For urgent pet medical emergencies</p>
                </div>
              </div>
              
              <div className="text-center md:text-right">
                <p className="text-2xl font-bold text-red-600 mb-1">+1 (555) 911-PAWS</p>
                <p className="text-sm text-base-content/60">Available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  );
};

export default ContactPage;