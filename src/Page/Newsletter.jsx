import React, { useState } from "react";
import { toast } from "react-hot-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-base-100 to-secondary/10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="bg-base-100 rounded-3xl shadow-2xl p-8 md:p-12 border border-base-300">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <span className="text-primary text-lg">📬</span>
                <span className="text-sm font-semibold text-primary">Stay Updated</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Subscribe to Our{" "}
                <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Paw-some Newsletter
                </span>
              </h2>
              
              <p className="text-lg text-base-content/70 mb-6">
                Get exclusive pet care tips, special offers, and adorable pet stories 
                delivered directly to your inbox. Join our community of pet lovers!
              </p>
              
              <div className="flex items-center gap-4 justify-center lg:justify-start">
               
                <div>
                  <p className="font-bold text-lg">1,500+ Happy Subscribers</p>
                  <p className="text-sm text-base-content/60">Join the community today</p>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:w-1/2 w-full">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="bg-base-200 rounded-2xl p-1">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-6 py-4 bg-transparent border-none focus:outline-none text-lg"
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn btn-primary btn-lg rounded-xl px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <span className="loading loading-spinner loading-sm"></span>
                          Subscribing...
                        </>
                      ) : (
                        <>
                          Subscribe Now
                          <span className="text-xl ml-2">→</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <p className="text-sm text-base-content/70">
                      Weekly pet care tips and advice
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <p className="text-sm text-base-content/70">
                      Exclusive discounts and offers
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <p className="text-sm text-base-content/70">
                      No spam, unsubscribe anytime
                    </p>
                  </div>
                </div>

                <p className="text-xs text-base-content/50 text-center">
                  By subscribing, you agree to our Privacy Policy and consent to receive 
                  updates from PawMart.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;