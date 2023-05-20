import Hero from "../components/Homepage/HERO/Hero";
import Services from "../components/Homepage/SERVICES/Services";
import Destination from "../components/Homepage/Destination/Destination";
import HBeOwner from "../components/Homepage/HBEOWNER/HBeOwner";
import Cars from "../components/Homepage/Cars/Cars";
import Works from "../components/Homepage/Works/Works";
import Brands from "../components/Homepage/Brands/Brands";
import FAQ from "../components/Homepage/FAQ/FAQ";

function Homepage() {
  return (
    <div>
      <Hero />
      <Services />
      <Destination />
      <Cars />
      <HBeOwner />
      <Works />
      <Brands />
      <FAQ />
    </div>
  );
}

export default Homepage;
