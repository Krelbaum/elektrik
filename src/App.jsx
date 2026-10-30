import { useEffect } from 'react';
import useLenisScroll from './hooks/useLenisScroll';

function App() {
  const lenisRef = useLenisScroll();

  useEffect(() => {
    // Prevent body scroll when Lenis is active
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return <HomePage lenisRef={lenisRef} />;
}

export default App;
