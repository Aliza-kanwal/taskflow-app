import React from 'react';
import { useSwipeable } from 'react-swipeable';

function MobileGestures({ children }) {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [showSwipeHint, setShowSwipeHint] = React.useState(true);

  React.useEffect(() => {
    // Hide swipe hint after 5 seconds
    const timer = setTimeout(() => {
      setShowSwipeHint(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('Swiped left - close menu');
      setShowMobileMenu(false);
    },
    onSwipedRight: () => {
      console.log('Swiped right - open menu');
      setShowMobileMenu(true);
    },
    onSwipedUp: () => {
      console.log('Swiped up - scroll to top');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    onSwipedDown: () => {
      console.log('Swiped down - refresh');
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
    trackTouch: true,
    delta: 10,
    swipeDuration: 500,
  });

  const cardHandlers = useSwipeable({
    onSwipedLeft: () => {
      alert('Swipe left on card - show next feature');
    },
    onSwipedRight: () => {
      alert('Swipe right on card - show previous feature');
    },
  });

  return (
    <div {...handlers}>
      {/* Mobile menu indicator */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-purple-900/95 backdrop-blur-lg z-50 flex items-center justify-center">
          <div className="text-white text-center">
            <h2 className="text-3xl font-bold mb-8">Menu</h2>
            <ul className="space-y-6 text-xl">
              <li><a href="#features" className="hover:text-purple-300">Features</a></li>
              <li><a href="#testimonials" className="hover:text-purple-300">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-purple-300">Pricing</a></li>
            </ul>
            <button 
              onClick={() => setShowMobileMenu(false)}
              className="mt-8 bg-white text-purple-900 px-6 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Feature cards with swipe */}
      <div className="feature-cards-swipeable" {...cardHandlers}>
        {children}
      </div>

      {/* Swipe hint for mobile - Fixed positioning */}
      {showSwipeHint && (
        <div className="md:hidden fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm z-40 animate-bounce">
          ← Swipe to navigate →
        </div>
      )}
    </div>
  );
}

export default MobileGestures;