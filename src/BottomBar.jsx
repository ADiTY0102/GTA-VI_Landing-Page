import "remixicon/fonts/remixicon.css";
export default function BottomBar() {
  return (
    <>
      <div className="btmbar absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
        <div className="flex gap-4 items-center mt-5">
          <i class="ri-arrow-down-line text-3xl"></i>
          <h3 className=" text-xl mt-[3px] font-[HelveticaNowDisplay]">
            Scroll Down
          </h3>
        </div>
        <img
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50px]"
          src="./ps5.png"
          alt="console"
        />
      </div>
    </>
  );
}
