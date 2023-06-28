import Header from "./components/Header"
import CollegeDescription from './components/CollegeDescription'
import Filters from "./components/Filters"
import Ambassadors from "./components/Ambassadors"

const App = () => {

  return (
    <div className="flex flex-col w-full">
      <Header />
      <CollegeDescription />
      <Filters />
      <Ambassadors />
    </div>
  )
}

export default App
