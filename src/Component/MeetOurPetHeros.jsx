import React from 'react';
import img1 from "../assets/favouriter.jpg"
import img2 from "../assets/favourite2.jpg"
import img3 from "../assets/Favourite3.jpg"

const MeetOurPetHeroes = () => {
  return (
    <section className="my-10 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">🐕 Meet Our Pet Heroes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Hero 1 */}
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <img
            src={img1}
            alt="Sarah Johnson"
            className="w-full object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Sarah Johnson</h3>
          <p className="text-sm text-gray-500 mb-2">Adopter</p>
          <p className="text-gray-700 text-sm">
            Gave Max, a rescued Labrador, his forever home and showers him with love every day.
          </p>
        </div>

        {/* Hero 2 */}
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <img
            src={img2}
            alt="Rahim Ahmed"
            className="w-full  object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Rahim Ahmed</h3>
          <p className="text-sm text-gray-500 mb-2">Pet Caregiver</p>
          <p className="text-gray-700 text-sm">
            Dedicated volunteer at PawMart, ensuring rescued cats and dogs get proper care.
          </p>
        </div>

        {/* Hero 3 */}
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
          <img
            src={img3}
            alt="Anika Roy"
            className="w-full object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold">Anika Roy</h3>
          <p className="text-sm text-gray-500 mb-2">Adopter</p>
          <p className="text-gray-700 text-sm">
            Adopted Bella, a shy kitten, and helped her blossom into a playful companion.
          </p>
        </div>

      

      </div>
    </section>
  );
};

export default MeetOurPetHeroes;
