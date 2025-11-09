import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
// Using emoji icons to avoid FontAwesome version conflicts

// Animated gradient background
const gradientAnimation = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

// Floating animation for icons
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-20px) rotate(5deg);
  }
  66% {
    transform: translateY(-10px) rotate(-3deg);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`;

const HeroContainer = styled.section`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary.main}20,
    ${props => props.theme.colors.primary.light}30,
    ${props => props.theme.colors.primary.lighter}20,
    ${props => props.theme.colors.primary.dark}25
  );
  background-size: 400% 400%;
  animation: ${gradientAnimation} 15s ease infinite;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      ellipse at center,
      transparent 0%,
      ${props => props.theme.colors.background.main}10 100%
    );
    pointer-events: none;
  }
`;

const FloatingIcon = styled(motion.div)<{ $delay?: number; $x?: string; $y?: string }>`
  position: absolute;
  color: ${props => props.theme.colors.primary.main};
  font-size: 2rem;
  opacity: 0.3;
  animation: ${floatAnimation} 6s ease-in-out infinite;
  animation-delay: ${props => props.$delay || 0}s;
  left: ${props => props.$x || '10%'};
  top: ${props => props.$y || '20%'};
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    opacity: 0.2;
  }
`;

const HeroContent = styled(motion.div)`
  text-align: center;
  max-width: 1000px;
  padding: 0 2rem;
  z-index: 2;
  position: relative;
`;

const MainHeadline = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary.main},
    ${props => props.theme.colors.primary.dark},
    ${props => props.theme.colors.primary.main}
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientAnimation} 8s ease infinite;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const SubHeadline = styled(motion.p)`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 3rem;
  font-weight: 300;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

const CTAButton = styled(motion.button)`
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary.main},
    ${props => props.theme.colors.primary.dark}
  );
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px ${props => props.theme.colors.primary.main}30;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px ${props => props.theme.colors.primary.main}40;
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
`;

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 46.5%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.text.muted};
  cursor: pointer;
  
  .scroll-text {
    font-size: 0.9rem;
    font-weight: 300;
  }
  
  .scroll-icon {
    animation: ${pulseAnimation} 2s ease-in-out infinite;
  }
`;

const ParticleContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;

const Particle = styled(motion.div)<{ $size?: number; $x?: number; $y?: number; $delay?: number }>`
  position: absolute;
  width: ${props => props.$size || 4}px;
  height: ${props => props.$size || 4}px;
  background: ${props => props.theme.colors.primary.main};
  border-radius: 50%;
  left: ${props => props.$x || 0}%;
  top: ${props => props.$y || 0}%;
  opacity: 0.6;
`;

const PortfolioHero: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const particleVariants = {
    animate: {
      y: [0, -30, 0],
      opacity: [0.6, 1, 0.6],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <HeroContainer>
      {/* Floating Tech Icons */}
      <FloatingIcon $delay={0} $x="15%" $y="20%">
        💻
      </FloatingIcon>
      <FloatingIcon $delay={1} $x="85%" $y="25%">
        🚀
      </FloatingIcon>
      <FloatingIcon $delay={2} $x="10%" $y="70%">
        ⚙️
      </FloatingIcon>
      <FloatingIcon $delay={3} $x="90%" $y="75%">
        💡
      </FloatingIcon>
      <FloatingIcon $delay={0.5} $x="20%" $y="45%">
        🔧
      </FloatingIcon>
      <FloatingIcon $delay={2.5} $x="80%" $y="50%">
        ⭐
      </FloatingIcon>

      {/* Animated Particles */}
      <ParticleContainer>
        {Array.from({ length: 15 }).map((_, i) => (
          <Particle
            key={i}
            $size={Math.random() * 6 + 2}
            $x={Math.random() * 100}
            $y={Math.random() * 100}
            $delay={Math.random() * 4}
            variants={particleVariants}
            animate="animate"
          />
        ))}
      </ParticleContainer>

      <HeroContent
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <MainHeadline variants={itemVariants}>
          Where Code Meets Creativity
        </MainHeadline>
        
        <SubHeadline variants={itemVariants}>
          We transform ideas into exceptional digital experiences. 
          Building the future, one line of code at a time.
        </SubHeadline>
        
        <motion.div variants={itemVariants}>
          <CTAButton
            onClick={scrollToContent}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Our Work
          </CTAButton>
        </motion.div>
      </HeroContent>

      <ScrollIndicator
        onClick={scrollToContent}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="scroll-text">Scroll to explore</span>
        <motion.div 
          className="scroll-icon"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ↓
        </motion.div>
      </ScrollIndicator>
    </HeroContainer>
  );
};

export default PortfolioHero;