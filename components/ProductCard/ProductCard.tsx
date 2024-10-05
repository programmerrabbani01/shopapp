"use client";
import { products } from "@/Types/Types";
import { Heart, ShoppingBag, StarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { addItem } from "@/features/Cart/CartSlice";
import { useToast } from "../ui/use-toast";
import { AppDispatch } from "@/store/store";

type props = {
  product: products;
};

export default function ProductCard({ product }: props) {
  const dispatch = useDispatch<AppDispatch>();
  const num = Math.round(product.rating.rate);
  const ratingArray = new Array<number>(num).fill(0);
  const { toast } = useToast();

  const addToCart = (product: products) => {
    dispatch(addItem(product));
    toast({
      title: product?.title,
      description: "ITEM ADDED TO CART ",
      variant: "success",
    });
  };

  return (
    <div className="p-4">
      <div className="w-[200px] h-[150px]">
        <Image
          src={product.image}
          alt={product.title}
          width={100}
          height={100}
          className="w-[80%] h-[80%] object-contain "
        />
      </div>
      <p className="mt-5 text-xs capitalize text-gray-600 ">
        {product.category}
      </p>
      <Link href={`/product/product-details/${product.id}`}>
        <h1 className="text-lg cursor-pointer hover:text-blue-900 transition-all hover:underline sm:w-full sm:truncate mt-2 text-black font-semibold  ">
          {product.title}
        </h1>
      </Link>
      {/* Rating */}
      <div className="flex items-center  ">
        {ratingArray.map((rating, index) => (
          <StarIcon
            key={index}
            size={16}
            fill="yellow"
            className="text-yellow-500"
          />
        ))}
      </div>
      {/* percing */}
      <div className="flex mt-2 items-center space-x-2 ">
        <p className="text-black text-base line-through font-semibold opacity-50">
          ${(product.price + 10).toFixed(2)}
        </p>
        <p className="text-black text-lg opacity-80 font-bold ">
          ${product.price}
        </p>
      </div>
      {/* button */}
      <div className="mt-4 flex items-center space-x-2 ">
        <Button onClick={() => addToCart(product)} size={"icon"}>
          <ShoppingBag size={18} />
        </Button>
        <Button size={"icon"} className="bg-red-500">
          <Heart size={18} />
        </Button>
      </div>
    </div>
  );
}
