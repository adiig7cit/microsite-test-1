import WhatsappOutlinedIcon from "@mui/icons-material/WhatsApp";
import AmbassadorHeadImage from './../assets/AmbassadorHeadImage.png'
import { Box, Modal } from "@mui/material";
import { useState } from "react";
import IndirectPostForm from './IndirectPostForm'

const AmbassadorCard = () => {
  const [modalOpen, setModalOpen] = useState(false);
  
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  return (
    <div className="w-[340px] h-fit mx-auto mb-5 mt-16 shadow-lg">
      <div className="bg-[#2874AE] h-32 relative">
        <div className="absolute flex justify-center inset-x-0 -mt-14">
          <img src={AmbassadorHeadImage} className="w-24 h-24 rounded-full" />
        </div>
        <div className="absolute bottom-0 mb-2 flex flex-col inset-x-0 items-center gap-2">
          <h3 className="text-white font-semibold text-lg font-Outfit">
            Rajbhushan
          </h3>
          <a href="#">
            <button
              className="text-white border-[1.5px] border-white 
            rounded-3xl py-1 px-5 hover:cursor-pointer text-xs"
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
          <button
            className="bg-[#22CC62] h-10 m-auto w-64 text-white font-Outfit text-sm rounded-lg font-medium tracking-lighter"
            onClick={handleOpen}
          >
            <div className="align-middle">
              <WhatsappOutlinedIcon />
              &nbsp;&nbsp;Start Whatsapp Chat
            </div>
          </button>
        </div>
      </div>
      <Modal open={modalOpen} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <IndirectPostForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
};

export default AmbassadorCard;
