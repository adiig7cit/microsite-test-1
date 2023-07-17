import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ucla" element={<Layout />} />
        <Route path="/stetson" element={<Layout />} />
        <Route path="/su" element={<Layout />} />
        <Route path="/wakelaw" element={<Layout />} />
        <Route path="/sandiego" element={<Layout />} />
        <Route path="/templelaw" element={<Layout />} />

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
