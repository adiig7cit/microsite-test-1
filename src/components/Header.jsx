import HeaderBackgroundImage from "./../assets/header_bg.png";
import HeaderMainImage from "./../assets/header_main.png";

const Header = () => {
  return (
    <div className="relative flex flex-col w-full h-32">
      <div>
        <img src={HeaderBackgroundImage} />
      </div>
      <div className="absolute inset-x-0 md:ml-12 md:inset-x-auto md:inset-y-16 inset-y-8 lg:inset-y-28 flex justify-center">
        <img src={HeaderMainImage} className="h-16 w-16 lg:h-40 lg:w-40 md:h-32 md:w-32" />
      </div>
    </div>
  );
};

export default Header;
