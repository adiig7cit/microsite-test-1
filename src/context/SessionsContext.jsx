import React, { createContext, useEffect, useState } from "react";

const SessionInfoContext = createContext();

export const SessionInfoProvider = ({ children }) => {
  const [isMobile, setMobile] = useState(window.innerWidth <= 768);

  const updateMedia = () => {
    setMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <SessionInfoContext.Provider value={isMobile}>
      {children}
    </SessionInfoContext.Provider>
  );
};

export default SessionInfoContext;
