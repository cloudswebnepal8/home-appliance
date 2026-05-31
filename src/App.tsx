import { Route, Routes } from "react-router";
import { Hero, Hero2, HowItWorks, Navbar, OurServices, WhyChooseUs } from "./Components";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
          <Hero />
          <Hero2/>
          <OurServices/>
          <WhyChooseUs/>
          <HowItWorks />
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;