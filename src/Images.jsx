export default function Images() {
  return (
    <>
      <div className="imagesDiv overflow-hidden relative w-full h-screen">
        <img
          className="absolute sky scale-[1.5] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
          src="./sky.png"
          alt="bg"
        />
        <img
          className="absolute scale-[1.8] rotate-[-3deg] bg top-0 left-0 w-full h-full object-cover"
          src="./bg.png"
          alt="bg"
        />
        <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
          <h1 className="text-[8.5rem] leading-none -ml-40">grand</h1>
          <h1 className="text-[8.5rem] leading-none ml-20">theft</h1>
          <h1 className="text-[8.5rem] leading-none -ml-20">auto</h1>
        </div>
        <img
          className="absolute character -bottom-[150%] left-1/2 -translate-x-1/2  scale-[3] rotate-[-20deg]"
          src="./girlbg.png"
          alt="girlChar"
        />
      </div>
    </>
  );
}
