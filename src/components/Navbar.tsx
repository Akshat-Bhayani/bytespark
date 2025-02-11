import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  background: white;
  padding: 1rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: ${props => props.theme.shadows.medium};
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.colors.primary.main};
  text-decoration: none;
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileNavLinks = styled(motion.div)`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: ${props => props.theme.shadows.medium};
    gap: 1rem;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  text-decoration: none;
  color: ${props => props.$isActive ? props.theme.colors.primary.main : props.theme.colors.text.primary};
  font-weight: ${props => props.$isActive ? '600' : '400'};
  position: relative;
  transition: ${props => props.theme.transitions.default};

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.theme.colors.primary.main};
    transform: scaleX(${props => props.$isActive ? 1 : 0});
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    width: 100%;
    text-align: center;
    border-radius: ${props => props.theme.borderRadius.medium};

    &:hover {
      background: ${props => props.theme.colors.background.light};
    }

    &::after {
      display: none;
    }
  }
`;

const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1000;

  @media (max-width: 768px) {
    display: block;
  }

  div {
    width: 25px;
    height: 2px;
    background: ${props => props.theme.colors.primary.main};
    margin: 5px 0;
    transition: ${props => props.theme.transitions.default};

    &:first-child {
      transform: ${props => props.$isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
    }

    &:nth-child(2) {
      opacity: ${props => props.$isOpen ? 0 : 1};
    }

    &:last-child {
      transform: ${props => props.$isOpen ? 'rotate(-45deg) translate(7px, -7px)' : 'none'};
    }
  }
`;

const mobileNavVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.2
    }
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2
    }
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">ByteSpark</Logo>
        
        <NavLinks>
          <NavLink to="/" $isActive={isActive('/')}>Home</NavLink>
          <NavLink to="/services" $isActive={isActive('/services')}>Services</NavLink>
          <NavLink to="/about" $isActive={isActive('/about')}>About</NavLink>
          <NavLink to="/blog" $isActive={isActive('/blog')}>Blog</NavLink>
          <NavLink to="/contact" $isActive={isActive('/contact')}>Contact</NavLink>
        </NavLinks>

        <HamburgerButton 
          onClick={toggleMenu}
          $isOpen={isOpen}
          aria-label="Toggle menu"
        >
          <div />
          <div />
          <div />
        </HamburgerButton>

        <AnimatePresence>
          {isOpen && (
            <MobileNavLinks
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileNavVariants}
            >
              <NavLink to="/" $isActive={isActive('/')} onClick={closeMenu}>
                Home
              </NavLink>
              <NavLink to="/services" $isActive={isActive('/services')} onClick={closeMenu}>
                Services
              </NavLink>
              <NavLink to="/blog" $isActive={isActive('/blog')} onClick={closeMenu}>
                Blog
              </NavLink>
              <NavLink to="/about" $isActive={isActive('/about')} onClick={closeMenu}>
                About
              </NavLink>
              <NavLink to="/contact" $isActive={isActive('/contact')} onClick={closeMenu}>
                Contact
              </NavLink>
            </MobileNavLinks>
          )}
        </AnimatePresence>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 