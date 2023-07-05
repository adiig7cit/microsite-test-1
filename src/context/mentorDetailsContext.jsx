import { createContext, useContext } from "react";

const mentorDetailsContext = createContext();

export const MentorDetailsContextProvider = ({ value, children }) => {
  return (
    <mentorDetailsContext.Provider value={value}>
      {children}
    </mentorDetailsContext.Provider>
  );
};

export const useMentorDetails = () => {
  const details = useContext(mentorDetailsContext);
  return details;
};

export default mentorDetailsContext;
