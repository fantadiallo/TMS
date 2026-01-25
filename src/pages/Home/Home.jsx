import FeaturedVehicles from "../../components/Home/FeaturedVehicles/FeaturedVehicles";
import Hero from "../../components/Home/Hero/Hero";
import Services from "../../components/Home/Services/Services";
import Stats from "../../components/Home/Stats/Stats";
import TrustedBy from "../../components/Home/TrustedBy/TrustedBy";


export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <FeaturedVehicles />
      <Services />
      <TrustedBy />
    </>
  );
}
