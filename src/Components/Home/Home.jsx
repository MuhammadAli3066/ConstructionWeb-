import React from "react";
import { useState } from "react";

const Home = () => {


  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000); 
  };
  return (
    <div>
      <section
        className="bg-cover bg-center h-screen text-white"
        style={{ backgroundImage: "url('home.jpg')" }}
      >
        <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-4">Building the Future</h1>
          <p className="text-xl mb-8">
            Quality construction for your dream projects
          </p>
          <a
            href="/about"
            className="bg-gray-800 hover:bg-gray-600 text-white py-2 px-6 rounded-md"
          >
            Our Services
          </a>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Residential Construction
              </h3>
              <p>
                We build quality homes with modern designs and sustainable
                materials.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">
                Commercial Construction
              </h3>
              <p>
                Our commercial projects stand out with attention to detail and
                innovative solutions.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Renovations</h3>
              <p>
                We offer comprehensive renovation services to bring new life to
                old spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 ">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
          <div className="max-w-lg mx-auto border border-gray-400 p-10 rounded-lg">
            <form className="space-y-4 ">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-700 text-white"
                  rows="4"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gray-500 hover:bg-gray-600 border-white text-white py-2 px-6 rounded-md"
                  onClick={handleShowAlert}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
