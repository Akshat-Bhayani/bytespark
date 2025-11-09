import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Glow animation for the button
const glowPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px ${props => props.theme.colors.primary.main}40,
                0 0 40px ${props => props.theme.colors.primary.main}20,
                0 0 60px ${props => props.theme.colors.primary.main}10;
  }
  50% {
    box-shadow: 0 0 30px ${props => props.theme.colors.primary.main}60,
                0 0 60px ${props => props.theme.colors.primary.main}40,
                0 0 90px ${props => props.theme.colors.primary.main}20;
  }
`;

// Background animation
const backgroundShift = keyframes`
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
`;

// Floating particles animation
const floatParticles = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
    opacity: 0.7;
  }
  33% {
    transform: translateY(-30px) rotate(120deg);
    opacity: 1;
  }
  66% {
    transform: translateY(-15px) rotate(240deg);
    opacity: 0.8;
  }
`;

const CTAContainer = styled.section`
  padding: 120px 2rem;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary.main}15,
    ${props => props.theme.colors.primary.dark}20,
    ${props => props.theme.colors.primary.lighter}10,
    ${props => props.theme.colors.primary.main}25
  );
  background-size: 400% 400%;
  animation: ${backgroundShift} 15s ease infinite;
  
  @media (max-width: 768px) {
    padding: 80px 1rem;
  }
  
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
      ${props => props.theme.colors.background.main}05 100%
    );
    pointer-events: none;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const CTATitle = styled(motion.h2)`
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1.5rem;
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
  animation: ${backgroundShift} 8s ease infinite;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const CTASubtitle = styled(motion.p)`
  font-size: 1.3rem;
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 3rem;
  font-weight: 300;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const CTAButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const PrimaryButton = styled(motion(Link))`
  background: linear-gradient(
    135deg,
    ${props => props.theme.colors.primary.main},
    ${props => props.theme.colors.primary.dark}
  );
  color: white;
  text-decoration: none;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: ${glowPulse} 3s ease-in-out infinite;
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
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
    transform: translateY(-3px) scale(1.05);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem 2.5rem;
    font-size: 1rem;
    width: 100%;
    justify-content: center;
  }
`;

const SecondaryButton = styled(motion(Link))`
  background: transparent;
  color: ${props => props.theme.colors.primary.main};
  text-decoration: none;
  padding: 1.2rem 3rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 50px;
  border: 2px solid ${props => props.theme.colors.primary.main};
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${props => props.theme.colors.primary.main};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    color: white;
    transform: translateY(-3px);
    
    &::before {
      transform: scaleX(1);
    }
  }
  
  @media (max-width: 480px) {
    padding: 1rem 2.5rem;
    font-size: 1rem;
    width: 100%;
    justify-content: center;
  }
`;

const ContactInfo = styled(motion.div)`
  margin-top: 3rem;
  padding-top: 3rem;
  border-top: 1px solid ${props => props.theme.colors.primary.lighter};
  
  @media (max-width: 768px) {
    margin-top: 2rem;
    padding-top: 2rem;
  }
`;

const ContactText = styled.p`
  color: ${props => props.theme.colors.text.secondary};
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const ContactMethods = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ContactMethod = styled(motion.a)`
  color: ${props => props.theme.colors.primary.main};
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: ${props => props.theme.colors.primary.lighter};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primary.main};
    color: white;
    transform: translateY(-2px);
  }
`;

// Floating decorative elements
const FloatingElement = styled(motion.div)<{ $delay?: number; $x?: string; $y?: string; $size?: number }>`
  position: absolute;
  width: ${props => props.$size || 20}px;
  height: ${props => props.$size || 20}px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    ${props => props.theme.colors.primary.main}60,
    ${props => props.theme.colors.primary.light}40
  );
  left: ${props => props.$x || '10%'};
  top: ${props => props.$y || '20%'};
  animation: ${floatParticles} 8s ease-in-out infinite;
  animation-delay: ${props => props.$delay || 0}s;
  opacity: 0.6;
  z-index: 1;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const PortfolioCTA: React.FC = () => {
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
    <CTAContainer>
      {/* Floating decorative elements */}
      <FloatingElement $delay={0} $x="15%" $y="20%" $size={15} />
      <FloatingElement $delay={1} $x="85%" $y="25%" $size={25} />
      <FloatingElement $delay={2} $x="10%" $y="70%" $size={20} />
      <FloatingElement $delay={3} $x="90%" $y="75%" $size={18} />
      <FloatingElement $delay={0.5} $x="25%" $y="80%" $size={12} />
      <FloatingElement $delay={2.5} $x="75%" $y="15%" $size={22} />
      <FloatingElement $delay={1.5} $x="50%" $y="10%" $size={16} />
      <FloatingElement $delay={3.5} $x="60%" $y="85%" $size={14} />

      <CTAContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CTATitle variants={itemVariants}>
            Got a project in mind?<br />
            Let's build it together.
          </CTATitle>
          
          <CTASubtitle variants={itemVariants}>
            From concept to deployment, we'll transform your vision into reality. 
            Ready to create something extraordinary?
          </CTASubtitle>
          
          <CTAButtonGroup variants={itemVariants}>
            <PrimaryButton
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project 🚀
            </PrimaryButton>
            
            <SecondaryButton
              to="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Our Services
            </SecondaryButton>
          </CTAButtonGroup>
          
          <ContactInfo variants={itemVariants}>
            <ContactText>
              Or reach out directly for a quick chat
            </ContactText>
            <ContactMethods>
              <ContactMethod 
                href="mailto:contact@bytespark.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📧 contact@bytespark.com
              </ContactMethod>
              {/* <ContactMethod 
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                📞 Schedule a Call
              </ContactMethod> */}
            </ContactMethods>
          </ContactInfo>
        </motion.div>
      </CTAContent>
    </CTAContainer>
  );
};

export default PortfolioCTA;