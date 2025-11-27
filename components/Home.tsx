import React from 'react';
import Hero from './Hero';
import ProblemTransformation from './ProblemTransformation';
import Features from './Features';
import Markets from './Markets';
import CallToAction from './CallToAction';
import { ViewState } from '../App';

interface HomeProps {
  onNavigate: (view: ViewState) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <ProblemTransformation />
      <Markets />
      <Features />
      <CallToAction onNavigate={onNavigate} />
    </>
  );
};

export default Home;