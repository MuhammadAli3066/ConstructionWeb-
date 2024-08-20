import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">AK construction</h3>
            <p className="text-sm">© 2024 AK construction. All rights reserved.</p>
          </div>
          <div className="space-x-4">
            <a href="/about" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="/faq" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
            <a href="/contact" className="text-gray-400 hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-400">
          <p>Follow us on:</p>
          <div className="space-x-4">
            <a href="https://github.com/MuhammadAli3066" className="hover:text-white">
              Github
            </a>
            <a href="https://www.linkedin.com/in/muhammad-ali-80ba401b5/" className="hover:text-white">
              linkedin
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
