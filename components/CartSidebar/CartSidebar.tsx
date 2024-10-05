"use client";
import { addItem, CartItem, removeItem } from "@/features/Cart/CartSlice";
import Image from "next/image";
import cartImage from "@/public/images/cart.svg";
import { Button } from "../ui/button";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store";
type props = {
  items: CartItem[];
};

export default function CartSidebar({ items }: props) {
  const dispatch = useDispatch<AppDispatch>();

  const addCartItem = (item: CartItem): void => {
    dispatch(addItem(item));
  };

  const RemoveCartItem = (id: number): void => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="mt-6 mb-6 h-full">
      {items.length === 0 && (
        <div className=" flex items-center w-full h-[80vh] flex-col justify-center ">
          <Image
            src={cartImage}
            width={200}
            height={200}
            className="mx-auto object-cover"
            alt="cart imaage"
          />
          <h3 className="mt-8 text-2xl font-semibold text-black ">
            Your Cart Is Empty
          </h3>
        </div>
      )}
      {items.length > 0 && (
        <div>
          {items.map((cart) => (
            <div
              key={cart.id}
              className="pb-4 border-b-2 border-gray-300 border-opacity-60 p-4 "
            >
              <div>
                <Image
                  src={cart?.image}
                  width={60}
                  height={60}
                  alt={cart?.title}
                  className="object-cover mb-4 "
                />
              </div>
              <div>
                <h3 className=" text-sm w-4/5 font-semibold truncate text-black ">
                  {cart?.title}
                </h3>
                <p className="text-base text-blue-900 font-bold ">
                  ${(cart?.price * cart?.quantity).toFixed(2)}
                </p>
                <p className="text-base font-bold mb-2 ">
                  Quantity: {cart?.quantity}
                </p>
                <div className="flex items-center space-x-4 ">
                  <Button
                    onClick={() => RemoveCartItem(cart?.id)}
                    size={"sm"}
                    variant={"destructive"}
                  >
                    Remove
                  </Button>
                  <Button onClick={() => addCartItem(cart)} size={"sm"}>
                    Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <Link href={"/cart"}>
            <SheetClose className="w-full">
              <Button className="w-full mb-6 mt-6 "> View All Cart </Button>
            </SheetClose>
          </Link>
        </div>
      )}
    </div>
  );
}
