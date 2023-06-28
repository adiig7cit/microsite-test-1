import HeaderBackgroundImage from "./../assets/header_bg.png";
import HeaderMainImage from "./../assets/header_main.png";

const Header = () => {
  return (
    <div className="relative flex flex-col h-32 md:h-56">
      <div>
        <img src={HeaderBackgroundImage} className="h-20 w-full md:h-44"/>
      </div>
      <div className="lg:hidden absolute p-4 right-0 top-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="lg:flex inset-x-0 absolute hidden bottom-0 justify-center font-Outfit font-semibold text-lg gap-10 md:flex-row">
        <span>Home</span>
        <span>L.L.M. degree requirements</span>
        <span>Specializations</span>
        <span>Apply now</span>
      </div>

      <div className="absolute inset-x-0 md:ml-20 lg:ml-28 md:inset-x-auto md:inset-y-28 inset-y-11 lg:inset-y-24 flex justify-center">
        <img
          src={HeaderMainImage}
          className="h-16 w-16 lg:h-40 lg:w-40 md:h-32 md:w-32"
        />
      </div>
    </div>
  );
};

export default Header;
