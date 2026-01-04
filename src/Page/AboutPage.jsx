import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Pet lover with 15+ years of veterinary experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      social: { linkedin: "#", twitter: "#", instagram: "#" }
    },
   
    {
      name: "Michael Chen",
      role: "Veterinary Director",
      bio: "Specialized in pet nutrition and wellness",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      social: { linkedin: "#", twitter: "#", instagram: "#" }
    },
    {
      name: "Emma Rodriguez",
      role: "Community Manager",
      bio: "Organizes pet adoption events nationwide",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      social: { linkedin: "#", twitter: "#", instagram: "#" }
    }
  ];

  const values = [
    { icon: "❤️", title: "Compassion", description: "Every pet deserves love and care" },
    { icon: "🤝", title: "Trust", description: "Building lasting relationships with families" },
    { icon: "🏆", title: "Excellence", description: "Highest standards in pet care" },
    { icon: "🌍", title: "Community", description: "Creating supportive pet-loving networks" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-base-100 to-base-200">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/5"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-6 border border-primary/20">
              <span className="text-lg">🏡</span>
              Our Story
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              More Than Just a{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Pet Platform
              </span>
            </h1>
            
            <p className="text-xl text-base-content/80 leading-relaxed mb-8">
              We're a community of passionate pet lovers dedicated to creating happy families 
              and giving every animal the loving home they deserve.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn btn-primary btn-lg rounded-full px-8 hover:scale-105 transition-transform">
                <span className="text-xl mr-2">🐾</span>
                Meet Our Pets
              </Link>
              <Link to="/contact" className="btn btn-outline btn-primary btn-lg rounded-full px-8 hover:scale-105 transition-transform">
                <span className="text-xl mr-2">💌</span>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <div className="bg-base-100 rounded-3xl p-8 md:p-12 shadow-2xl border border-base-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                <span className="text-3xl">🎯</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-base-content/70 mb-6 leading-relaxed">
                To connect loving families with pets in need, providing a seamless adoption 
                experience while promoting responsible pet ownership and animal welfare.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary">✓</span>
                  </div>
                  <span>Reduce shelter animal populations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary">✓</span>
                  </div>
                  <span>Educate on responsible pet care</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary">✓</span>
                  </div>
                  <span>Support pet owners with resources</span>
                </div>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12 border border-primary/20">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6">
                <span className="text-3xl">✨</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-base-content/70 mb-6 leading-relaxed">
                A world where every pet has a loving home, and every family experiences 
                the joy and companionship that pets bring into our lives.
              </p>
              <div className="bg-base-100/80 backdrop-blur-sm rounded-2xl p-6">
                <p className="text-xl italic text-center text-base-content/80">
                  "Creating a future where no pet is left behind, and every tail wags 
                  with the happiness of belonging."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-20 bg-base-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 border border-primary/20">
              <span className="text-lg">🌟</span>
              Our Values
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Stand For
              </span>
            </h2>
            <p className="text-lg text-base-content/70">
              These principles guide everything we do at PawMart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-base-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-base-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-base-content/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 md:py-20 bg-base-200/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4 border border-primary/20">
              <span className="text-lg">👥</span>
              Meet Our Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Hearts Behind{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                PawMart
              </span>
            </h2>
            <p className="text-lg text-base-content/70">
              Passionate individuals dedicated to making a difference
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-base-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent"></div>
                </div>
                
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-base-content/70 mb-4">{member.bio}</p>
                  
                  <div className="flex justify-center gap-3">
                    <a href={member.social.linkedin} className="btn btn-ghost btn-circle hover:bg-primary/10">
                      💼
                    </a>
                    <a href={member.social.twitter} className="btn btn-ghost btn-circle hover:bg-primary/10">
                      🐦
                    </a>
                    <a href={member.social.instagram} className="btn btn-ghost btn-circle hover:bg-primary/10">
                      📸
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "10,000+", label: "Pets Adopted", icon: "🐕" },
                { number: "500+", label: "Happy Families", icon: "🏠" },
                { number: "50+", label: "Cities Covered", icon: "🌍" },
                { number: "24/7", label: "Support Available", icon: "💖" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</p>
                  <p className="text-base-content/70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 md:p-12 text-center text-primary-content">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Join our community and help us create more happy endings for pets in need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn btn-lg bg-white text-primary hover:bg-base-100 rounded-full px-8 hover:scale-105 transition-transform">
                <span className="text-xl mr-2">🐾</span>
                Adopt a Pet
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg border-white text-white hover:bg-white/20 rounded-full px-8 hover:scale-105 transition-transform">
                <span className="text-xl mr-2">🤝</span>
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;