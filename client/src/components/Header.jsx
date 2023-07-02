import React from "react";
import logo from "../assets/img/header-logo.svg";
import cartIcon from "../assets/img/cartLogo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { AiOutlineUser } from "react-icons/ai";
const Header = () => {
  const navigate = useNavigate();
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo) || " ";

  const handleNavigate = () => {
    navigate("/");
  };

  const handleNavigateCart = () => {
    navigate("/cart");
  };

  return (
    <header className="w-full z-10 fixed bg-white flex items-center justify-between px-20 h-24 shadow-md border-b-gray-200">
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
          <ul className="flex gap-8 items-center">
            <li className="hover:cursor-pointer hover:underline">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">
              <Link to="/">Pages</Link>
            </li>
            <li className="hover:cursor-pointer hover:underline">Shop</li>
            <li className="hover:cursor-pointer hover:underline">Element</li>
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
            <li className=" text-center underline">{userInfo.name}</li>
          </ul>
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
