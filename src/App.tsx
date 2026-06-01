import { Route, Routes } from "react-router";
import { Footer, Hero, Hero2, HowItWorks, Navbar, OurServices, WhyChooseUs } from "./Components";

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
          <Footer />
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;