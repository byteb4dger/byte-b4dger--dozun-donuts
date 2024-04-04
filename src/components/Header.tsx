import ThemeButton from "./ThemeButton";
import Logo from "./Logo";
import BasketButton from "./BasketButton";
const Header = () => {
  return (
    <div className="z-10 mx-auto flex items-center gap-x-12 sm:gap-x-32 md:mt-6 md:scale-125 lg:mt-12 lg:scale-150 lg:gap-x-44">
      <Logo />
      <BasketButton />
      <ThemeButton />
    </div>
  );
};

export default Header;
