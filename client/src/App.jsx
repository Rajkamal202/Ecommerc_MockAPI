import React, { useRef, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './Routes';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const ScrollWrapper = ({ children }) => {
  const { pathname } = useLocation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        multiplier: 1,
        class: 'is-revealed',
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      }}
      containerRef={containerRef}
      watch={[pathname]}
    >
      <div data-scroll-container ref={containerRef}>
        {children}
      </div>
    </LocomotiveScrollProvider>
  );
};

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollWrapper>
          <Header />
          <main className="flex-grow bg-gray-100">
            <Routes />
          </main>
          <Footer />
        </ScrollWrapper>
      </Router>
    </CartProvider>
  );
}

export default App;
