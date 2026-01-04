import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router";
import logo from "../assets/pet4.png"
const Footer = () => {
  return (
    <div>
      <div className='bg-indigo-950 md:px-20 px-3 '>
        <footer className="flex flex-col md:flex-row justify-between py-5">

          <nav className='text-white'>
            <h6 className="footer-title">Quick Links</h6>

            <Link to='/about' className="link link-hover">About</Link>
            <br />
            <a className="link link-hover">Contact</a>
            <br />
            <a className="link link-hover">Privacy Policy</a>

          </nav>
          <div>
            <Link to="/" className="">
              <span className="flex justify-center items-center  rounded-3xl">
                <img className="bg-white rounded-3xl w-10 h-10" src={logo} alt="" />
                <p className="font-bold text-white ml-2">PawMart</p></span>
              <p className="text-white">“PawMart connects local pet owners and buyers for adoption and pet care products.</p>
            </Link>
          </div>

          <div>
            <h1 className='text-white font-bold  mb-4'>Social Links</h1>
            <div className='flex gap-2 items-center text-white'>
              <BsTwitter></BsTwitter>
              <BsLinkedin></BsLinkedin>
              <FaFacebook></FaFacebook>
            </div>
          </div>

        </footer>
        <div>

          <hr className='border-1/2 border-gray-700' />
          <p className='text-center text-white py-5'>Copyright © 2025 -PaoMart All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
