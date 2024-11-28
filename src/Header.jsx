import patternCircles from "./images/pattern-circles.svg";

function Header() {
  return (
    <header className="relative mx-auto mb-8 max-w-[395px] lg:mb-[54px]">
      <img src={patternCircles} alt="pattern circles" className="mx-auto" />
      <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="mb-2 text-xl font-extrabold leading-none text-dark-desaturated-blue lg:mb-3 lg:text-[28px]">
          Simple, traffic-based pricing
        </h1>
        <p className="px-28 text-[13px] font-semibold leading-[23px] text-grayish-blue lg:px-0 lg:text-[15px] lg:leading-none">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </div>
    </header>
  );
}
export default Header;
