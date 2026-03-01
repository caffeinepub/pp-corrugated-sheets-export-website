import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import ExportLogistics from './components/ExportLogistics';
import Certifications from './components/Certifications';
import TrustStats from './components/TrustStats';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Products />
        <WhyChooseUs />
        <ExportLogistics />
        <Certifications />
        <TrustStats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
