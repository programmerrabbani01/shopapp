"use client";
import { RootState } from "@/store/store";
import { ShoppingBagIcon } from "lucide-react";
import { useSelector } from "react-redux";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import CartSidebar from "../CartSidebar/CartSidebar";

export default function ShoppingCartButton() {
  const { items } = useSelector((state: RootState) => state.cart);

  const totalQuantity = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <Sheet>
      <SheetTrigger>
        <div className=" relative ">
          <span className=" absolute -top-3 -right-2 w-6 h-6 bg-red-500 text-center flex items-center justify-center flex-col text-xs text-white rounded-full ">
            {totalQuantity > 0 ? totalQuantity : 0}
          </span>
          <ShoppingBagIcon size={26} cursor={"pointer"}></ShoppingBagIcon>
        </div>
      </SheetTrigger>
      <SheetContent className=" overflow-auto h-full ">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>
            {/* cart sidebar */}
            <CartSidebar items={items} />
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
