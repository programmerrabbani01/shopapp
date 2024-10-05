import { categoryAll } from "@/Requests/Requests";

export default async function CategorySection() {
  const category: string[] = await categoryAll();
  return (
    <div className="pt-16 pb-12">
      <h1 className="text-center font-bold text-2xl capitalize ">
        Shop by Category
      </h1>
      {/* defiend grid */}
      <div className="mt-12 mx-auto w-4/5 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {category &&
          category.map((category) => (
            <div
              key={category}
              className="p-6 rounded-lg cursor-pointer text-center hover:scale-110 transition-all  duration-300 bg-gray-200 shadow-md "
            >
              <h2 className="text-sm sm:text-base md:text-lg capitalize font-bold ">
                {category}
              </h2>
            </div>
          ))}
      </div>
    </div>
  );
}
