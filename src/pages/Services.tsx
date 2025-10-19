import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import { PageHeading, PageSubheading, pageHeadingAnimation, pageSubheadingAnimation } from '../styles/PageHeading';

const ServicesContainer = styled(motion.div)`
  min-height: calc(100vh - 80px);
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background.main};
  position: relative;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ServiceCard = styled(motion(Link))`
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: 16px;
  padding: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const ServiceImage = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary.main}20 0%,
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${ServiceCard}:hover & {
    img {
      transform: scale(1.05);
    }

    &::after {
      opacity: 1;
    }
  }
`;

const ServiceContent = styled.div`
  padding: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
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
  flex: 1;
`;

const ServiceTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.colors.primary.main}20;
  color: ${({ theme }) => theme.colors.primary.main};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary.main}40;
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    background: ${({ theme }) => theme.colors.primary.main};
    color: white;
  }
`;

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

  const servicesData = [
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      image: '/img/react.jpg',
      tags: ['React', 'Next.js', 'Node.js', 'TypeScript']
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment solutions.',
      image: '/img/cloud.jpg',
      tags: ['AWS', 'DevOps', 'Docker', 'Kubernetes']
    },
    {
      id: 'uiux-design',
      title: 'UI/UX Design',
      description: 'User-centered design solutions for digital products.',
      image: '/img/uiux.png',
      tags: ['Figma', 'Prototyping', 'User Research', 'Design Systems']
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Data-driven insights and analytics solutions with custom dashboards.',
      image: '/img/typescript.jpg',
      tags: ['Business Intelligence', 'Data Viz', 'Analytics', 'Dashboards']
    }
  ];

  return (
    <ServicesContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero>
        <PageHeading {...pageHeadingAnimation}>
          Our Services
        </PageHeading>
        <PageSubheading {...pageSubheadingAnimation}>
          Transforming ideas into digital reality with cutting-edge solutions tailored to your business needs.
        </PageSubheading>
      </Hero>

      <ServicesGrid>
        {servicesData.map((service, index) => (
          <ServiceCard
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            to={`/services/${service.id}`}
          >
            <ServiceImage>
              <img src={service.image} alt={service.title} />
            </ServiceImage>
            <ServiceContent>
              {/* <ServiceIcon className="service-icon">
                {getServiceIcon(service.id)}
              </ServiceIcon> */}
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceTags>
                {service.tags.map((tag, idx) => (
                  <Tag key={idx}>{tag}</Tag>
                ))}
              </ServiceTags>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services; 