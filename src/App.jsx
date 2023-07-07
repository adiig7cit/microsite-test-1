import Header from "./components/Header";
import { useState, useEffect } from "react";
import CollegeDescription from "./components/CollegeDescription";
import Ambassadors from "./components/Ambassadors";
import FilterInput from "./components/FilterInput";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";


// export const mentorQuery = async () => {
//   console.log("running mentor query");
//   return await axios.get(
//     `https://sh63i7vbx5.execute-api.ap-south-1.amazonaws.com/mentors/info`
//   );
// };

const App = () => {
  // const [selectedCountry, setSelectedCountry] = useState("");
  // const [selectedSpecialization, setSelectedSpecialization] = useState("");
  // const [filteredData, setFilteredData] = useState([]);

  // const handleFilterChange = async (countryValue, specializationValue) => {
  //   setSelectedCountry(countryValue);
  //   setSelectedSpecialization(specializationValue);

  //   const result = await mentorQuery();
  //   const mentors = result.data;

  //   let filteredMentors = [];
  //   if (
  //     (!countryValue || countryValue === "") &&
  //     (!specializationValue || specializationValue === "")
  //   ) {
  //     filteredMentors = mentors.filter((mentor) => mentor.platform_mentor);
  //   } else {
  //     filteredMentors = mentors.filter(
  //       (mentor) =>
  //         (mentor.country.trim().toLowerCase() === countryValue ||
  //           countryValue === "") &&
  //         (mentor.specialization.trim().toLowerCase() === specializationValue ||
  //           specializationValue === "")
  //     );
  //   }
  //   filteredMentors.sort((a, b) => a.name.localeCompare(b.name));
  //   setFilteredData(filteredMentors);
  // };

  // useEffect(() => {
  //   handleFilterChange(selectedCountry, selectedSpecialization);
  // }, [selectedCountry, selectedSpecialization]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ucla" element={<Layout />} />
        <Route path="/stetson" element={<Layout />} />
        <Route path="/su" element={<Layout />} />
        <Route path="/wakelaw" element={<Layout />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
