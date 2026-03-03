import React from "react";
import linkedInLogo from "../../assets/linkedIn.png";
import facebookLogo from "../../assets/facebook.png";
import twitterLogo from "../../assets/twitter.png";
import emailLogo from "../../assets/email.png";

const Footer = () => {
  return (
    <div className="bg-base-200 text-base-content p-10">
      <footer className="grid grid-cols-1 lg:grid-cols-6 gap-8">
        <aside className="lg:col-span-2">
          <h2 className="text-xl font-bold mb-3">CS — Ticket System</h2>

          <p className="w-4/5 text-sm text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a specimen book.
          </p>
        </aside>

        <nav className="space-y-3 text-gray-400">
          <h6 className="font-semibold text-white">Company</h6>
          <a className="link link-hover block">About us</a>
          <a className="link link-hover block">Our Mission</a>
          <a className="link link-hover block">Contact Saled</a>
        </nav>

        <nav className="space-y-3 text-gray-400">
          <h6 className="font-semibold text-white">Products & Services</h6>
          <a className="link link-hover block">Customer Stories</a>
          <a className="link link-hover block">Download Apps</a>
        </nav>

        <nav className="space-y-3 text-gray-400">
          <h6 className="font-semibold text-white">Information</h6>
          <a className="link link-hover block">Privacy Policy</a>
          <a className="link link-hover block">Terms & Conditions</a>
          <a className="link link-hover block">Join Us</a>
        </nav>

        <nav className="space-y-3 text-gray-400">
          <h6 className="font-semibold text-white">Social Links</h6>

          <p className="flex gap-1 text-sm items-center">
            <img src={twitterLogo} alt="Twitter" />
            <span>@CS — Ticket System</span>
          </p>

          <p className="flex gap-1 text-sm items-center">
            <img src={linkedInLogo} alt="LinkedIn" className="w-5" />
            <span>@CS — Ticket System</span>
          </p>

          <p className="flex gap-1 text-sm items-center">
            <img src={facebookLogo} alt="Facebook" className="w-5" />
            <span>@CS — Ticket System</span>
          </p>

          <p className="flex gap-1 text-sm items-center">
            <img src={emailLogo} alt="Email" className="w-5" />
            <span>@CS — Ticket System</span>
          </p>
        </nav>

        <div className="lg:col-span-6 border-t border-base-300 pt-4 text-center text-sm mt-4">
          © {new Date().getFullYear()} CS — Ticket System. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
