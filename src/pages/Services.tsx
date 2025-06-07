import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';

const ServicesContainer = styled(motion.div)`
  min-height: calc(100vh - 80px);
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background.main};
  position: relative;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: ${({ theme }) => theme.colors.primary.main};
    margin-bottom: 1rem;
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: ${({ theme }) => theme.colors.primary.main};
      border-radius: 2px;
    }
  }

  p {
    font-size: clamp(1rem, 2vw, 1.2rem);
    color: ${({ theme }) => theme.colors.text.primary};
    max-width: 600px;
    margin: 0 auto;
    opacity: 0.8;
  }
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto 0;
  padding: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ServiceCard = styled(motion(Link))`
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: 16px;
  padding: 2rem;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 1.5rem;

  svg {
    width: 100%;
    height: 100%;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const ServiceTitle = styled.h3`
  font-size: clamp(1.5rem, 2vw, 2rem);
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary.main};
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: ${({ theme }) => theme.colors.primary.main};
    transition: width 0.3s ease;
  }

  ${ServiceCard}:hover &::after {
    width: 100%;
  }
`;

const ServiceDescription = styled.p`
  font-size: clamp(0.9rem, 1.5vw, 1rem);
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text.primary};
  opacity: 0.8;
  margin-bottom: 1.5rem;
`;

const SubServices = styled.div`
  margin: 1.5rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
`;

const SubServiceItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  padding: 0.5rem;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: 0.95rem;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '•';
    margin-right: 0.8rem;
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 1.2rem;
  }
`;

const Price = styled.div`
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary.main};
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 255, 255, 0.05);
  border-radius: 8px;
  display: inline-block;
`;

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
  </svg>
);

const DesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 3v18h18"/>
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
  </svg>
);

// Add new icon for SEO/Digital Marketing
const MarketingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
  </svg>
);

const Services = () => {
  const getServiceIcon = (serviceId: string) => {
    switch (serviceId) {
      case 'web-development':
        return <WebIcon />;
      case 'cloud-solutions':
        return <CloudIcon />;
      case 'uiux-design':
        return <DesignIcon />;
      case 'data-analytics':
        return <AnalyticsIcon />;
      case 'seo-marketing':
        return <MarketingIcon />;
      default:
        return <WebIcon />;
    }
  };

  const services = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom web applications and websites built with modern technologies.',
      price: { start: 'Starting at ₹2,999' },
      subServices: [
        'React/Next.js Development',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Integration'
      ]
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      price: { start: 'Starting at ₹4,999' },
      subServices: [
        'AWS Architecture',
        'DevOps Implementation',
        'Serverless Solutions',
        'Cloud Migration'
      ]
    },
    {
      id: 'uiux-design',
      title: 'UI/UX Design',
      description: 'User-centered design solutions for digital products.',
      price: { start: 'Starting at ₹1,499' },
      subServices: [
        'User Interface Design',
        'User Experience Design',
        'Design Systems',
        'Prototyping'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Data-driven insights and analytics solutions with custom dashboards.',
      price: { start: 'Starting at ₹2,999' },
      subServices: [
        'Business Intelligence',
        'Data Visualization',
        'Predictive Analytics',
        'Custom Dashboards'
      ]
    },
    {
      id: 'seo-marketing',
      title: 'SEO & Digital Marketing',
      description: 'Comprehensive digital marketing and search engine optimization strategies.',
      price: { start: 'Starting at ₹1,499' },
      subServices: [
        'Search Engine Optimization',
        'Social Media Marketing',
        'Content Marketing',
        'PPC Campaigns'
      ]
    }
  ];

  // Split services into top and bottom rows
  const topRowServices = services.slice(0, 3);
  const bottomRowServices = services.slice(3);

  return (
    <ServicesContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Discover our comprehensive range of digital solutions
        </motion.p>
      </Hero>

      <ServicesGrid>
        {topRowServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            as={Link}
            to={`/services/${service.id}`}
          >
            <ServiceIcon className="service-icon">
              {getServiceIcon(service.id)}
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <SubServices>
              {service.subServices.map((subService, idx) => (
                <SubServiceItem key={idx}>
                  {subService}
                </SubServiceItem>
              ))}
            </SubServices>
            <Price>{service.price.start}</Price>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <BottomRow>
        {bottomRowServices.map((service, index) => (
          <ServiceCard
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            as={Link}
            to={`/services/${service.id}`}
          >
            <ServiceIcon className="service-icon">
              {getServiceIcon(service.id)}
            </ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
            <SubServices>
              {service.subServices.map((subService, idx) => (
                <SubServiceItem key={idx}>
                  {subService}
                </SubServiceItem>
              ))}
            </SubServices>
            <Price>{service.price.start}</Price>
          </ServiceCard>
        ))}
      </BottomRow>
    </ServicesContainer>
  );
};

export default Services; 