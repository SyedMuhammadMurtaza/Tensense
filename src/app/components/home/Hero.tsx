"use client";

import heroImage from "../../../../public/images/asterik.png";
import Image from "next/image";
import {motion} from "framer-motion";

export default function Hero() {
  return (
    <div className="h-[88%]  bg-[#1C4B42] bg-cover bg-center rounded-b-lg">
      <div className="flex items-center justify-between bg-black/20 h-full rounded-b-lg px-8 pt-7">
        {/* Left Side - Text */}
        <div className="w-[80%] pr-4 pt-11">
          <h1 className="text-white font-semibold text-[9vw] leading-[1.1] lg:text-[75px]">
            Turning Complex Ideas Into Next Gen <span className="tracking-tighter bg-gradient-to-r from-[#B4E717] from-50% to-[#dfff7c] to-100%  text-transparent bg-clip-text"> Solutions...</span>
          </h1>
          <p className="text-[18px] pt-4 tracking-tighter bg-gradient-to-r from-[#B4E717] from-50% to-[#dfff7c] to-100%  text-transparent bg-clip-text">From strategy to deployment, we combine cutting-edge technology with sleek design to craft scalable, reliable, and modern software solutions — helping your business grow, innovate, and stay ahead of the competition with digital experiences that last.</p>
          
          {/*Buttons */}
          <div className="flex gap-6 mt-6">
            <motion.button
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="relative overflow-hidden text-white pt-4 pb-4 px-10 rounded-md border-2 border-[#B4E717]"
      >
        {/* Background slide */}
        <motion.span
          variants={{
            rest: { x: "-100%" },
            hover: { x: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#B4E717] z-0"
        />
        {/* Text on top */}
        <span className="relative z-10">Our Services</span>
      </motion.button>
        <motion.button
        initial="rest"
        whileHover="hover"
        animate="rest"
        className="relative overflow-hidden text-white pt-4 pb-4 px-10 rounded-md border-2 border-[#B4E717]"
      >
        {/* Background slide */}
        <motion.span
          variants={{
            rest: { x: "-100%" },
            hover: { x: 0 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-[#B4E717] z-0"
        />
        {/* Text on top */}
        <span className="relative z-10">View Projects</span>
      </motion.button>

          </div>
          {/*Buttons End*/}

        </div>
       

        {/* Right Side - Image */}
        <div className="w-1/2 flex justify-center">
        <motion.div 
         animate={{
              y:[-40, 30],
            }}
            transition={{
              repeat:Infinity,
              repeatType:"mirror",
              duration:3,
              ease:"easeInOut",
            }}>
          <Image
            src={heroImage}
            alt="hero image"            
            width={350}   // bigger than text
            height={350}
            className="max-w-full h-auto"
           
          />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
