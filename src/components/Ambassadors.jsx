import AmbassadorCard from "./AmbassadorCard"
import axios from "axios";
import { useState, useEffect } from "react";

export const universitiesQuery = async () => {
  console.log('running universities query');
  return await axios.get(
    `https://sh63i7vbx5.execute-api.ap-south-1.amazonaws.com/universities/info`
  );
};
const Ambassadors = ({data}) => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    async function runQuery() {
      const result = await universitiesQuery()
      const universitiesList = result.data
      setUniversities(
        universitiesList.map((d) => {
          return d.university
        })
      );
    }
      runQuery();
    }, []);

  return (
    <div className="md:mt-12 mb-4 gap-2 grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-3">
      {data.map((mentor) => {
        if (mentor?.test_mentor) return null;
        return (
          <AmbassadorCard
            key={mentor._id}
            universities={universities}
            mentor={mentor}
          />
        );
      })}
    </div>
  );
}

export default Ambassadors