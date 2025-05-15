import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 text-sm text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 px-6">
        <div>
          <h4 className="font-bold mb-3">SHOP</h4>
          <ul>
            <li>Phones</li>
            <li>Tablets</li>
            <li>Watches</li>
            <li>Home Appliances</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">SUPPORT</h4>
          <ul>
            <li>Chat with Us</li>
            <li>Order Help</li>
            <li>Returns</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">OFFERS</h4>
          <ul>
            <li>Military Offers</li>
            <li>Employee Offers</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">SUSTAINABILITY</h4>
          <ul>
            <li>Environment</li>
            <li>Privacy</li>
            <li>Security</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-3">ABOUT US</h4>
          <ul>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Samsung Design</li>
          </ul>
        </div>
      </div>
      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; 2025 Samsung. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
