export default function Navbar() {
  return (
    <>
      <div className="navbar absolute top-0 left-0 px-10 py-10  z-[10] w-full">
        <div className="logo flex gap-5">
          <div className="lines flex flex-col gap-1">
            <div className="line w-10 h-2 bg-white"></div>
            <div className="line w-8 h-2 bg-white"></div>
            <div className="line w-5 h-2 bg-white"></div>
          </div>
          <h3 className="text-3xl mt-[-10px]">Rockstar</h3>
        </div>
      </div>
    </>
  );
}
