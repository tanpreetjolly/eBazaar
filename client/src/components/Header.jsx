import React, { useState } from "react";
import logo from "../assets/img/header-logo.svg";
import cartIcon from "../assets/img/cartLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo) || " ";

  const handleNavigate = () => {
    navigate("/");
  };

  const handleNavigateCart = () => {
    navigate("/cart");
  };

  return (
    <header className="relativce w-full z-10 fixed bg-white flex items-center justify-between  px-5 lg:px-20 h-24 shadow-md border-b-gray-200">
      <div className="w-screen overflow-hidden flex items-center justify-between">
        <figure className="w-44">
          <img
            onClick={handleNavigate}
            src={logo}
            alt="logo"
            className=" w-full block hover:cursor-pointer"
          />
        </figure>
        <nav>
          <button
            className="lg:hidden"
            onClick={() => {
              setMenu(!menu);
            }}
          >
            <HiOutlineMenuAlt3 style={{ height: "28px", width: "28px" }} />
          </button>
          <ul className="hidden lg:flex gap-8 items-center bg-white z-10 ">
            <li className="hover:cursor-pointer hover:underline">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:cursor-pointer hover:underline">Shop</li>
            <li className=" text-center underline">{userInfo.name}</li>
            <li className="hover:cursor-pointer hover:underline">
              <Link to="/login">
                <AiOutlineUser
                  style={{ width: "26px", height: "26px" }}
                  className="border border-black p-0.5 rounded-full"
                />
              </Link>
            </li>

            <div
              className="relative hover:cursor-pointer"
              onClick={handleNavigateCart}
            >
              <img src={cartIcon} alt="cart" className="w-9 h-9 " />
              <span className="absolute top-2 left-3.5">
                {productData.length}
              </span>
            </div>
          </ul>
          {menu && (
            <ul className="flex flex-col lg:hidden gap-5 items-center rounded-b-md shadow bg-gray-50 z-10 absolute  top-20 right-3 w-44  py-3 px-4 ">
              <li className="hover:cursor-pointer hover:underline">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:cursor-pointer hover:underline">Shop</li>

              
              <div
                className="relative hover:cursor-pointer"
                onClick={handleNavigateCart}
              >
                <img src={cartIcon} alt="cart" className="w-9 h-9 " />
                <span className="absolute top-2 left-3.5">
                  {productData.length}
                </span>
              </div>
              <li className="hover:cursor-pointer hover:underline">
                <Link to="/login">
                  <AiOutlineUser
                    style={{ width: "26px", height: "26px" }}
                    className="border border-black p-0.5 rounded-full"
                  />
                </Link>
              </li>
              <li className=" text-center underline">{userInfo.name}</li>
            </ul>
          )}
        </nav>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        draggable
        theme="dark"
        newestOnTop={false}
      />
    </header>
  );
};

export default Header;
