import Image from "next/image";
import { FiArrowDown } from "react-icons/fi";
import { twMerge } from "tailwind-merge";
import Logo from "../../infra/assets/atomoon-reduce-negative.svg";
import Photo from "../../infra/assets/portrait.jpeg";
import { Props } from "./types";

export const Intro = ({ className }: Props) => {
  return (
    <section
      className={twMerge("flex items-center justify-between p-40", className)}
    >
      <div className="flex flex-col gap-8 p-8 overflow-hidden">
        <h1 className="text-white text-8xl font-bold">
          Hi, i'm
          <div className="overflow-hidden w-96 h-fit relative flex flex-row group ">
            <span className="group-hover:text-zinc-900 z-10 p-1 transition-all ease-in">
              Jordan.
            </span>
            <div className="bg-slate-100 h-full w-full p-2 absolute right-full group-hover:right-0 transition-all ease-in z-0" />
          </div>
        </h1>
        <p className="text-white text-lg font-light">
          Nice to meet yout, I'm a front-end developer from Joinville, Brazil. I
          have 1 year of experience with front-end and more than 5 years with
          Design. Feel free contact me and make yourself at home 😊.
        </p>

        <div className="w-full flex space-x-2 items-center overflow-hidden relative">
          <FiArrowDown className="text-zinc-400 relative transition-all bottom-5 animate-[pingpong_2s_ease-in-out_infinite]" />
          <p className="text-zinc-400">Scroll to the next section</p>
        </div>
      </div>
      <div>
        <Image
          src={Logo}
          className="z-10 relative top-10 left-[28rem] h-20 w-auto delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:invisible"
          data-taos-offset="300"
          alt="logo Atomoon"
        />
        <Image
          alt="Foto de Jordan"
          src={Photo}
          className="h-auto w-auto rounded-lg shadow-md hover:shadow-2xl transition-all"
        />
      </div>
    </section>
  );
};
