import Image from "next/image";
import Link from "next/link";
import React from "react";
import paysvg from "@/public/images/pay.svg";
export default function Footer() {
  return (
    <div className="pt-20 pb-12">
      <div className="w-4/5 border-b-[1.2px] pb-8 border-b-slate-500 mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 ">
        {/* 1st */}
        <div>
          <h3 className="uppercase font-semibold text-black mb-4 ">WDW Shop</h3>
          <p className="text-sm text-black opacity-60 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor
            aspernatur necessitatibus quibusdam eos eligendi consequuntur quae
            illo impedit laborum officia?
          </p>
          <p className="text-base text-black mt-6 opacity-60 ">
            (+000) 12345690 - info@exzample.com
          </p>
        </div>
        {/* 2nd */}
        <div className="lg:mx-auto">
          <h3 className="footer_title">Information</h3>
          <Link className="footer_link" href={"/"}>
            About Us
          </Link>
          <Link className="footer_link" href={"/"}>
            Privacy Police
          </Link>
          <Link className="footer_link" href={"/"}>
            Return Police
          </Link>
          <Link className="footer_link" href={"/"}>
            DropShipping
          </Link>
          <Link className="footer_link" href={"/"}>
            Shipping Police
          </Link>
        </div>
        {/* 2nd */}
        <div className="lg:mx-auto">
          <h3 className="footer_title">Account</h3>
          <Link className="footer_link" href={"/"}>
            Dashboard
          </Link>
          <Link className="footer_link" href={"/"}>
            My Order
          </Link>
          <Link className="footer_link" href={"/"}>
            Account Details
          </Link>
          <Link className="footer_link" href={"/"}>
            Track My Order
          </Link>
        </div>
        {/* 3nd */}
        <div className="lg:mx-auto">
          <h3 className="footer_title">Shop</h3>
          <Link className="footer_link" href={"/"}>
            Affiliate
          </Link>
          <Link className="footer_link" href={"/"}>
            Best Seller
          </Link>
          <Link className="footer_link" href={"/"}>
            Latest Product
          </Link>
          <Link className="footer_link" href={"/"}>
            Sale Product
          </Link>
        </div>
      </div>
      {/* copyright */}
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 justify-between w-4/5 mx-auto">
        <p className="text-sm text-black opacity-60 ">
          @copyright WDW Shop 2024
        </p>
        <Image
          src={paysvg}
          className=" object-contain sm:ml-auto "
          width={230}
          height={230}
          alt="payment-icons"
        />
      </div>
    </div>
  );
}
