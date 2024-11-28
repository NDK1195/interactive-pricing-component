import iconCheck from "./images/icon-check.svg";
function CardFooter() {
  return (
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
  );
}
export default CardFooter;
