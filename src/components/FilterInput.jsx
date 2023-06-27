// eslint-disable-next-line react/prop-types
const FilterInput = ({ placeholder }) => {
  return (
    <div className="flex relative w-full justify-center h-16">
      <input
        type="search"
        id=""
        className="w-72 border-2 border-[#B8BBC2] rounded-xl p-4 text-black placeholder-black"
        placeholder={placeholder}
        required
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="black"
        className="w-6 h-6 absolute top-1/2 right-3 transform -translate-y-1/2 hover:cursor-pointer"
        style={{ pointerEvents: "none" }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
        />
      </svg>
    </div>
  );
};

export default FilterInput;
