import { useNavigate } from "react-router-dom";

const Home = () => {
      const navigateTo = useNavigate();

    const handleClick1 = () => {
      navigateTo(`/ucla`)
    };
    const handleClick2 = () => {
      navigateTo(`/stetson`);
    };
    const handleClick3 = () => {
      navigateTo(`/su`);
    };
  return (
    <div className="flex flex-col w-full h-screen gap-8 items-center justify-center bg-gray-500">
      <button
        className="bg-black text-white font-semibold text-lg px-4 py-3 rounded-lg w-56 hover:text-black hover:bg-white hover:cursor-pointer"
        onClick={handleClick1}
      >
        UCLA
      </button>
      <button
        className="bg-black text-white font-semibold text-lg px-4 py-3 rounded-lg w-56 hover:text-black hover:bg-white hover:cursor-pointer"
        onClick={handleClick2}
      >
        Stetson
      </button>
      <button
        className="bg-black text-white font-semibold text-lg px-4 py-3 rounded-lg w-56 hover:text-black hover:bg-white hover:cursor-pointer"
        onClick={handleClick3}
      >
        Seattle University
      </button>
    </div>
  );
};

export default Home;
