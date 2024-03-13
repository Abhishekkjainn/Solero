function SmallSlider() {
  return (
    <>
      <div className="heading text-white font-bold text-[35px] pt-24 text-center">
        Categories
      </div>
      <div className="slider-container h-96 relative flex items-center overflow-x-auto px-6">
        <div className="categoriesdiv flex justify-start items-center flex-col w-[240px] hover:bg-slate-900 bg-opacity-30 rounded-[20px] hover:pb-8 duration-300">
          <img src="/categories1.png" alt="" />
          <div className="text-white text-xl">Floor Tiles</div>
        </div>
        <div className="categoriesdiv flex justify-start items-center flex-col w-[240px]  hover:bg-slate-900 bg-opacity-30 rounded-[20px] hover:pb-8 duration-300">
          <img src="/categories1.png" alt="" />
          <div className="text-white text-xl">Wall Tiles</div>
        </div>
        <div className="categoriesdiv flex justify-start items-center flex-col w-[240px]  hover:bg-slate-900 bg-opacity-30 rounded-[20px] hover:pb-8 duration-300">
          <img src="/categories1.png" alt="" />
          <div className="text-white text-xl">Bathroom Tiles</div>
        </div>
        <div className="categoriesdiv flex justify-start items-center flex-col w-[240px]  hover:bg-slate-900 bg-opacity-30 rounded-[20px] hover:pb-8 duration-300">
          <img src="/categories1.png" alt="" />
          <div className="text-white text-xl">Room Tiles</div>
        </div>
        <div className="categoriesdiv flex justify-start items-center flex-col w-[240px]  hover:bg-slate-900 bg-opacity-30 rounded-[20px] hover:pb-8 duration-300">
          <img src="/categories1.png" alt="" />
          <div className="text-white text-xl">Kitchen Tiles</div>
        </div>
        <div className="categoriesdiv flex justify-start items-center flex-col w-[240px]  hover:bg-slate-900 bg-opacity-30 rounded-[20px] hover:pb-8 duration-300">
          <img src="/categories1.png" alt="" />
          <div className="text-white text-xl">Wooden Tiles</div>
        </div>
      </div>
    </>
  );
}

export default SmallSlider;
