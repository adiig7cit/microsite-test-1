import WhatsappOutlinedIcon from "@mui/icons-material/WhatsApp";
import AmbassadorHeadImage from './../assets/AmbassadorHeadImage.png'
const AmbassadorCard = () => {
  return (
    <div className="w-[287px] h-[500px] bg-white mb-5 shadow-lg">
      <div className="bg-[#2874AE] h-[180px]">
        <div className="bg-white w-[100px] h-[100px] mt-[48px] rounded-full p-[2px] translate-x-[92px] translate-y-[-40px]">
          <img src={AmbassadorHeadImage} className="w-full h-full rounded-full" />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-white font-bold text-base font-Outfit mb-[5px]">
            Rajbhushan
          </h3>
          <a href="#">
            <button
              className="text-white border-[1.5px] border-white 
            rounded-[25px] py-[3px] px-[22px] mt-[10px] hover:cursor-pointer text-xs"
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
          <button className="bg-[#22CC62] px-4 py-3 text-white font-Outfit text-sm rounded-lg font-medium tracking-lighter">
            <WhatsappOutlinedIcon />
            &nbsp;&nbsp;Start Whatsapp Chat
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmbassadorCard;
