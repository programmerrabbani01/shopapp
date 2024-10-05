"use client";
import { addItem, CartItem, removeItem } from "@/features/Cart/CartSlice";
import { AppDispatch, RootState } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import cartEmpty from "@/public/images/cart.svg";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CartPageSection() {
  const dispatch = useDispatch<AppDispatch>();
  //call cart  Service
  const { items } = useSelector((state: RootState) => state.cart);
  //total quantity
  const totalQuantity = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  //total price
  const totalPrice = items
    .reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
    .toFixed(2);
  //vat
  const vat = (+totalPrice * 0.15).toFixed(2);
  // total vat with price
  const totalVatWithPrice = (+totalPrice + +vat).toFixed(2);

  //get Authenticated user
  const { user } = useUser();

  const addCartItem = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const RemoveCartItem = (id: number) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="mt-8 min-h-[60vh]  ">
      {/* if the cart is empty */}
      {items.length === 0 && (
        <div className=" flex items-center w-full h-[80vh] flex-col justify-center ">
          <Image
            className="object-cover mx-auto "
            src={cartEmpty}
            alt={"cart empty"}
            width={400}
            height={400}
          />
          <h1 className="text-2xl font-semibold mt-8 ">Your Cart is Empty</h1>
          <Link className="mt-5" href="/">
            <Button>Shop Now</Button>
          </Link>
        </div>
      )}

      {items.length > 0 && (
        <div>
          <div className="w-full mb-10 flex items-center justify-center">
            <h1 className="mx-auto text-3xl items-center font-semibold text-blue-900">
              Your Cart
            </h1>
          </div>
          <div className="md:w-4/5 w-[95%] mx-auto grid grid-cols-1 xl:grid-cols-6 gap-12 ">
            <div className="round-lg shadow-md overflow-hidden xl:col-span-4  ">
              <h1 className="p-4  text-xl sm:text-2xl md:text-3xl font-bold text-white bg-blue-700 ">
                Your cart {totalQuantity} items
              </h1>
              {items.map((item) => (
                <div key={item.id}>
                  <div className="flex pb-6 mt-2 p-5 border-b-[1.5px] border-opacity-25 border-gray-700 items-center justify-between space-x-10 ">
                    <div>
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={180}
                        height={180}
                      />
                    </div>
                    <div>
                      <h2 className="md:text-sm text-base font-bold text-black">
                        {item.title}
                      </h2>
                      <p className="md:text-sm text-sm font-bold text-black">
                        Category: {item.category}
                      </p>
                      <p className="md:text-sm text-lg font-bold text-black">
                        Price: ${item.price}
                      </p>
                      <p className="md:text-sm text-sm font-semibold text-black">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                    <div className="flex items-center mt-4 space-x-4 ">
                      <Button onClick={() => addCartItem(item)}>
                        Add More
                      </Button>
                      <Button
                        onClick={() => RemoveCartItem(item?.id)}
                        variant={"destructive"}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* cart summary */}
            <div className="xl:col-span-2">
              <div className="bg-indigo-950 sticky top-[25vh] p-6 rounded-lg ">
                <h2 className=" text-center mt-8 mb-8 text-white text-2xl font-semibold ">
                  Summary
                </h2>
                <div className=" w-full h-[1.2px] bg-white bg-opacity-20 "></div>
                <div className="flex mt-4 text-xl uppercase font-semibold text-white items-center justify-between ">
                  <span>Subtotal :</span>
                  <span>${totalPrice}</span>
                </div>
                <div className="flex mt-10 mb-10  text-xl uppercase font-semibold text-white items-center justify-between ">
                  <span>VAT :</span>
                  <span>${vat}</span>
                </div>
                <div className="flex mb-6  text-xl uppercase font-semibold text-white items-center justify-between ">
                  <span>Sapping :</span>
                  <span>Free</span>
                </div>
                <div className=" w-full h-[1.2px] bg-white bg-opacity-20 "></div>
                <div className="flex mt-6 mb-6  text-xl uppercase font-semibold text-white items-center justify-between ">
                  <span>TotaL :</span>
                  <span>${totalVatWithPrice}</span>
                </div>
                {!user && (
                  <Link className="w-full" href={"/sign-in"}>
                    <Button>Sign in CheckOut</Button>
                  </Link>
                )}
                {user && (
                  <Button className="w-full bg-orange-500">Paypal</Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
