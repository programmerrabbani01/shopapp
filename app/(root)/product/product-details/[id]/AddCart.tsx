"use client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { addItem } from "@/features/Cart/CartSlice";
import { AppDispatch } from "@/store/store";
import { products } from "@/Types/Types";
import { useDispatch } from "react-redux";
type props = {
  product: products;
};
export default function AddCart({ product }: props) {
  const dispatch = useDispatch<AppDispatch>();
  const { toast } = useToast();
  const addToCart = (product: products): void => {
    dispatch(addItem(product));
    toast({
      title: product?.title,
      description: "ITEM ADDED TO CART ",
      variant: "success",
    });
  };
  return (
    <div>
      <Button onClick={() => addToCart(product)}>Add To Cart</Button>
    </div>
  );
}
