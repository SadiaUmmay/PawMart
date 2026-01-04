import React from 'react';
import img1 from "../assets/favouriter.jpg"
import img2 from "../assets/favourite2.jpg"
import img3 from "../assets/Favourite3.jpg"

const MeetOurPetHeroes = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 relative overflow-hidden">
      {/* Newsletter-style decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-50"></div>
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl opacity-30"></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Enhanced Header with Newsletter Style */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 border border-primary/20">
            <span className="text-lg animate-pulse">✨</span>
            <span className="text-primary">Community Spotlight</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Paw-some Heroes
            </span>
          </h2>

          <p className="text-lg text-base-content/70 max-w-2xl mx-auto mb-8">
            Real stories from our community of pet lovers. Their journeys inspire us every day.
          </p>

          {/* Stats like Newsletter */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-base-100/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-base-300 shadow-sm">
              <p className="text-2xl font-bold text-primary">150+</p>
              <p className="text-sm text-base-content/60">Pets Adopted</p>
            </div>
            <div className="bg-base-100/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-base-300 shadow-sm">
              <p className="text-2xl font-bold text-secondary">50+</p>
              <p className="text-sm text-base-content/60">Active Volunteers</p>
            </div>
            <div className="bg-base-100/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-base-300 shadow-sm">
              <p className="text-2xl font-bold text-accent">4.9★</p>
              <p className="text-sm text-base-content/60">Community Rating</p>
            </div>
          </div>
        </div>

        {/* Heroes Grid - Newsletter Style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Hero 1 */}
          <div className="group bg-base-100/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-300 hover:border-primary/30 relative">
            {/* Newsletter-style Top Banner */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 text-center border-b border-primary/20">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">🏡</span>
                <span className="font-semibold text-primary">Happy Adoption Story</span>
              </div>
            </div>

            <div className="p-6">
              {/* Profile with Avatar */}
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                    <img
                      src={img1}
                      alt="Sarah Johnson"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center border-2 border-base-100">
                    <span className="text-xs">💖</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">Sarah Johnson</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      Adopter
                    </span>
                    <span className="text-xs text-base-content/60">⭐ 4.8</span>
                  </div>
                </div>
              </div>

              {/* Pet Image */}
              <div className="mb-4 rounded-xl overflow-hidden border border-base-300">
                <img
                  src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80"
                  alt="Max the Labrador"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Max</p>
                    <p className="text-sm text-base-content/60">Labrador • 3 years</p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-success/10 text-success rounded-full">Adopted 2023</span>
                </div>

                <p className="text-base-content/70 text-sm leading-relaxed">
                  "Gave Max, a rescued Labrador, his forever home and showers him with love every day.
                  He's transformed our family completely!"
                </p>

                {/*  Quote */}
                <div className="bg-primary/5 rounded-lg p-3 border-l-4 border-primary">
                  <p className="text-sm italic text-base-content/80">
                    "Every pet deserves a second chance at happiness."
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-base-300">
                <button className="btn btn-ghost btn-sm hover:bg-primary/10">
                  <span className="mr-2">💬</span>
                  Send Message
                </button>
                <button className="btn btn-primary btn-sm rounded-full">
                  Read Full Story
                </button>
              </div>
            </div>
          </div>

          {/* Hero 2 */}
          <div className="group bg-base-100/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-300 hover:border-secondary/30 relative">
            <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 p-4 text-center border-b border-secondary/20">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">🤝</span>
                <span className="font-semibold text-secondary">Volunteer Spotlight</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-secondary/20">
                    <img
                      src={img2}
                      alt="Rahim Ahmed"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center border-2 border-base-100">
                    <span className="text-xs">⭐</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-secondary transition-colors">Rahim Ahmed</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                      Volunteer
                    </span>
                    <span className="text-xs text-base-content/60">⭐ 5.0</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 rounded-xl overflow-hidden border border-base-300">
                <img
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=80"
                  alt="Rahim volunteering"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Pet Caregiver</p>
                    <p className="text-sm text-base-content/60">2+ Years Service</p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-warning/10 text-warning rounded-full">Expert Level</span>
                </div>

                <p className="text-base-content/70 text-sm leading-relaxed">
                  "Dedicated volunteer at PawMart, ensuring rescued cats and dogs get proper care and find loving homes."
                </p>

                {/*  Stats */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-base-200/50 p-2 rounded-lg">
                    <p className="font-bold text-secondary">50+</p>
                    <p className="text-xs text-base-content/60">Pets Helped</p>
                  </div>
                  <div className="bg-base-200/50 p-2 rounded-lg">
                    <p className="font-bold text-secondary">300+</p>
                    <p className="text-xs text-base-content/60">Hours</p>
                  </div>
                  <div className="bg-base-200/50 p-2 rounded-lg">
                    <p className="font-bold text-secondary">15</p>
                    <p className="text-xs text-base-content/60">Foster Pets</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-base-300">
                <button className="btn btn-ghost btn-sm hover:bg-secondary/10">
                  <span className="mr-2">👏</span>
                  Applaud
                </button>
                <button className="btn btn-secondary btn-sm rounded-full">
                  Join as Volunteer
                </button>
              </div>
            </div>
          </div>

          {/* Hero 3 */}
          <div className="group bg-base-100/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-base-300 hover:border-accent/30 relative">
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 p-4 text-center border-b border-accent/20">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xl">🐱</span>
                <span className="font-semibold text-accent">Transformation Story</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent/20">
                    <img
                      src={img3}
                      alt="Anika Roy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full flex items-center justify-center border-2 border-base-100">
                    <span className="text-xs">🌟</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">Anika Roy</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="px-2 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      Adopter
                    </span>
                    <span className="text-xs text-base-content/60">⭐ 4.9</span>
                  </div>
                </div>
              </div>

              <div className="mb-4 rounded-xl overflow-hidden border border-base-300">
                <img
                  src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=800&q=80"
                  alt="Bella the kitten"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Bella</p>
                    <p className="text-sm text-base-content/60">Domestic Shorthair • 1 year</p>
                  </div>
                  <span className="text-xs px-3 py-1 bg-info/10 text-info rounded-full">Transformed!</span>
                </div>

                <p className="text-base-content/70 text-sm leading-relaxed">
                  "Adopted Bella, a shy kitten, and helped her blossom into a playful, confident companion."
                </p>

                {/* Transformation */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-base-200/50 p-3 rounded-lg">
                    <p className="text-xs text-base-content/60 mb-1">Before</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-error rounded-full"></div>
                        <span className="text-xs">Shy</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-error rounded-full"></div>
                        <span className="text-xs">Scared</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-accent/5 p-3 rounded-lg border border-accent/20">
                    <p className="text-xs text-accent mb-1">After</p>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-xs">Confident</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-success rounded-full"></div>
                        <span className="text-xs">Playful</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 pt-4 border-t border-base-300">
                <button className="btn btn-ghost btn-sm hover:bg-accent/10">
                  <span className="mr-2">💕</span>
                  Love This
                </button>
                <button className="btn btn-accent btn-sm rounded-full">
                  See Transformation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*  CTA */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 via-base-100 to-secondary/10 rounded-3xl p-8 border border-base-300 shadow-lg">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Share Your Story</h3>
            <p className="text-base-content/70 mb-6">
              Have an inspiring pet story? Share it with our community and inspire others!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn btn-primary btn-lg rounded-full px-8 hover:scale-105 transition-transform shadow-lg shadow-primary/25">
                <span className="text-xl mr-2">📖</span>
                Share Your Story
              </button>
              <button className="btn btn-outline btn-primary btn-lg rounded-full px-8 hover:scale-105 transition-transform">
                <span className="text-xl mr-2">👀</span>
                View More Stories
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetOurPetHeroes;
