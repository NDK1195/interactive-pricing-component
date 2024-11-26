import bgPattern from "./images/bg-pattern.svg";
import patternCircles from "./images/pattern-circles.svg";
import iconSlider from "./images/icon-slider.svg";
import iconCheck from "./images/icon-check.svg";
function App() {
  return (
    <div className="relative min-h-dvh bg-very-pale-blue">
      <img
        src={bgPattern}
        alt="background pattern"
        className="min-h-[400px] lg:min-h-[449px]"
      />

      <div className="absolute left-1/2 top-[57px] w-full -translate-x-1/2 lg:top-[67px]">
        <div className="relative mx-auto mb-8 max-w-[395px] lg:mb-[54px]">
          <img src={patternCircles} alt="pattern circles" className="mx-auto" />
          <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">
            <h1 className="mb-2 text-xl font-extrabold leading-none text-dark-desaturated-blue lg:mb-3 lg:text-[28px]">
              Simple, traffic-based pricing
            </h1>
            <p className="px-28 text-[13px] font-semibold leading-[23px] text-grayish-blue lg:px-0 lg:text-[15px] lg:leading-none">
              Sign-up for our 30-day trial. No credit card required.
            </p>
          </div>
        </div>

        <div className="mx-6 max-w-[540px] rounded-lg bg-white pb-8 pt-[34px] shadow-box sm:mx-auto lg:pt-10">
          <div className="px-6 lg:px-12">
            <div className="mb-[34px] grid grid-cols-1 items-center gap-y-10 lg:mb-14 lg:grid-cols-2">
              <p className="order-1 place-self-center text-xs font-extrabold leading-none tracking-[1.714px] text-grayish-blue lg:place-self-auto lg:text-sm lg:tracking-[2px]">
                100K PAGEVIEWS
              </p>
              <p className="lg: order-3 flex items-center gap-2 place-self-center text-[32px] font-extrabold leading-none tracking-[-0.8px] text-dark-desaturated-blue lg:order-2 lg:place-self-end lg:text-[40px] lg:tracking-[-1px]">
                $16.00
                <span className="text-sm font-semibold leading-none tracking-normal text-grayish-blue lg:text-base">
                  / month
                </span>
              </p>
              <div className="relative order-2 h-2 w-full rounded-[5px] bg-light-grayish-blue-slider lg:order-3 lg:col-span-2">
                <div className="absolute top-0 h-2 w-[50%] rounded-[5px] bg-soft-cyan"></div>
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-strong-cyan shadow-slider transition-colors hover:bg-[#7AEADF]">
                  <div className="flex size-10 items-center justify-center">
                    <img src={iconSlider} alt="icon slider" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10 flex items-center justify-center gap-3 pl-10 text-xs font-semibold leading-none text-grayish-blue lg:gap-4 lg:pl-24">
            <p>Monthly Billing</p>
            <div className="relative h-[22px] w-[43px] cursor-pointer rounded-[11px] bg-light-grayish-blue-toggle transition-colors hover:bg-[#7AEADF]">
              <div className="absolute top-1/2 size-[14px] -translate-y-1/2 translate-x-1 rounded-full bg-white transition-transform"></div>
            </div>
            <div className="flex items-center gap-[6px] lg:gap-[9px]">
              <p>Yearly Billing</p>
              <div className="rounded-[9.5px] bg-light-grayish-red px-2 py-[3px] text-light-red">
                <span className="lg:hidden">-</span>25%{" "}
                <span className="hidden lg:inline-block">discount</span>
              </div>
            </div>
          </div>

          <hr className="bg-light-grayish-blue-slider" />

          <div className="flex flex-col items-center gap-8 px-6 pt-6 lg:flex-row lg:justify-between lg:gap-0 lg:px-12 lg:pt-8">
            <ul className="flex flex-col items-center gap-3 text-xs font-semibold leading-none text-grayish-blue lg:items-start">
              <li className="flex items-center gap-4">
                <img src={iconCheck} alt="iconCheck" />
                <p>Unlimited websites</p>
              </li>
              <li className="flex items-center gap-4">
                <img src={iconCheck} alt="iconCheck" />
                <p>100% data ownership </p>
              </li>
              <li className="flex items-center gap-4">
                <img src={iconCheck} alt="iconCheck" />
                <p>Email reports</p>
              </li>
            </ul>
            <button className="h-[41px] w-[170px] rounded-[20.5px] bg-dark-desaturated-blue text-center text-xs font-extrabold leading-none text-pale-blue transition-colors hover:text-white">
              Start my trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
