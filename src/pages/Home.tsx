import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJs, 
  faPython, 
  faJava, 
  faAws, 
  faFigma, 
  faReact,
  faHtml5,
  faCss3,
  faNodeJs,
  faDocker,
  faAndroid,
  faGoogle
} from '@fortawesome/free-brands-svg-icons';

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

const carouselAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-350px * 7 - 3rem * 7)); /* Move exactly 7 cards (350px each) + 7 gaps */
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

const floatIconAnimation = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
`;

const glowAnimation = keyframes`
  0% {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.5));
  }
  100% {
    filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.3));
  }
`;

const floatBubbleAnimation = keyframes`
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-100vh) translateX(100px);
    opacity: 0;
  }
`;

const pulseCircleAnimation = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0.15;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    transform: scale(1.2);
    opacity: 0.15;
  }
`;

const rotateGradientAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const shimmerAnimation = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
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
    135deg,
    #ffffff 0%,
    #f8f9fa 50%,
    #f0f2f5 100%
  );
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, 
        rgba(255, 255, 255, 0.2) 0%,
        transparent 50%),
      radial-gradient(circle at 80% 80%, 
        rgba(255, 255, 255, 0.2) 0%,
        transparent 50%);
    animation: ${pulseAnimation} 8s ease-in-out infinite;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: 
      linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.05) 0%,
        transparent 50%,
        rgba(255, 255, 255, 0.05) 100%
      ),
      linear-gradient(
        -45deg,
        rgba(255, 255, 255, 0.05) 0%,
        transparent 50%,
        rgba(255, 255, 255, 0.05) 100%
      );
    animation: ${gradientAnimation} 15s ease infinite;
    z-index: 0;
  }
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

