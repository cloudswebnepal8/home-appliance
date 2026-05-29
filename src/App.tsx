import { Route, Routes } from "react-router";
import { Hero, Hero2, Navbar } from "./Components";

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
          <Hero />
          <Hero2/>
          </>
        } />
      </Routes>
    </div>
  );
};

export default App;