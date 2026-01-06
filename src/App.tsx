import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <ScrollToTop />
      <WhatsAppButton />

      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Tanishka. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
