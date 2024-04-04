import Image from "next/image";
import "@fontsource/bungee";
import Pic from "/public/pic.jpg";

const FeatureOne = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center gap-10 lg:flex-row lg:gap-x-24">
      <div
        className="flex flex-1 flex-col items-start justify-center gap-y-4 sm:gap-y-8 md:gap-y-12"
        style={{ fontFamily: "'Bungee', system-ui" }}
      >
        <h1 className="text-balance text-3xl leading-relaxed text-sky-500 sm:text-4xl md:text-5xl dark:text-rose-50">
          Sprawdź nasze pyszne oponki!
        </h1>
        <h2 className="text-balance text-2xl leading-relaxed text-sky-500 sm:text-3xl md:text-4xl dark:text-rose-50">
          Codziennie świeże!
        </h2>
        <h3 className="text-balance text-xl leading-relaxed text-sky-500 sm:text-2xl md:text-3xl dark:text-rose-50">
          Nie mrożone!
        </h3>
      </div>
      <div className="flex-1 lg:scale-150">
        <div className="dark:bg-accent dark:text-text flex items-center justify-center rounded-3xl bg-rose-600 p-2 text-pink-50 shadow-md shadow-slate-500 dark:shadow-none">
          <Image
            src={Pic}
            alt=""
            className="rotate-6 rounded-3xl border-8 border-emerald-400 shadow-md shadow-slate-500 dark:border-rose-50 dark:shadow-none"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureOne;
