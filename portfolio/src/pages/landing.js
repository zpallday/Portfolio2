import React from 'react';
import NavbarLanding from './navbarlanding';
import Team from './teampage';
import Footer from './footer';
import Features from './features';



export default function Landing() {
  return (
    <div className="overflow-x-hidden">
      {/* LandpageNavBar */}
      <NavbarLanding />

      {/* Title */}


      {/* Features */}
      <Features />

      {/* App Screenshots */}
      <h2 className="text-4xl flex justify-center font-sembold text-black-600 p-12" id="demo">
        App Screenshots
      </h2>
    

      {/* Review */}
   
      {/* Team */}
      <Team />

      {/* footer */}
      <Footer />
    </div>
  );
}
