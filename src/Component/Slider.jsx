import React from "react";
import { Link } from "react-router";
const Slider = () => {
    return (
        <div>
            <div className="carousel w-full max-h-[70vh] relative  overflow-hidden  border-4 border-base-300">
                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="absolute inset-0 bg-linear-to-r from-primary/70 via-primary/40 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-linear-to-t from-base-100/90 via-transparent to-transparent z-10"></div>

                    <img
                        src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1920&q=80"
                        className="w-full h-[70vh] object-cover"
                        alt="Happy dog with family"
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-start px-6 md:px-16 lg:px-24">
                        <div className="max-w-2xl">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6 border border-white/30">
                                <span className="text-lg animate-pulse">❤️</span>
                                <span>Featured Adoption</span>
                            </div>

                            {/* Main Heading */}
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                                Find Your
                                <span className="block text-secondary">Furry Friend</span>
                                Today!
                            </h1>

                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-xl">
                                Meet hundreds of loving pets waiting for their forever homes. Your perfect companion is just a click away.
                            </p>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="btn btn-primary btn-lg rounded-full px-8 hover:scale-105 transition-transform shadow-lg shadow-primary/50">
                                    <span className="text-xl mr-2">🏡</span>
                                    Browse Available Pets
                                </button>
                                <button className="btn btn-outline btn-lg text-white border-white hover:bg-white/20 rounded-full px-8 hover:scale-105 transition-transform">
                                    <span className="text-xl mr-2">📞</span>
                                    Schedule a Visit
                                </button>
                            </div>

                           
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="absolute left-5 right-5 top-1/2 z-30 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle btn-outline border-white/50 bg-black/30 hover:bg-black/50 text-white hover:scale-110 transition-all">
                            ❮
                        </a>
                        <a href="#slide2" className="btn btn-circle btn-outline border-white/50 bg-black/30 hover:bg-black/50 text-white hover:scale-110 transition-all">
                            ❯
                        </a>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce">
                        <div className="text-white text-center">
                            <span className="block text-sm mb-2">Scroll to explore</span>
                            <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="absolute inset-0 bg-gradient-to-l from-secondary/70 via-secondary/40 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-base-100/90 via-transparent to-transparent z-10"></div>

                    <img
                        src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1920&q=80"
                        className="w-full h-[70vh] object-cover"
                        alt="Rescued pets together"
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 text-center">
                        <div className="max-w-3xl">
                            {/* Quote Marks */}
                            <div className="text-6xl md:text-8xl text-white/30 mb-4">❝</div>

                            {/* Main Message */}
                            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                                    "Adopt, Don't Shop"
                                </span>
                                <span className="block text-xl md:text-3xl mt-4 text-white/90">
                                    Give a Pet Their Forever Home
                                </span>
                            </h2>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                                {[
                                    { number: "1M+", label: "Pets in Shelters" },
                                    { number: "670K", label: "Euthanized Yearly" },
                                    { number: "25%", label: "Are Purebred" },
                                    { number: "100%", label: "Deserve Love" }
                                ].map((stat, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:bg-white/20 transition-colors">
                                        <p className="text-2xl md:text-3xl font-bold text-white">{stat.number}</p>
                                        <p className="text-sm text-white/80">{stat.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                            <button className="btn btn-secondary btn-lg rounded-full px-8 mt-10 hover:scale-105 transition-transform shadow-lg shadow-secondary/50">
                                <span className="text-xl mr-2">❤️</span>
                                Why Choose Adoption?
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="absolute left-5 right-5 top-1/2 z-30 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle btn-outline border-white/50 bg-black/30 hover:bg-black/50 text-white hover:scale-110 transition-all">
                            ❮
                        </a>
                        <a href="#slide3" className="btn btn-circle btn-outline border-white/50 bg-black/30 hover:bg-black/50 text-white hover:scale-110 transition-all">
                            ❯
                        </a>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/70 via-accent/40 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-base-100/90 via-transparent to-transparent z-10"></div>

                    <img
                        src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=1920&q=80"
                        className="w-full h-[70vh] object-cover"
                        alt="Pet being cared for"
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-end px-6 md:px-16 lg:px-24">
                        <div className="max-w-2xl text-right">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                Every Pet Deserves
                                <span className="block text-accent">Love & Care</span>
                            </h1>

                            {/* Services Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { icon: "💉", service: "Veterinary Care" },
                                    { icon: "🛁", service: "Grooming" },
                                    { icon: "🎓", service: "Training" },
                                    { icon: "🏠", service: "Foster Support" }
                                ].map((item, index) => (
                                    <div key={index} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl hover:scale-105 transition-transform">
                                        <span className="text-2xl block mb-2">{item.icon}</span>
                                        <p className="text-white font-semibold">{item.service}</p>
                                    </div>
                                ))}
                            </div>

                            {/* CTA */}
                           <Link to='/services'>
                           <button className="btn btn-accent btn-lg rounded-full px-8 hover:scale-105 transition-transform shadow-lg shadow-accent/50">
                                <span className="text-xl mr-2">⭐</span>
                                Explore Our Services
                            </button>
                            </Link>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="absolute left-5 right-5 top-1/2 z-30 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle btn-outline border-white/50 bg-black/30 hover:bg-black/50 text-white hover:scale-110 transition-all">
                            ❮
                        </a>
                        <a href="#slide4" className="btn btn-circle btn-outline border-white/50 bg-black/30 hover:bg-black/50 text-white hover:scale-110 transition-all">
                            ❯
                        </a>
                    </div>
                </div>

                {/* Slide 4 */}
                <div id="slide4" className="carousel-item relative w-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-secondary/40 to-accent/60 z-10"></div>

                    <img
                        src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1920&q=80"
                        className="w-full h-[70vh] object-cover"
                        alt="Happy pet community"
                    />

                    {/* Content Overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 md:px-16 lg:px-24 text-center">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                                Join Our
                                <span className="block text-warning">Pet Loving</span>
                                Community
                            </h2>

                            {/* Newsletter Signup */}
                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 mb-6">
                                <p className="text-white text-lg mb-4">Get updates on new pets, events, and adoption stories</p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="flex-1 px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-warning"
                                    />
                                    <button className="btn btn-warning rounded-full px-6 hover:scale-105 transition-transform">
                                        Subscribe
                                    </button>
                                </div>
                            </div>

                            {/* Social Proof */}
                            <div className="flex items-center justify-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <div key={num} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                                            <img
                                                src={`https://images.unsplash.com/photo-${num === 1 ? '1494790108755' : num === 2 ? '1507003211169' : num === 3 ? '1438761681033' : num === 4 ? '1472099645785' : '1535713875002'}-2616b612b786?auto=format&fit=crop&w=100&q=80`}
                                                alt="Community member"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    ))}
                                </div>
                                <p className="text-white">Join 5,000+ pet lovers</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="absolute left-5 right-5 top-1/2 z-30 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle btn-outline border-white/50 bg-black/30 hover:bg-black/50 text-white hover:scale-110 transition-all">
                            ❮
                        </a>
                        <a href="#slide1" className="btn btn-circle btn-outline border-white/50 bg-black/30 hover:bg-black/50 text-white hover:scale-110 transition-all">
                            ❯
                        </a>
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
                    {[1, 2, 3, 4].map((dot) => (
                        <a
                            key={dot}
                            href={`#slide${dot}`}
                            className="w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-colors"
                        ></a>
                    ))}
                </div>

               
            </div>

        
        </div>
    );
};

export default Slider;
