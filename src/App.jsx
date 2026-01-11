import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import BusinessSolutions from "./components/BusinessSolutions";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessSection from "./components/ProcessSection"
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="w-full bg-white m-0 p-0">
      <Navbar />
      <main className="w-full">
        <div className="m-4">
          <Hero />
        </div>
        <AboutSection />
        <BusinessSolutions />
        <WhyChooseUs />
        <ProcessSection />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}

export default App;
