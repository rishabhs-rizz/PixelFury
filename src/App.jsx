import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />

      <section className="z-0 min-h-screen bg-blue-500" />
    </main>
  );
};

export default App;
