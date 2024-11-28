import { useState } from "react";
import CardFooter from "./CardFooter";
import bgPattern from "./images/bg-pattern.svg";
import Header from "./Header";
import PriceToggle from "./PriceToggle";
import PriceSlider from "./PriceSlider";

function App() {
  const [sliderValue, setSliderValue] = useState(2);
  const [isYearlySelected, setIsYearlySelected] = useState(false);

  return (
    <div className="relative min-h-dvh bg-very-pale-blue">
      <img
        src={bgPattern}
        alt="background pattern"
        className="h-[400px] w-full lg:h-[449px]"
      />

      <div className="absolute left-1/2 top-[57px] w-full -translate-x-1/2 lg:top-[67px]">
        <Header />

        <div className="mx-6 max-w-[540px] rounded-lg bg-white pb-8 pt-[34px] shadow-box sm:mx-auto lg:pt-10">
          <PriceSlider
            sliderValue={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            isYearlySelected={isYearlySelected}
          />

          <PriceToggle
            isYearlySelected={isYearlySelected}
            onClick={() => setIsYearlySelected(!isYearlySelected)}
          />

          <hr className="bg-light-grayish-blue-slider" />

          <CardFooter />
        </div>
      </div>
    </div>
  );
}
export default App;
