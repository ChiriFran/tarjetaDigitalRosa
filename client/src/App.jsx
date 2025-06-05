import './App.css';
import { useRef } from 'react';
import PasswordOverlay from './components/PasswordOverlay';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import IntroMessage from './components/IntroMessage';
import ImageGallery from './components/ImageGallery';
import EventInfo from './components/EventInfo';
import InstagramHashtag from './components/InstagramHashtag';
import AttendanceConfirmation from './components/AttendanceConfirmation';
import FadeInSection from './components/FadeInSection';
import GoogleMapsDirections from './components/GoogleMapsDirections';
import FooterMessage from './components/FooterMessage';
import FloatingButtons from './components/FloatingButtons';

import img1 from '../media/hero/hero-desktop.jpg';
import img2 from '../media/hero/hero-desktop-2.jpg';
import img3 from '../media/hero/hero-desktop-3.jpg';

function App() {
  const musicRef = useRef();
  const gallerySet1 = [img2, img1, img3];
  const gallerySet2 = [img3, img1, img2];

  // 🎯 Referencia para scrollear
  const attendanceRef = useRef(null);

  return (
    <>
      <PasswordOverlay musicRef={musicRef} />

      <FadeInSection><Hero /></FadeInSection>
      <FadeInSection><Countdown targetDate="2025-09-10T17:00:00" /></FadeInSection>
      <FadeInSection><IntroMessage mensaje="Cada sonrisa, cada lágrima, cada paso que di me trajo hasta aquí. Esta noche no se trata solo de mí, se trata de todos los que caminaron a mi lado, de los que me enseñaron a ser fuerte, a soñar, a amar. ¡Gracias por estar en mi historia!" /></FadeInSection>      <FadeInSection><ImageGallery images={gallerySet1} /></FadeInSection>
      <FadeInSection><EventInfo /></FadeInSection>
      <FadeInSection><IntroMessage mensaje="Hoy mis sueños se visten de fiesta, y nada me haría más feliz que tenerte a mi lado para compartir esta noche mágica que marca el comienzo de una nueva etapa en mi vida." /></FadeInSection>
      <FadeInSection><ImageGallery images={gallerySet2} /></FadeInSection>
      <FadeInSection><InstagramHashtag /></FadeInSection>

      {/* 🔗 Sección con el ref */}
      <FadeInSection>
        <div ref={attendanceRef} id="attendance-section">
          <AttendanceConfirmation />
        </div>
      </FadeInSection>

      <FadeInSection><GoogleMapsDirections /></FadeInSection>
      <FadeInSection><FooterMessage /></FadeInSection>

      {/* Botón con scroll hacia Attendance */}
      <FloatingButtons attendanceRef={attendanceRef} musicRef={musicRef} />
    </>
  );
}

export default App;
