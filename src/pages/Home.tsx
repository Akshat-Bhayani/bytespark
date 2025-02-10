import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  height: 90vh;
  background: #2563eb;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  padding: 2rem;

  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  p {
    font-size: clamp(1rem, 2vw, 1.25rem);
    opacity: 0.9;
    margin-bottom: 2rem;
  }
`;

const ServicesSection = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.theme.colors.background};
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 3rem auto 0;
`;

const ServiceCard = styled(motion.div)`
  padding: 2.5rem;
  border-radius: 12px;
  background: white;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: ${props => props.theme.transitions.default};
  text-align: center;

  h3 {
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.theme.colors.lightText};
    line-height: 1.6;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.lightText};
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Transform Your Business with Modern IT Solutions</h1>
          <p>Custom software development, cloud solutions, and digital transformation services</p>
        </HeroContent>
      </HeroSection>
      
      <ServicesSection>
        <SectionTitle>Our Services</SectionTitle>
        <SectionSubtitle>
          Comprehensive digital solutions tailored to your business needs
        </SectionSubtitle>
        <ServiceGrid>
          {[
            {
              title: "Custom Websites",
              description: "Tailored web solutions that drive growth and engagement"
            },
            {
              title: "Cloud Solutions",
              description: "Scalable and secure cloud infrastructure for your business"
            },
            {
              title: "UI/UX Design",
              description: "User-centered design solutions that delight your customers"
            },
            {
              title: "Graphic Design",
              description: "Creative visual solutions that elevate your brand"
            }
          ].map((service, index) => (
            <ServiceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </ServicesSection>
    </>
  );
};

export default Home; 