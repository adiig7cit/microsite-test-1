import FilterInput from "./FilterInput"

const Filters = () => {
  return (
    <div className="flex h-40 md:h-20 justify-center w-full mt-8 p-2">
      <div className="flex flex-col md:flex-row w-fit justify-center gap-8 md:gap-16">
        <FilterInput placeholder="Country" />
        <FilterInput placeholder="Specialisation" />
      </div>
    </div>
  );
}

export default Filters