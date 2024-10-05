import { singleProduct, specificCategory } from "@/Requests/Requests";
import { products } from "@/Types/Types";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import AddCart from "./AddCart";
import ProductCard from "@/components/ProductCard/ProductCard";

export default async function productPage({
  params,
}: {
  params: { id: string };
}) {
  // get product id
  const id = params.id;
  // get single product
  const getPD: products = await singleProduct(id);
  // get related product
  const relatedProduct: products[] = await specificCategory(getPD.category);
  //get product rating
  const num = Math.round(getPD.rating.rate);
  const ratingArray = new Array<number>(num).fill(0);
  return (
    <div className="mt-20">
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4 ">
        {/* product of image */}
        <div className="col-span-3 mb-6 lg-mb-0">
          <Image src={getPD.image} alt={getPD.title} width={400} height={400} />
        </div>
        {/* content of product */}
        <div className="col-span-4">
          <h1 className="lg:text-3xl text-2xl font-bold text-black ">
            {getPD.title}
          </h1>
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center ">
              {ratingArray.map((star, index) => {
                return (
                  <StarIcon
                    key={index}
                    size={20}
                    fill="yellow"
                    className="text-yellow-500"
                  />
                );
              })}
            </div>

            <p className="text-base text-gray-700 font-semibold ">
              ({getPD.rating.count}) Reviews
            </p>
          </div>
          {/* line */}
          <span className=" w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4 "></span>
          {/* price */}
          <p className="lg:text-6xl text-3xl md:text-4xl text-blue-950 font-bold ">
            ${getPD.price.toFixed(2)}
          </p>
          <p className=" mt-4 text-base text-black opacity-70 ">
            {getPD.description}
          </p>
          <p className=" mt-4 text-black text-sm text-opacity-70 font-semibold ">
            Category : {getPD.category}
          </p>
          <p className=" mt-2 text-black text-sm text-opacity-70 font-semibold ">
            Tags : Shop, WDW
          </p>
          <p className=" mt-2 mb-3 text-black text-sm text-opacity-70 font-semibold ">
            SKU : {Math.random() * 5000}
          </p>
          {/* add to cart button */}
          <AddCart product={getPD} />
        </div>
      </div>
      {/* releted product */}
      <div className="w-4/5 mt-16 mx-auto ">
        <h1 className="text-2xl text-black font-semibold">Related Product</h1>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 ">
          {relatedProduct.map((p) => {
            return <ProductCard key={p.id} product={p} />;
          })}
        </div>
      </div>
    </div>
  );
}
