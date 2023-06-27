import FilterInput from "./FilterInput"

const Filters = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-32 h-14 mt-32">
      <FilterInput placeholder='Country'/>
      <FilterInput placeholder='Specialisation'/>
    </div>
  )
}

export default Filters