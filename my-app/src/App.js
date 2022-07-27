import React from 'react';
import './App.sass';
import Nav from './components/SunGroup/Nav/Nav';
import Header from './components/SunGroup/Header/Header';
import SectionAbout from './components/SunGroup/SectionAbout/SectionAbout';
import OfferSection from './components/SunGroup/OfferSection/OfferSection';
import BlogSection from './components/SunGroup/BlogSection/BlogSection';
import CardsSection from './components/SunGroup/CardsSection/CardsSection';
import OtherSection from './components/SunGroup/OtherSection/OtherSection';
import WriteUsSection from './components/SunGroup/WriteUsSection/WriteUsSection';
import Footer from './components/SunGroup/Footer/Footer';

function App() {
	return (
		<>
			<Nav />
			<Header />
			<SectionAbout />
			<OfferSection />
			<BlogSection />
			<CardsSection />
			<OtherSection />
			<WriteUsSection />
			<Footer />
		</>
	);
}

export default App;
