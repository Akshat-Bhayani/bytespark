import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Component imports (will be created next)
import PortfolioHero from '../components/PortfolioHero';
import Projects from '../components/Projects';
import PortfolioEdge from '../components/PortfolioEdge';
import PortfolioTeam from '../components/PortfolioTeam';
import PortfolioCTA from '../components/PortfolioCTA';

const PortfolioContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  overflow-x: hidden;
`;

const SectionDivider = styled.div`
  height: 1px;
  background: linear-gradient(90deg, 
    transparent 0%,
    ${props => props.theme.colors.primary}40 20%,
    ${props => props.theme.colors.primary.light}60 50%,
    ${props => props.theme.colors.primary}40 80%,
    transparent 100%
  );
  margin: 80px 0;
  
  @media (max-width: 768px) {
    margin: 60px 0;
  }
`;

const Portfolio: React.FC = () => {
  return (
    <PortfolioContainer>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Hero Section */}
        <PortfolioHero />
        
        <SectionDivider />
        
        {/* Projects Showcase */}
        <Projects />
        
        <SectionDivider />
        
        {/* Our Edge Section */}
        <PortfolioEdge />
        
        <SectionDivider />
        
        {/* Team Section */}
        <PortfolioTeam />
        
        <SectionDivider />
        
        {/* Call to Action */}
        <PortfolioCTA />
      </motion.div>
    </PortfolioContainer>
  );
};

export default Portfolio;