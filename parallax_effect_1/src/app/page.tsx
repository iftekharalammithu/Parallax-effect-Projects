"use client";
import { gsap } from "gsap";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Home() {
  const [background, setbackground] = useState(20);

  const parallaxRef = useRef(null);
  const mountain3 = useRef(null);
  const mountain2 = useRef(null);
  const mountain1 = useRef(null);
  const cloudsBottom = useRef(null);
  const cloudsLeft = useRef(null);
  const cloudsRight = useRef(null);
  const stars = useRef(null);
  const sun = useRef(null);
  const copy = useRef(null);
  const btn = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      var tl = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
          trigger: parallaxRef.current,
          start: "top top",
          end: "5000 bottom",
          scrub: true,
          pin: true,
          onUpdate: (self) => {
            setbackground(Math.ceil(self.progress * 100 + 20));
          },
        },
      });
      tl.to(
        mountain3.current,
        {
          y: "-=80",
        },
        0
      );
      tl.to(
        mountain2.current,
        {
          y: "-=30",
        },
        0
      );
      tl.to(
        mountain1.current,
        {
          y: "+=50",
        },
        0
      );
      tl.to(
        stars.current,
        {
          top: 0,
        },
        0.5
      );
      tl.to(
        cloudsBottom.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        0
      );
      tl.to(
        cloudsLeft.current,
        {
          x: "-20%",
          opacity: 0,
        },
        0
      );
      tl.to(
        cloudsRight.current,
        {
          x: "20%",
          opacity: 0,
        },
        0
      );
      tl.to(
        sun.current,
        {
          y: "+=210",
        },
        0
      );
      tl.to(
        copy.current,
        {
          y: "-250%",
          opacity: 1,
        },
        0
      );
      tl.to(
        btn.current,
        {
          opacity: 1,
        },
        1.5
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <div
          ref={parallaxRef}
          className="h-[110vh] w-full relative "
          style={{
            background: `linear-gradient(#0F2B9C, #673D7D ${background}%, #A74A67, #EDFC54 )`,
          }}
        >
          <Image
            ref={mountain3}
            width={1000}
            height={1000}
            className=" w-full  z-30 absolute bottom-0 "
            alt="Mountain-3"
            src={"./parallax/mountain-3.svg"}
          ></Image>
          <Image
            ref={mountain2}
            width={1000}
            height={1000}
            className=" w-full z-20 bottom-5 absolute"
            alt="Mountain-2"
            src={"./parallax/mountain-2.svg"}
          ></Image>
          <Image
            ref={mountain1}
            height={1000}
            width={1000}
            className=" w-full z-10 bottom-10 absolute "
            alt="Mountain-1"
            src={"./parallax/mountain-1.svg"}
          ></Image>
          <Image
            ref={sun}
            width={1000}
            height={1000}
            className=" top-[70%]  left-1/2 translate-x-1/2 translate-y-1/2 w-[40%]"
            src={"./parallax/sun.svg"}
            alt="sun"
          ></Image>
          <Image
            ref={cloudsBottom}
            width={1000}
            height={1000}
            className=" bottom-0 w-full absolute"
            alt=""
            src={"./parallax/clouds-bottom.svg"}
          ></Image>
          <Image
            ref={cloudsLeft}
            width={1000}
            height={1000}
            className=" right-0 w-[20%] absolute"
            alt=""
            src={"./parallax/clouds-left.svg"}
          ></Image>
          <Image
            ref={cloudsRight}
            width={1000}
            height={1000}
            className=" left-0 w-[20%] absolute"
            alt=""
            src={"./parallax/clouds-right.svg"}
          ></Image>
          <Image
            ref={stars}
            width={1000}
            height={1000}
            alt="stars"
            className="w-full top-[-550px] left-0 absolute"
            src="./parallax/stars.svg"
          ></Image>
          <div
            ref={copy}
            className=" absolute  bottom-0 left-1/2 translate-x-1/2 translate-y-1/2 z-0 flex justify-center items-center flex-col opacity-0"
          >
            <h1 className=" absolute font-semibold">Journey</h1>
            <span
              ref={btn}
              className=" absolute p-4 font-[800] rounded-2xl bg-[#e4e4e4]"
            >
              Discover More
            </span>
          </div>
        </div>
      </div>
      <div className=" w-full h-screen"></div>
    </>
  );
}
