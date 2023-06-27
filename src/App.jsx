import Header from "./components/Header"
import CollegeDescription from './components/CollegeDescription'
import Filters from "./components/Filters"

const App = () => {

  return (
    <div className="flex flex-col">
      <Header />
      <CollegeDescription />
      <Filters />
    </div>
  )
}

export default App
