import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';

// Define animations at the top of the file
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const floatAnimation = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 0.5;
  }
`;

const HomeContainer = styled(motion.div)`
  overflow: hidden;
  background: ${({ theme }) => theme.colors.background.main};
`;

const HeroSection = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.background.main} 0%,
    ${({ theme }) => theme.colors.background.light} 100%
  );
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  padding: 2rem;

  h1 {
    font-size: clamp(2.5rem, 8vw, 4.5rem);
    margin-bottom: 1.5rem;
    line-height: 1.2;
    color: ${({ theme }) => theme.colors.primary.main};
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 4px;
      background: ${({ theme }) => theme.colors.primary.main};
      border-radius: 2px;
    }
  }

  p {
    font-size: clamp(1.1rem, 3vw, 1.5rem);
    max-width: 800px;
    margin: 0 auto 2rem;
    color: ${({ theme }) => theme.colors.text.primary};
    opacity: 0.9;
    line-height: 1.6;
  }
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: ${({ theme }) => theme.colors.primary.main};
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};

  &:hover {
    transform: translateY(-3px);
    background: transparent;
    color: ${({ theme }) => theme.colors.primary.main};
  }
`;

const Section = styled.section`
  padding: 6rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  background: ${({ theme }) => theme.colors.background.main};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 2px;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  color: ${({ theme }) => theme.colors.primary.main};
  text-align: center;
  margin-bottom: 4rem;
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

const ServiceIcon = styled.div`
  width: 60px;
  height: 60px;
  color: ${({ theme }) => theme.colors.primary.main}80;
  transition: all 0.3s ease;
  margin-bottom: 0.5rem;

  svg {
    width: 100%;
    height: 100%;
  }
`;

const ServiceTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary.main};
  font-size: 1.5rem;
  margin-bottom: 1rem;
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
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text.primary};
  opacity: 0.8;
  line-height: 1.8;
  font-size: 1.1rem;
  margin-bottom: 1rem;
`;

const ServiceCard = styled(motion(Link))`
  background: ${({ theme }) => theme.colors.background.light};
  padding: 3rem;
  border-radius: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.primary.main}20;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary.main};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 20px 40px ${({ theme }) => theme.colors.primary.main}10;

    &::before {
      transform: scaleX(1);
    }

    ${ServiceIcon} {
      transform: scale(1.1);
      color: ${({ theme }) => theme.colors.primary.main};
    }

    ${ServiceTitle}::after {
      width: 100%;
    }
  }
`;

const ServicesPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  margin-bottom: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.primary.main};
  margin-top: auto;
  align-self: flex-start;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    color: white;
    transform: translateY(-2px);
  }
`;

const AboutPreview = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutContent = styled.div`
  p {
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.8;
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const AboutImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const BlogCard = styled(motion(Link))`
  background: ${({ theme }) => theme.colors.background.light};
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid ${({ theme }) => theme.colors.primary.main}20;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary.main};
    box-shadow: 0 10px 30px ${({ theme }) => theme.colors.primary.main}10;
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const BlogContent = styled.div`
  padding: 1.5rem;

  h3 {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: ${({ theme }) => theme.colors.text.primary};
    opacity: 0.8;
    line-height: 1.6;
  }
`;

const ViewAllButton = styled(Link)`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary.main};
  text-decoration: none;
  font-weight: 600;
  padding: 1rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary.dark};
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
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js. We create responsive, fast, and user-friendly digital experiences.",
      link: "/services/web-development"
    },
    {
      icon: <CloudIcon />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud. We help businesses optimize their cloud presence and reduce costs.",
      link: "/services/cloud-solutions"
    },
    {
      icon: <DesignIcon />,
      title: "UI/UX Design",
      description: "User-centered design solutions that focus on creating intuitive and engaging user experiences. We combine aesthetics with functionality to deliver exceptional designs.",
      link: "/services/uiux-design"
    },
    {
      icon: <AnalyticsIcon />,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with our analytics solutions. We help businesses make data-driven decisions and optimize their operations.",
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
            <CTAButton to="/contact">Get in touch</CTAButton>
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
              <ServiceIcon>{service.icon}</ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
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
              ByteSpark is a fresh and innovative digital solutions provider, specializing in creating 
              modern, responsive websites. Though we're new to the scene, our team brings together 
              expertise and creativity to deliver exceptional results. We're passionate about helping 
              businesses establish their digital presence with clean, user-friendly designs.
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
            <AboutImage src="./img/about-page.jpg" alt="About ByteSpark" />
          </motion.div>
        </AboutPreview>
      </Section>

      <Section>
        <SectionTitle>Latest Blog Posts</SectionTitle>
        <BlogGrid>
          {recentPosts.map((post, index) => (
            <BlogCard
              key={post.id}
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