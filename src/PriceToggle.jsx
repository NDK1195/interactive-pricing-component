function PriceToggle({ isYearlySelected, onClick }) {
  return (
    <div className="mb-10 flex items-center justify-center gap-3 pl-10 text-xs font-semibold leading-none text-grayish-blue lg:gap-4 lg:pl-24">
      <p>Monthly Billing</p>
      <div
        className={`${isYearlySelected ? "bg-[#7AEADF]" : "bg-light-grayish-blue-toggle"} relative h-[22px] w-[43px] cursor-pointer rounded-[11px] transition-colors hover:bg-[#7AEADF]`}
        onClick={onClick}
      >
        <div
          className={`${isYearlySelected ? "translate-x-6" : "translate-x-1"} absolute top-1/2 size-[14px] -translate-y-1/2 rounded-full bg-white transition-transform`}
        ></div>
      </div>
      <div className="flex items-center gap-[6px] lg:gap-[9px]">
        <p>Yearly Billing</p>
        <div className="rounded-[9.5px] bg-light-grayish-red px-2 py-[3px] text-light-red">
          <span className="lg:hidden">-</span>25%{" "}
          <span className="hidden lg:inline-block">discount</span>
        </div>
      </div>
    </div>
  );
}
export default PriceToggle;
