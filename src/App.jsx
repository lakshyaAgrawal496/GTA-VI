import React, { useState } from 'react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App(){
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

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".trees", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 0.65,
      y:"19%",
      x: "-86%",
      bottom: "-25%",
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
      gsap.to(".bg", {
        x: xMove,
        y:xMove,
      });
      gsap.to(".trees", {
        x: xMove * 1.7,
        y: xMove ,
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
                  fontSize="150"
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
            height="85%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

    {showContent && (
        <div className="main w-full rotate-[-10deg] scale-[1.7]">
          <div className="landing overflow-hidden relative w-full h-screen bg-black">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-10 px-10">
              <div className="logo flex gap-7">
                <div className="lines flex flex-col gap-[5px]">
                  <div className="line w-15 h-2 bg-white"></div>
                  <div className="line w-8 h-2 bg-white"></div>
                  <div className="line w-5 h-2 bg-white"></div>
                </div>
                <h3 className="text-4xl -mt-[8px] leading-none text-white">
                  Rockstar
                </h3>
              </div>
            </div>

            <div className="imagesdiv relative overflow-hidden w-full h-screen">
              <img
                className="absolute bg scale-[1.6] rotate-[-20deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
              />
              <img
                className="absolute scale-[1.1] rotate-[-30deg] bg top-0 left-0 w-full h-full object-cover"
                src="./trees.png"
              />
              <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2 scale-[1.4] rotate-[-10deg]">
                <h1 className="text-[8rem] leading-none -ml-40">grand</h1>
                <h1 className="text-[8rem] leading-none ml-30">theft</h1>
                <h1 className="text-[8rem] leading-none -ml-28">auto</h1>
              </div>
              <img
                className="absolute character  left-1/2 -translate-x-1/2  scale-[1] rotate-[-20deg]"
                src="./character.png"
                alt=""
              />
            </div>
            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
              <div className="flex gap-4 items-center">
                <i className="text-4xl hover:scale-125 active:scale-95 ri-arrow-down-line"></i>
                <h3 className="text-xl font-[Helvetica_Now_Display]">
                  Scroll Down
                </h3>
              </div>
              <img
                className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:scale-105 active:scale-95"
                src="./ps5.png"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-100% flex items-center justify-center bg-black">
            <div className="cntnr flex text-white w-full h-[80%] ">
              <div className="limg relative w-1/2 h-full">
                <img
                  className="absolute top-100 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  src="./imag.png"
                  alt=""
                />
              </div>
              <div className="rg w-[30%] py-30">
                <h1 className="text-6xl">Mission Passed</h1>
                <h1 className="text-8xl">Respect</h1>
                <p className="mt-10 font-[Helvetica_Now_Display]">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Distinctio possimus, asperiores nam, omnis inventore nesciunt
                  a architecto eveniet saepe, ducimus necessitatibus at
                  voluptate.
                </p>
                <p className="mt-3 font-[Helvetica_Now_Display]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                  eius illum fugit eligendi nesciunt quia similique velit
                  excepturi soluta tenetur illo repellat consectetur laborum
                  eveniet eaque, dicta, hic quisquam? Ex cupiditate ipsa nostrum
                  autem sapiente.
                </p>
                <button className="bg-yellow-500 px-8 py-5 text-black mt-10 hover:scale-105 active:scale-95 text-4xl">
                  Download 
                </button>
              </div>
            </div>
          </div>
          <footer class="footer">
            <div class="footer-container">
              <div class="footer-logo h-20 w-18">
                <img src="/logo18.png" />
              </div>
              <div className='rockstargames h-30 w-30 -mt-22 translate-x-280'>
                <img src="./image.png" alt="" />
              </div>

              <div class="footer-links">
                <a href="/about">About</a>
                <a href="/news">News</a>
                <a href="/media">Media</a>
                <a href="/preorder">Pre-Order</a>
                <a href="/support">Support</a>
              </div>

              <div class="footer-social">
                <a href="https://twitter.com/rockstargames" target="_blank"><i class="ri-twitter-x-line"></i></a>
                <a href="https://instagram.com/rockstargames" target="_blank"><i class="ri-instagram-line"></i></a>
                <a href="https://youtube.com/rockstargames" target="_blank"><i class="ri-youtube-line"></i></a>
                <a href="https://facebook.com/rockstargames" target="_blank"><i class="ri-facebook-box-line"></i></a>
              </div>

              <div class="footer-legal">
                <p>© 2025 Rockstar Games. All rights reserved.</p>
                <p>Grand Theft Auto and GTA are trademarks of Take-Two Interactive.</p>
                <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Use</a> | <a href="/cookies">Cookie Settings</a>
              </div>
            </div>
          </footer>

        </div>
      )}
    </>
  );
}

export default App;