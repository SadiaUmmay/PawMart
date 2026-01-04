import React from 'react';

const AdoptPet = () => {
    return (
      <div className="my-10 py-10">
      {/* Background decorative elements */}
      <div className="absolute left-0 right-0  py-40 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 -z-10"></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header Section */}
        <div className="text-center my-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 border border-primary/20">
            <span className="text-lg">❤️</span>
            Make a Difference
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              PawMart Adoption
            </span>
          </h2>
          
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Discover the joy of giving a second chance and the impact of choosing adoption
          </p>
        </div>
    
        {/* Main Content Section */}
        <div className="bg-gradient-to-br from-base-100 via-base-100 to-base-100/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-base-300 max-w-4xl mx-auto">
          {/*  Header */}
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-primary/20">
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-2xl">🐾</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary">The Adoption Advantage</h3>
                <p className="text-base-content/60 text-sm">Your Guide to Making a Life-Changing Decision</p>
              </div>
            </div>
          </div>
    
          <div className="p-8 md:p-10">
            {/* Hero Statement */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-center font-semibold leading-relaxed text-base-content/90 italic border-l-4 border-primary pl-6 py-2">
                "Every pet deserves a loving home. By adopting from PawMart, you're not just bringing a furry friend into your life—you're saving a life."
              </p>
            </div>
    
            {/* Main Content with Icons */}
            <div className="space-y-8 mb-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 hover:border-primary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-xl">🏠</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-primary">Second Chances</h4>
                      <p className="text-base-content/70">
                        Give rescued animals a new beginning. Our pets are fully vetted, vaccinated, and ready for their forever homes.
                      </p>
                    </div>
                  </div>
                </div>
    
                <div className="bg-secondary/5 p-6 rounded-2xl border border-secondary/10 hover:border-secondary/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="text-xl">🌍</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-secondary">Community Impact</h4>
                      <p className="text-base-content/70">
                        Adoption helps reduce stray populations and supports our mission to create a safer community for all animals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
    
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-accent/5 p-6 rounded-2xl border border-accent/10 hover:border-accent/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-xl">💝</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-accent">Responsible Ownership</h4>
                      <p className="text-base-content/70">
                        We promote responsible pet ownership through education, support, and lifetime commitment guidance.
                      </p>
                    </div>
                  </div>
                </div>
    
                <div className="bg-success/5 p-6 rounded-2xl border border-success/10 hover:border-success/30 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                      <span className="text-xl">✨</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2 text-success">Transformative Joy</h4>
                      <p className="text-base-content/70">
                        Experience the unparalleled joy of watching a rescued pet blossom in a loving environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Quote Section */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-base-200 to-base-100 rounded-2xl p-6 border border-base-300">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="text-2xl">💬</span>
                    </div>
                  </div>
                  <div>
                    <blockquote className="text-lg italic text-base-content/80 mb-2">
                      "Choosing adoption over buying creates a ripple effect of positive change—for the animal, your family, and the entire community."
                    </blockquote>
                    <p className="text-sm text-base-content/60">— PawMart Adoption Team</p>
                  </div>
                </div>
              </div>
            </div>
    
            {/* Call to Action */}
            <div className="text-center pt-6 border-t border-base-300">
              <div className="inline-flex flex-col sm:flex-row gap-4 items-center">
                <button className="btn btn-primary btn-lg rounded-full px-8 hover:scale-105 transition-transform shadow-lg shadow-primary/25">
                  <span className="text-xl mr-2">🏡</span>
                  Start Your Adoption Journey
                </button>
                <button className="btn btn-outline btn-primary btn-lg rounded-full px-8 hover:scale-105 transition-transform">
                  <span className="text-xl mr-2">📞</span>
                  Speak to an Advisor
                </button>
              </div>
              <p className="text-sm text-base-content/60 mt-4">
                All adoption fees include vaccination, spay/neuter, microchip, and 30-day health guarantee
              </p>
            </div>
          </div>
        </div>
    
     
      </div>
    </div>
    );
};

export default AdoptPet;