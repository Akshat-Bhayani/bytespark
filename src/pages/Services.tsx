import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const ServicesContainer = styled(motion.div)`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${props => props.theme.colors.background};
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  margin-top: 4rem;
`;

const PricingCard = styled(motion.div)`
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
  text-align: center;
  background: white;
  transition: ${props => props.theme.transitions.default};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.theme.colors.background.gradient};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::before {
    transform: scaleX(1);
  }

  h2 {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1.75rem;
    margin-bottom: ${props => props.theme.spacing.lg};
  }

  ul {
    list-style: none;
    margin: ${props => props.theme.spacing.xl} 0;
    padding: 0;
    
    li {
      margin: ${props => props.theme.spacing.sm} 0;
      color: ${props => props.theme.colors.text.muted};
      font-size: 1.1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: ${props => props.theme.spacing.sm};

      svg {
        color: ${props => props.theme.colors.primary.main};
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Price = styled.div`
  font-size: 3rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
  margin: 1.5rem 0;
  
  &::before {
    content: '₹';
    font-size: 1.5rem;
    vertical-align: super;
  }
`;

const Button = styled.button`
  background: ${props => props.theme.colors.primary.main};
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: 600;
  transition: ${props => props.theme.transitions.default};
  
  &:hover {
    background: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const ServiceLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
  }
`;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Hero = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxl};
  
  h1 {
    font-size: clamp(2rem, 5vw, 3.5rem);
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: ${props => props.theme.spacing.lg};
  }
  
  p {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text.muted};
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const Services = () => {
  return (
    <ServicesContainer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
       <Hero>
        <motion.h1 variants={itemVariants}>Our Services & Pricing</motion.h1>
      </Hero>
      <PricingGrid>
        {services.map((service, index) => (
          <ServiceLink to={`/services/${service.id}`} key={service.id}>
            <PricingCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2>{service.title}</h2>
              <Price>{service.price.start}</Price>
              <ul>
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <Button>Learn More</Button>
            </PricingCard>
          </ServiceLink>
        ))}
      </PricingGrid>
    </ServicesContainer>
  );
};

export default Services; 