import { FaGithub, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="z-10 mx-auto flex flex-col items-center gap-x-12 sm:gap-x-32 md:mt-6 md:scale-125 lg:mt-12 lg:scale-150 lg:gap-x-44">
      <div className=" flex gap-x-8 py-4 text-3xl md:gap-x-16">
        <Link href="https://github.com/byteb4dger">
          <FaGithub className="text-rose-500 dark:text-rose-50" />
        </Link>
        <Link href="https://www.facebook.com/piotr.gulaszewski.56">
          <FaFacebook className="text-rose-500 dark:text-rose-50" />
        </Link>
      </div>
      <span>@ byte_b4dger 2024</span>
    </div>
  );
};

export default Footer;
