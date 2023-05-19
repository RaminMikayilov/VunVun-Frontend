import Hero from "../components/Homepage/HERO/Hero";
import Services from "../components/Homepage/SERVICES/Services";
import HBeOwner from "../components/Homepage/HBEOWNER/HBeOwner";
import Cars from "../components/Homepage/Cars/Cars";

function Homepage() {
  return (
    <div>
      <Hero />
      <Services />
      <Cars />
      <HBeOwner />
    </div>
  );
}

export default Homepage;
