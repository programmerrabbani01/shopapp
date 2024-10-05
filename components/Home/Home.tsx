import AllProducts from "../AllProducts/AllProducts";
import CategorySection from "../CategorySection/CategorySection";
import HeroSection from "../HeroSection/HeroSection";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <CategorySection></CategorySection>
      <AllProducts></AllProducts>
    </div>
  );
}
