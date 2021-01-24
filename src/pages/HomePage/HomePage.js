import React from 'react';

import { 
  NavBar,
  Header,
  RedefineSection,
  WeHelpYouSection,
  HowItWorksSection,
  TestimonialsSection,
  OurPartnersSection,
  Footer,
} from './components';
import { FloatingButton } from '../../components';

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Header />
      <RedefineSection />
      <WeHelpYouSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <OurPartnersSection />
      <Footer />
      <FloatingButton />
    </>
  )
}