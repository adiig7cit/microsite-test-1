import WhatsappOutlinedIcon from "@mui/icons-material/WhatsApp";
import AmbassadorHeadImage from './../assets/AmbassadorHeadImage.png'
const AmbassadorCard = () => {
  return (
    <div className="w-[340px] h-[445px] mx-auto bg-white mb-5 shadow-lg">
      <div className="bg-[#2874AE] h-[134px]">
        <div className="bg-white w-[100px] h-[100px] mt-[48px] rounded-full p-[2px] translate-x-[118px] translate-y-[-40px]">
          <img
            src={AmbassadorHeadImage}
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white font-bold text-base font-Outfit mb-[5px] -mt-[35px]">
            Rajbhushan
          </h3>
          <a href="#">
            <button
              className="text-white border-[1.5px] border-white 
            rounded-[25px] py-[3px] px-[22px] hover:cursor-pointer text-xs -mt-[4px]"
            >
              LinkedIn Profile
            </button>
          </a>
        </div>
      </div>

      <div className="w-full bg-white py-3 px-8 mb-2">
        <div className="flex flex-col font-Outfit gap-4">
          <div className="flex flex-col">
            <p className="text-[#4B4A4A]">UNIVERSITY</p>
            <p>Tel Aviv University</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#4B4A4A]">SPECIALISATION</p>
            <p>Law & Business</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[#4B4A4A]">COUNTRY</p>
            <p>India</p>
          </div>
          <button className="bg-[#22CC62] h-10 w-72 text-white font-Outfit text-sm rounded-lg font-medium tracking-lighter">
            <div className="align-middle">
              <WhatsappOutlinedIcon />
              &nbsp;&nbsp;Start Whatsapp Chat
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorCard;
