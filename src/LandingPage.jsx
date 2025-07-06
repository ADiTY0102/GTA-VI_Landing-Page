import Navbar from "./Navbar.jsx";
import Images from "./Images.jsx";
import BottomBar from "./BottomBar.jsx";
import "remixicon/fonts/remixicon.css";

export default function LandingPage() {
  return (
    <>
      <div className="landing overflow-hidden relative w-full h-screen bg-black">
        <Navbar />
        <Images />
        <BottomBar />
      </div>
    </>
  );
}
