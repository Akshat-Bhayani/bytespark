import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Button = styled(motion.button)`
  background: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.text.light};
  padding: ${props => `${props.theme.spacing.sm} ${props.theme.spacing.lg}`};
  border-radius: ${props => props.theme.borderRadius.full};
  border: none;
  font-weight: 600;
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};
  box-shadow: ${props => props.theme.shadows.small};

  &:hover {
    background: ${props => props.theme.colors.state.hover};
    box-shadow: ${props => props.theme.shadows.medium};
    transform: translateY(-2px);
  }

  &:active {
    background: ${props => props.theme.colors.state.active};
    transform: translateY(0);
  }

  &:disabled {
    background: ${props => props.theme.colors.state.disabled};
    cursor: not-allowed;
    transform: none;
  }
`; 