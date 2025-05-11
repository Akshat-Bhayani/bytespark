import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled(motion.div)`
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.lg};
`;

const ContactInfo = styled(motion.div)`
  h2 {
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: ${props => props.theme.spacing.md};
    font-size: 1.8rem;
  }

  p {
    color: ${props => props.theme.colors.text.muted};
    line-height: 1.6;
    margin-bottom: ${props => props.theme.spacing.lg};
  }
`;

const InfoSection = styled(motion.div)`
  margin-top: ${props => props.theme.spacing.lg};
  padding: ${props => props.theme.spacing.md};
  background: ${props => props.theme.colors.background.light};
  border-radius: ${props => props.theme.borderRadius.medium};
  
  h3 {
    color: ${props => props.theme.colors.primary.main};
    margin-bottom: ${props => props.theme.spacing.sm};
  }
`;

const Form = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  margin-top: 100px;
`;

const Input = styled(motion.input)`
  padding: ${props => props.theme.spacing.md};
  border: 2px solid transparent;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: 1rem;
  background: ${props => props.theme.colors.background.light};
  transition: ${props => props.theme.transitions.default};

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.main};
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

const TextArea = styled(motion.textarea)`
  padding: ${props => props.theme.spacing.md};
  border: 2px solid transparent;
  border-radius: ${props => props.theme.borderRadius.medium};
  font-size: 1rem;
  min-height: 150px;
  background: ${props => props.theme.colors.background.light};
  transition: ${props => props.theme.transitions.default};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary.main};
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.text.light};
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.lg};
  border: none;
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.state.hover};
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.medium};
  }
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Contact = () => {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Subject: '',
    Message: '',
    Number: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiEndPoint = 'https://script.google.com/macros/s/AKfycbyrlWED2ew2FIQMgMjoiIGlmfN7tE1bl_78wnVD5ErL7HjGnhKLosy_-a0SkKKngzVJDg/exec';
    const formD = new FormData();
    formD.append('Name',formData.Name);
    formD.append('Email',formData.Email);
    formD.append('Subject',formData.Subject);
    formD.append('Message',formData.Message);
    formD.append('PhoneNumber',formData.Number);
    formD.append('Date',new Date().toLocaleDateString())
    setFormData({
      Name: '',
      Email: '',
      Subject: '',
      Message: '',
      Number: '',
    });
    try {
      const response = await fetch(apiEndPoint, {
        method: 'POST',
        body: formD,
      });
  
      if (!response.ok) {
        throw new Error('Failed to send message');
      }
  
      const data = await response.json();
      setFormData({
        Name: '',
        Email: '',
        Subject: '',
        Message: '',
        Number: '',
      });
      console.log('data',data);
    } catch (err) {
      console.log(err instanceof Error ? err.message : 'Something went wrong');
    } 
  }; 

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   try{
  //   }catch(error){

  //   }
  //   console.log(formData);
  // };

  return (
    <ContactContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        variants={itemVariants}
        style={{ 
          textAlign: 'center', 
          marginBottom: '2rem',
          color: '#2563eb'
        }}
      >
        Get in Touch
      </motion.h1>
      
      <ContactGrid>
      <ContactInfo style={{ marginTop: '45px' }}>
          {/* <motion.h2 variants={itemVariants}>Let's Connect</motion.h2> */}
          <motion.p variants={itemVariants}>
            Have a question or want to work together? We'd love to hear from you.
          </motion.p>
          
          <InfoSection variants={itemVariants}>
            <h3>Our Office</h3>
            <p>506, Sumeru Prime</p>
            <p>Bengaluru, Karnataka</p>
            <p>India</p>
          </InfoSection>
          
          <InfoSection variants={itemVariants}>
            <h3>Contact Info</h3>
            <p>Email: contact@bytespark.com</p>
            <p>Phone: +91 9429232528</p>
          </InfoSection>
        </ContactInfo>

        <Form 
          onSubmit={handleSubmit}
          variants={containerVariants}
          id = 'form'
        >
          <Input
            type="text"
            placeholder="Your Name"
            value={formData.Name}
            onChange={(e) => setFormData({...formData, Name: e.target.value})}
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <Input
            type="text"
            placeholder="Your Number"
            value={formData.Number}
            onChange={(e) => setFormData({...formData, Number: e.target.value})}
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.Email}
            onChange={(e) => setFormData({...formData, Email: e.target.value})}
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <Input
            type="text"
            placeholder="Subject"
            value={formData.Subject}
            onChange={(e) => setFormData({...formData, Subject: e.target.value})}
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <TextArea
            placeholder="Your Message"
            value={formData.Message}
            onChange={(e) => setFormData({...formData, Message: e.target.value})}
            required
            variants={itemVariants}
            whileFocus={{ scale: 1.02 }}
          />
          <SubmitButton
            type="submit"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </SubmitButton>
        </Form>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact; 