const CrouselSection = styled.section`
  max-width: 1500px;
  margin-top: 100px;
  position: relative;
  background: ${({ theme }) => theme.colors.background.main};
  
  &::before {
    paddin-top: 2rem;
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

const ServiceImage = styled.div`
  width: 100%;
  height: 225px;
  margin-bottom: 1rem;
  border-radius: 12px;
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
  padding: 2rem;
  border-radius: 16px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
  width: 350px;
  min-height: 150px;

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

    ${ServiceImage} {
      img {
        transform: scale(1.05);
      }

      &::after {
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    width: 280px;
    min-height: 320px;
    padding: 1.5rem;
  }
`;

const CarouselTechTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.8rem;
`;

const CarouselTechTag = styled.span`
  background: ${({ theme }) => theme.colors.primary.main}15;
  color: ${({ theme }) => theme.colors.primary.main};
  padding: 0.2rem 0.5rem;
  border-radius: 8px;
  font-size: 0.7rem;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.primary.main}30;
  transition: all 0.3s ease;

  ${ServiceCard}:hover & {
    background: ${({ theme }) => theme.colors.primary.main}25;
    border-color: ${({ theme }) => theme.colors.primary.main}60;
    transform: translateY(-1px);
  }
`;

const ServicesPreview = styled.div`
  overflow: hidden;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    z-index: 2;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
  }
  
  &::after {
    right: 0;
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  animation: ${carouselAnimation} 25s linear infinite;
  gap: 3rem;
  /* Remove fixed width - let it size naturally based on content */
  
  &:hover {
    animation-play-state: paused;
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

const TechIcon = styled.div<{ delay: number; size: number; top: number; left: number; color: string }>`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  opacity: 0.9;
  animation: ${floatIconAnimation} 6s ease-in-out infinite, ${glowAnimation} 3s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  z-index: 0;
  transition: all 0.3s ease;
  color: ${props => props.color};
  filter: drop-shadow(0 0 10px ${props => props.color}40);

  &:hover {
    opacity: 1;
    transform: scale(1.2);
    filter: drop-shadow(0 0 15px ${props => props.color}80);
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;

const AnimatedBubble = styled.div<{ size: number; left: number; delay: number; duration: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  left: ${props => props.left}%;
  bottom: -100px;
  background: ${({ theme }) => theme.colors.primary.main}20;
  border-radius: 50%;
  animation: ${floatBubbleAnimation} ${props => props.duration}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  z-index: 0;
  backdrop-filter: blur(5px);
`;

const AnimatedCircle = styled.div<{ size: number; top: number; left: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  background: ${({ theme }) => theme.colors.primary.main}15;
  border-radius: 50%;
  animation: ${pulseCircleAnimation} 8s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
  z-index: 0;
  backdrop-filter: blur(5px);
`;

const RotatingGradient = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: conic-gradient(
    from 0deg,
    ${({ theme }) => theme.colors.primary.main}15 0%,
    transparent 20%,
    ${({ theme }) => theme.colors.primary.main}15 40%,
    transparent 60%,
    ${({ theme }) => theme.colors.primary.main}15 80%,
    transparent 100%
  );
  animation: ${rotateGradientAnimation} 20s linear infinite;
  z-index: 0;
`;

const ShimmerEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    ${({ theme }) => theme.colors.primary.main}10 25%,
    ${({ theme }) => theme.colors.primary.main}15 50%,
    ${({ theme }) => theme.colors.primary.main}10 75%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: ${shimmerAnimation} 8s linear infinite;
  z-index: 0;
  pointer-events: none;
`;

const Home = () => {
  const recentPosts = blogPosts.slice(0, 3);
  
  const services = [
    {
      icon: <FontAwesomeIcon icon={faJs} />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies like React, Next.js, and Node.js. We create responsive, fast, and user-friendly digital experiences.",
      link: "/services/web-development",
      image: "/img/react.jpg",
      technologies: ["React", "Next.js", "TypeScript", "Node.js"]
    },
    {
      icon: <FontAwesomeIcon icon={faAndroid} />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android. We build feature-rich mobile apps that provide seamless user experiences across all devices.",
      link: "/services/app-development",
      image: "/img/HomePage4.jpg",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin"]
    },
    {
      icon: <FontAwesomeIcon icon={faAws} />,
      title: "Cloud Services",
      description: "Scalable cloud infrastructure and deployment solutions using AWS, Azure, and Google Cloud. We help businesses optimize their cloud presence and reduce costs.",
      link: "/services/cloud-services",
      image: "/img/cloud.jpg",
      technologies: ["AWS", "Azure", "Docker", "Kubernetes"]
    },
    {
      icon: <FontAwesomeIcon icon={faPython} />,
      title: "AI/ML Services",
      description: "Artificial Intelligence and Machine Learning solutions to automate processes, gain insights from data, and enhance user experiences with intelligent features.",
      link: "/services/ai-ml-services",
      image: "/img/typescript.jpg",
      technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI"]
    },
    {
      icon: <FontAwesomeIcon icon={faFigma} />,
      title: "UI/UX Design",
      description: "User-centered design solutions that focus on creating intuitive and engaging user experiences. We combine aesthetics with functionality to deliver exceptional designs.",
      link: "/services/uiux-design",
      image: "/img/uiux.png",
      technologies: ["Figma", "Adobe XD", "Sketch", "Framer"]
    },
    {
      icon: <FontAwesomeIcon icon={faGoogle} />,
      title: "SEO Optimisation",
      description: "Search Engine Optimization strategies to improve your website's visibility and rankings. We help drive organic traffic and increase your online presence.",
      link: "/services/seo-optimisation",
      image: "/img/HomePage2.jpg",
      technologies: ["Google Analytics", "SEMrush", "Ahrefs", "Schema.org"]
    },
    {
      icon: <FontAwesomeIcon icon={faReact} />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies including social media management, content marketing, and performance tracking to grow your business online.",
      link: "/services/digital-marketing",
      image: "/img/HomePage6.jpg",
      technologies: ["Google Ads", "HubSpot", "Mailchimp", "Hootsuite"]
    }
  ];

  return (
    <HomeContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection>
        <RotatingGradient />
        <ShimmerEffect />
        
        {/* Animated Circles */}
        <AnimatedCircle size={300} top={20} left={10} delay={0} />
        <AnimatedCircle size={200} top={60} left={80} delay={2} />
        <AnimatedCircle size={250} top={40} left={50} delay={4} />
        <AnimatedCircle size={180} top={30} left={70} delay={6} />
        
        {/* Animated Bubbles */}
        <AnimatedBubble size={100} left={10} delay={0} duration={15} />
        <AnimatedBubble size={150} left={30} delay={3} duration={18} />
        <AnimatedBubble size={80} left={50} delay={6} duration={20} />
        <AnimatedBubble size={120} left={70} delay={9} duration={17} />
        <AnimatedBubble size={90} left={90} delay={12} duration={19} />

        {/* Random but evenly distributed icons */}
        <TechIcon delay={0} size={35} top={12} left={8} color="#f7df1e">
          <FontAwesomeIcon icon={faJs} />
        </TechIcon>
        {/* <TechIcon delay={1} size={40} top={28} left={22} color="#3776ab">
          <FontAwesomeIcon icon={faPython} />
        </TechIcon> */}
        <TechIcon delay={2} size={45} top={15} left={45} color="#00599c">
          <FontAwesomeIcon icon={faHtml5} />
        </TechIcon>
        {/* <TechIcon delay={3} size={40} top={32} left={68} color="#5382a5">
          <FontAwesomeIcon icon={faJava} />
        </TechIcon> */}
        <TechIcon delay={4} size={45} top={18} left={82} color="#ff9900">
          <FontAwesomeIcon icon={faAws} />
        </TechIcon>
        <TechIcon delay={5} size={40} top={42} left={5} color="#ff6b6b">
          <FontAwesomeIcon icon={faFigma} />
        </TechIcon>
        <TechIcon delay={6} size={35} top={58} left={35} color="#61dafb">
          <FontAwesomeIcon icon={faReact} />
        </TechIcon>
        <TechIcon delay={7} size={40} top={45} left={85} color="#4caf50">
          <FontAwesomeIcon icon={faNodeJs} />
        </TechIcon>
        <TechIcon delay={8} size={35} top={88} left={10} color="#264de4">
          <FontAwesomeIcon icon={faCss3} />
        </TechIcon>
        <TechIcon delay={9} size={40} top={62} left={75} color="#2496ed">
          <FontAwesomeIcon icon={faDocker} />
        </TechIcon>
        <TechIcon delay={10} size={38} top={85} left={42} color="#f7df1e">
          <FontAwesomeIcon icon={faJs} />
        </TechIcon>
        <TechIcon delay={11} size={42} top={78} left={88} color="#3776ab">
          <FontAwesomeIcon icon={faPython} />
        </TechIcon>

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

      <CrouselSection>
        {/* <SectionTitle>Our Services</SectionTitle> */}
        <ServicesPreview>
          <CarouselTrack>
            {/* First set of services */}
            {services.map((service, index) => (
              <ServiceCard
                key={`first-${service.title}`}
                to={service.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceImage>
                  <img src={service.image} alt={service.title}/>
                </ServiceImage>
                <ServiceTitle>{service.title}</ServiceTitle>
                <CarouselTechTags>
                  {service.technologies.map((tech, techIndex) => (
                    <CarouselTechTag key={techIndex}>{tech}</CarouselTechTag>
                  ))}
                </CarouselTechTags>
              </ServiceCard>
            ))}
            {/* Duplicated set for infinite effect */}
            {services.map((service, index) => (
              <ServiceCard
                key={`second-${service.title}`}
                to={service.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <ServiceImage>
                  <img src={service.image} alt={service.title}/>
                </ServiceImage>
                <ServiceTitle>{service.title}</ServiceTitle>
                <CarouselTechTags>
                  {service.technologies.map((tech, techIndex) => (
                    <CarouselTechTag key={techIndex}>{tech}</CarouselTechTag>
                  ))}
                </CarouselTechTags>
              </ServiceCard>
            ))}
          </CarouselTrack>
        </ServicesPreview>
      </CrouselSection>

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