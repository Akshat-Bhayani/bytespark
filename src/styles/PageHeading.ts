import styled from 'styled-components';
import { motion } from 'framer-motion';

export const PageHeading = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: ${({ theme }) => theme.colors.primary.main};
  margin: 0 auto 2rem;
  text-align: center;
  position: relative;
  display: block;
  width: fit-content;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.main}, #60A5FA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

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
`;

export const PageSubheading = styled(motion.p)`
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: ${({ theme }) => theme.colors.text.primary};
  max-width: 600px;
  margin: 0 auto 3rem;
  text-align: center;
  opacity: 0.8;
  line-height: 1.6;
`;

export const pageHeadingAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.2 }
};

export const pageSubheadingAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay: 0.4 }
};