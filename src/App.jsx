import Features from "./Components/Features";
import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-amber-50">
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default App;
