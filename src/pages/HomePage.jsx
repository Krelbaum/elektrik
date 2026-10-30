import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import PanelTypes from '../components/PanelTypes';
import Advantages from '../components/Advantages';
import Gallery from '../components/Gallery';
import OrderForm from '../components/OrderForm';
import Contacts from '../components/Contacts';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen">
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
  );
}

export default HomePage;
