import LeftSide from "./LeftSide.jsx";
import RightSide from "./RightSide.jsx";
export default function LastPage(){
    return(
        <>
            <div className="overflow-hidden w-full h-screen bg-black px-10 flex items-center justify-center">
            <div className="container flex w-full h-[80%] ">
              <LeftSide/>
              <RightSide/>
            </div>
          </div>
        </>
    )
}