import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { useNavigate } from 'react-router-dom';
import { DefaultTheme } from 'styled-components';

// Define types for our tech stack
interface TechItem {
  name: string;
  description: string;
}

// Styled Components
const ServiceContainer = styled(motion.div)`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background.main};
`;

const ServiceHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  padding: 3rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.main}10, ${({ theme }) => theme.colors.primary.main}05);
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary.main}20;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${({ theme }) => theme.colors.primary.main}, ${({ theme }) => theme.colors.primary.main}50);
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.main}, ${({ theme }) => theme.colors.primary.main}80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.text.primary};
    max-width: 800px;
    margin: 0 auto;
    opacity: 0.9;
  }
`;

const PriceTag = styled.div`
  background: ${({ theme }) => theme.colors.background.light};
  color: ${({ theme }) => theme.colors.primary.main};
  padding: 1rem 2rem;
  border-radius: 12px;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 2rem 0;
  border: 2px solid ${({ theme }) => theme.colors.primary.main}20;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.primary.main}15;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const FeaturesSection = styled.div`
  margin: 4rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.light};
  padding: 2rem;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary.main}20;
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary.main};
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.primary.main}10;
    border-color: ${({ theme }) => theme.colors.primary.main};

    &::before {
      transform: scaleY(1);
    }

    svg {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }

  svg {
    width: 24px;
    height: 24px;
    color: ${({ theme }) => theme.colors.primary.main}80;
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  span {
    font-size: 1.1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;

const TechStackSection = styled.div`
  margin: 4rem 0;
  padding: 3rem;
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary.main}20;
`;

const TechStackTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary.main};
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 2px;
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const TechItem = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.main};
  padding: 1.2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.primary.main}20;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.primary.main}10;
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  h4 {
    color: ${({ theme }) => theme.colors.primary.main};
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const BackButton = styled(motion.button)`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: ${({ theme }) => theme.colors.primary.main};
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(-5px);
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);
  const navigate = useNavigate();

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Get technologies from service data
  const serviceTechnologies = service.technologies || [];

  return (
    <ServiceContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BackButton
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Services
      </BackButton>

      <ServiceHeader>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
        <PriceTag>
          Starting From ₹{service.price.start}
        </PriceTag>
      </ServiceHeader>

      <FeaturesSection>
        {service.features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <CheckIcon />
            <span>{feature}</span>
          </FeatureCard>
        ))}
      </FeaturesSection>

      <TechStackSection>
        <TechStackTitle>Technologies We Use</TechStackTitle>
        <TechGrid>
          {serviceTechnologies.map((tech: string, index: number) => (
            <TechItem
              key={tech}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h4>{tech}</h4>
            </TechItem>
          ))}
        </TechGrid>
      </TechStackSection>
    </ServiceContainer>
  );
};

export default ServiceDetail; 