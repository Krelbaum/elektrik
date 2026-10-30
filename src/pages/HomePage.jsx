import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import PanelTypes from './components/PanelTypes';
import Advantages from './components/Advantages';
import Gallery from './components/Gallery';
import OrderForm from './components/OrderForm';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import ThreeBackground from './components/ThreeBackground';
import CustomCursor from './components/CustomCursor';
import { useState } from 'react';

function HomePage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      <ThreeBackground />

      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <div
        className={`transition-opacity duration-700 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Header />
        <main>
          <Hero />
          <Services />
          <PanelTypes />
          <Advantages />
          <Gallery />
          <OrderForm />
          <Contacts />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
