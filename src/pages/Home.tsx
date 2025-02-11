import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';

const HomeContainer = styled(motion.div)`
  overflow: hidden;
`;

const HeroSection = styled.section`
  background: ${props => props.theme.colors.background.gradient};
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg};
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  background-image: url('./HomePage.jpg') ;
  background-size: cover;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  text-align: center;
  position: relative;
  z-index: 1;

  h1 {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    margin-bottom: ${props => props.theme.spacing.lg};
    line-height: 1.2;
  }

  p {
    font-size: clamp(1.1rem, 3vw, 1.5rem);
    max-width: 800px;
    margin: 0 auto ${props => props.theme.spacing.xl};
    opacity: 0.9;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: white;
  color: ${props => props.theme.colors.primary.main};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.full};
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: ${props => props.theme.transitions.default};
  box-shadow: ${props => props.theme.shadows.medium};

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  background: transparent;
  color: ${props => props.theme.colors.primary.main};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.full};
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: ${props => props.theme.transitions.default};
  border: 2px solid ${props => props.theme.colors.primary.main};

  &:hover {
    background: ${props => props.theme.colors.primary.main};
    color: white;
    transform: translateY(-2px);
  }
`;

const Section = styled.section`
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${props => props.theme.colors.text.secondary};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const AboutPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  align-items: center;
`;

const AboutContent = styled.div`
  p {
    color: ${props => props.theme.colors.text.muted};
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const BlogCard = styled(motion.article)`
  background: white;
  border-radius: ${props => props.theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: ${props => props.theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.large};
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: ${props => props.theme.spacing.lg};

  h3 {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1.3rem;
    margin-bottom: ${props => props.theme.spacing.sm};
  }

  p {
    color: ${props => props.theme.colors.text.muted};
    margin-bottom: ${props => props.theme.spacing.md};
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const ViewAllButton = styled(Link)`
  display: block;
  text-align: center;
  color: ${props => props.theme.colors.primary.main};
  text-decoration: none;
  font-weight: 600;
  padding: ${props => props.theme.spacing.md};
  transition: ${props => props.theme.transitions.default};

  &:hover {
    color: ${props => props.theme.colors.primary.dark};
  }
`;

const ServicesPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const ServiceCard = styled(motion.div)`
  background: white;
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.large};
  box-shadow: ${props => props.theme.shadows.medium};
  text-align: center;
  transition: ${props => props.theme.transitions.default};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.theme.shadows.large};

    &::before {
      transform: scaleX(1);
    }
  }
`;

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.primary.main};

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ServiceTitle = styled.h3`
  color: ${props => props.theme.colors.text.secondary};
  font-size: 1.3rem;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const ServiceDescription = styled.p`
  color: ${props => props.theme.colors.text.muted};
  line-height: 1.6;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const WebIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

const CloudIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
  </svg>
);

const DesignIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 19l7-7 3 3-7 7-3-3z"/>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
    <path d="M2 2l7.586 7.586"/>
    <circle cx="11" cy="11" r="2"/>
  </svg>
);

const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 21H3V3M21 9L13 17l-4-4-6 6"/>
  </svg>
);

const Home = () => {
  const recentPosts = blogPosts.slice(0, 3);
  
  const services = [
    {
      icon: <WebIcon />,
      title: "Web Development",
      description: "Custom websites and web applications tailored to your needs",
      link: "/services/web-development"
    },
    {
      icon: <CloudIcon />,
      title: "Cloud Solutions",
      description: "Scalable and secure cloud infrastructure services",
      link: "/services/cloud-solutions"
    },
    {
      icon: <DesignIcon />,
      title: "UI/UX Design",
      description: "User-centered design that delivers exceptional experiences",
      link: "/services/uiux-design"
    },
    {
      icon: <AnalyticsIcon />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      link: "/services/data-analytics"
    }
  ];

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection>
        <HeroContent>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Spark Your Digital Dreams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We create innovative digital solutions that help businesses thrive in the modern world.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CTAButton to="/contact">Get Started</CTAButton>
          </motion.div>
        </HeroContent>
      </HeroSection>

      <Section>
        <SectionTitle>Our Services</SectionTitle>
        <ServicesPreview>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              as={Link}
              to={service.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div>
                <ServiceIcon>{service.icon}</ServiceIcon>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
              </div>
              <SecondaryButton to={service.link}>Learn More</SecondaryButton>
            </ServiceCard>
          ))}
        </ServicesPreview>
      </Section>

      <Section>
        <SectionTitle>About Us</SectionTitle>
        <AboutPreview>
          <AboutContent>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              ByteSpark is a leading digital solutions provider, dedicated to helping businesses 
              achieve their digital transformation goals. With our expert team and innovative 
              approach, we deliver cutting-edge solutions that drive growth and success.
            </motion.p>
            <motion.div>
              <SecondaryButton to="/about">Learn More</SecondaryButton>
            </motion.div>
          </AboutContent>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AboutImage src="/about-preview.jpg" alt="About ByteSpark" />
          </motion.div>
        </AboutPreview>
      </Section>

      <Section>
        <SectionTitle>Latest Blog Posts</SectionTitle>
        <BlogGrid>
          {recentPosts.map((post, index) => (
            <BlogCard
              key={post.id}
              as={Link}
              to={`/blog/${post.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <BlogImage src={post.image} alt={post.title} />
              <BlogContent>
                <h3>{post.title}</h3>
                <p>{post.description}</p>
              </BlogContent>
            </BlogCard>
          ))}
        </BlogGrid>
        <ViewAllButton to="/blog">View All Posts →</ViewAllButton>
      </Section>
    </HomeContainer>
  );
};

export default Home; 