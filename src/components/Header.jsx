import HeaderBackgroundImage from "./../assets/header_bg.png";
import HeaderMainImage from "./../assets/header_main.png";

const Header = () => {
  return (
    <div className="relative flex flex-col w-full h-32">
      <div>
        <img src={HeaderBackgroundImage} />
      </div>
      <div className="absolute inset-x-0 inset-y-8 bottom-0 flex justify-center">
        <img src={HeaderMainImage} className="h-16 w-16" />
      </div>
    </div>
  );
};

export default Header;
