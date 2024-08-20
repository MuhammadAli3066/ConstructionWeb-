import React from "react";

const About = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center h-96 text-white"
        style={{ backgroundImage: "url('about1.jpg')" }}
      >
      </section>

      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
          <p className="text-lg leading-relaxed text-center mb-12">
            We are a leading construction company with over 20 years of
            experience in delivering high-quality projects. Our commitment to
            excellence has earned us a reputation for reliability, innovation,
            and integrity.
          </p>
          <div className="flex flex-wrap justify-center">
            <img
              src="about2.jpg"
              alt="Our Team"
              className="rounded-md shadow-lg w-2/3 md:w-1/2 lg:w-1/3 mb-8"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-lg leading-relaxed text-center mb-12">
            Our mission is to build safe, sustainable, and innovative structures
            that contribute to the betterment of communities. We aim to exceed
            our clients' expectations through exceptional craftsmanship and a
            dedicated focus on quality and safety.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="person1.jpg"
                alt="Team Member 1"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="person2.jpg"
                alt="Team Member 2"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
            <div className="text-center">
              <img
                src="person3.jpg"
                alt="Team Member 3"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">Mike Johnson</h3>
              <p className="text-gray-600">Lead Architect</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
