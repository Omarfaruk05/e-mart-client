import discountPhoto1 from "../../assets/discount-photo/disouunt-1.png";

const Discount = () => {
  return (
    <div className="bg-gray-100 flex justify-between items-center md:h-32">
      <div className="md:w-80">
        <h1 className="text-lg font-semibold uppercase bg-green-500 inline-block p-1 pr-10 text-white ">
          Phone
        </h1>
        <div>
          <small>Up to 70%</small>
        </div>
        <div>
          <button className="pointer text-sm font-semibold uppercase">
            Shop Now
          </button>
        </div>
      </div>
      <div>
        <div className="relative left-0 p-2 w-5/6">
          <img src={discountPhoto1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
