const sliderData = [
  {
    price: 8,
    pageViews: "10K",
    sliderStyle: {
      background:
        "linear-gradient(90deg, hsl(174, 77%, 80%) 0%, hsl(223, 50%, 87%) 0%)",
    },
  },
  {
    price: 12,
    pageViews: "50K",
    sliderStyle: {
      background:
        "linear-gradient(90deg, hsl(174, 77%, 80%) 25%, hsl(223, 50%, 87%) 25%)",
    },
  },
  {
    price: 16,
    pageViews: "100K",
    sliderStyle: {
      background:
        "linear-gradient(90deg, hsl(174, 77%, 80%) 50%, hsl(223, 50%, 87%) 50%)",
    },
  },
  {
    price: 24,
    pageViews: "500K",
    sliderStyle: {
      background:
        "linear-gradient(90deg, hsl(174, 77%, 80%) 75%, hsl(223, 50%, 87%) 75%)",
    },
  },
  {
    price: 32,
    pageViews: "1M",
    sliderStyle: {
      background:
        "linear-gradient(90deg, hsl(174, 77%, 80%) 100%, hsl(223, 50%, 87%) 100%)",
    },
  },
];
function PriceSlider({ sliderValue, onChange, isYearlySelected }) {
  return (
    <div className="px-6 lg:px-12">
      <div className="mb-[34px] grid grid-cols-1 items-center gap-y-10 lg:mb-14 lg:grid-cols-2">
        <p className="order-1 place-self-center text-xs font-extrabold leading-none tracking-[1.714px] text-grayish-blue lg:place-self-auto lg:text-sm lg:tracking-[2px]">
          {sliderData[sliderValue].pageViews} PAGEVIEWS
        </p>
        <p className="lg: order-3 flex items-center gap-2 place-self-center text-[32px] font-extrabold leading-none tracking-[-0.8px] text-dark-desaturated-blue lg:order-2 lg:place-self-end lg:text-[40px] lg:tracking-[-1px]">
          $
          {isYearlySelected
            ? sliderData[sliderValue].price * 12 * 0.75
            : sliderData[sliderValue].price}
          .00
          <span className="text-sm font-semibold leading-none tracking-normal text-grayish-blue lg:text-base">
            {isYearlySelected ? "/ year" : "/ month"}
          </span>
        </p>
        <input
          type="range"
          name="slider"
          id="slider"
          min={0}
          max={4}
          value={sliderValue}
          className="order-2 w-full rounded-[5px] lg:order-3 lg:col-span-2"
          style={sliderData[sliderValue].sliderStyle}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
export default PriceSlider;
