import Section from "./Section";
import { curve } from "../assets";
const Keki = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25]"
      crosses
      crossesOffset="lg:transalate-y-[5.25]"
      customPaddings
      id="keki"
    >
      <div className="contanier relative">
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[4rem] md:mb-20 lg:mb-[6rem]">
          <h1 className="h1 mb-6">
            Si busca un postre auténtico y rico prueba Keki!
          </h1>
        </div>
      </div>
    </Section>
  );
};

export default Keki;
