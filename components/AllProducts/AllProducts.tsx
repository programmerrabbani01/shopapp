"use client";
import { productAll } from "@/Requests/Requests";
import { products } from "@/Types/Types";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";

export default function AllProducts() {
  const [product, setProduct] = useState<products[] | null>();
  const [loading, setLoading] = useState<Boolean>(true);
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        const pd: products[] = await productAll();
        setProduct(pd);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, []);
  return (
    <div className="pt-12 pb-12 mx-auto flex flex-col justify-center items-center w-4/5">
      <h2 className="text-2xl text-center font-bold">All Products</h2>
      {loading ? (
        <div className="mt-16 flex items-center justify-center">
          <Loader size={16} className="animate-spin"></Loader>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
          {/* grid products */}
          {product &&
            product?.map((pd) => <ProductCard key={pd.id} product={pd} />)}
        </div>
      )}
    </div>
  );
}
