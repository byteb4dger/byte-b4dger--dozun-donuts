import Image from "next/image";
import "@fontsource/bungee";
import Donut from "/public/donut.png";

const Logo = () => {
  return (
    <div
      className="dark:bg-accent dark:text-text relative z-10 flex h-12 flex-col items-center justify-center rounded-full bg-rose-600 px-4 py-2 text-pink-50 shadow-md shadow-slate-500 dark:shadow-none"
      style={{ fontFamily: "Bungee" }}
    >
      <span className="text-xl leading-none antialiased"> Dozun </span>
      <span className="text-xl leading-none antialiased"> Donuts </span>
      <Image
        src={Donut}
        width={70}
        height={70}
        alt="Donut background"
        className="absolute left-20 top-2 rotate-45"
      />
    </div>
  );
};

export default Logo;
