import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.86,
      x: "-50%",
      bottom: "-50%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>
      {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
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
            <div className="btmbar absolute bottom-0 left-0 w-full py-10 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center mt-5">
                <i class="ri-arrow-down-line text-3xl"></i>
                <h3 className=" text-xl mt-[3px] font-[HelveticaNowDisplay]">Scroll Down</h3>
              </div>
              <img
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[50px]"
                src="./ps5.png"
                alt="console"
              />
            </div>
          </div>
          <div className="overflow-hidden w-full h-screen bg-black px-10 flex items-center justify-center">
            <div className="container flex w-full h-[80%] ">
              <div className="left-image relative h-full w-1/2">
                <img
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="right-side w-[30%]">
                <h1 className="text-6xl text-pink-500">Still Running</h1>
                <h1 className="text-6xl">Not Hunting..</h1>
                <p className="mt-10 font-[HelveticaNowDisplay]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam inventore rem laborum nemo repellat. Distinctio,
                  cupiditate molestias. Fugiat repellat labore officiis iusto,
                  fuga illum velit quos provident iste rerum accusamus!
                </p>
                <p className="mt-3 font-[HelveticaNowDisplay]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                  omnis sapiente nostrum, beatae distinctio laudantium?
                </p>
                <p className="mt-3 font-[HelveticaNowDisplay]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus, ipsum! Cupiditate nobis similique veritatis
                  consectetur perferendis modi quod fugit eveniet?
                </p>
                <button className="bg-yellow-500 mt-10 text-black text-2xl px-7 py-5">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
