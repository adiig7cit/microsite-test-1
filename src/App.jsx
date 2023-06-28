import Header from "./components/Header"
import CollegeDescription from './components/CollegeDescription'
import Ambassadors from "./components/Ambassadors"
import FilterInput from "./components/FilterInput"

const App = () => {

  return (
    <div className="flex flex-col w-full">
      <Header />
      <CollegeDescription />
      <FilterInput />
      <Ambassadors />
    </div>
  )
}

export default App
