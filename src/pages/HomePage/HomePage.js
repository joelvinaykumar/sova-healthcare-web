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
    </>
  )
}