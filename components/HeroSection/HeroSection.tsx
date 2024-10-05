import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import heroImage from "@/public/images/hero.svg";

export default function HeroSection() {
  return (
    <div className=" w-full h-[calc(100vh-12vh)] flex justify-center flex-col ">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        {/* content */}
        <div>
          <h1 className="text-xl xm:text-2xl md:text-3xl lg:text:4xl xl:text-5xl text-black font-bold uppercase">
            mega sale <span className="text-rose-600"> spacial</span> offer up
            to <span className="text-orange-600">60%</span> off
          </h1>
          <p className="text-sm md:text-base lg:text-lg text-black text-opacity-70 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quis
            eligendi sequi commodi necessitatibus voluptatem pariatur libero
            officiis quod quibusdam reprehenderit, exercitationem earum
            obcaecati consequatur voluptas, nobis nulla voluptate nesciunt.
          </p>
          <div className="mt-6  flex item-center space-x-4">
            <Button className="bg-blue-700" size={"lg"}>
              Shop Now
            </Button>
            <Button size={"lg"}>Explore more</Button>
          </div>
        </div>
        {/* image content */}
        <div className="hidden lg:block">
          <Image
            src={heroImage}
            alt="Hero banner"
            width={600}
            height={600}
            className="lg:w-[50%] lg:h-[50%] xl:w-[80%] xl:h-[80%]"
          ></Image>
        </div>
      </div>
    </div>
  );
}
