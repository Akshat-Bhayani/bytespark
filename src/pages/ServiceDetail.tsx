import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { services } from '../data/services';
import { StarRating } from '../components/StarRating';
import { useNavigate } from 'react-router-dom';

const ServiceContainer = styled(motion.div)`
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const ServiceHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  background: ${props => props.theme.colors.background.gradient};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.large};
  color: ${props => props.theme.colors.text.light};

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    margin-bottom: ${props => props.theme.spacing.md};
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const PriceTag = styled.div`
  background: ${props => props.theme.colors.background.light};
  color: ${props => props.theme.colors.primary.main};
  padding: ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.medium};
  display: inline-block;
  font-size: 1.5rem;
  font-weight: bold;
  margin: ${props => props.theme.spacing.lg} 0;
  box-shadow: ${props => props.theme.shadows.medium};
`;

const FeaturesSection = styled.div`
  margin: ${props => props.theme.spacing.xl} 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: ${props => props.theme.spacing.lg};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.medium};
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  transition: ${props => props.theme.transitions.default};

  svg {
    width: 24px;
    height: 24px;
    color: ${props => props.theme.colors.primary.main};
  }
`;

const ReviewsSection = styled.div`
  margin-top: ${props => props.theme.spacing.xxl};
  background: ${props => props.theme.colors.background.light};
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.large};

  h2 {
    text-align: center;
    margin-bottom: ${props => props.theme.spacing.xl};
    color: ${props => props.theme.colors.text.secondary};
  }
`;

const ReviewCard = styled(motion.div)`
  background: white;
  padding: ${props => props.theme.spacing.xl};
  border-radius: ${props => props.theme.borderRadius.medium};
  box-shadow: ${props => props.theme.shadows.medium};
  margin-bottom: ${props => props.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing.lg};
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: ${props => props.theme.colors.text.muted};
    margin: ${props => props.theme.spacing.md} 0;
  }
`;

const CheckIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const BackButton = styled(motion.button)`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: ${props => props.theme.colors.primary.main};
  padding: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);
  const navigate = useNavigate();

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <ServiceContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <BackButton
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        ← Back
      </BackButton>

      <ServiceHeader>
        <h1>{service.title}</h1>
        <p>{service.description}</p>
        <PriceTag>
          Starting From ₹{service.price.start}
          {service.price.end && ` - ₹${service.price.end}`}
        </PriceTag>
      </ServiceHeader>

      <FeaturesSection>
        {service.features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              y: -5, 
              boxShadow: '0 8px 30px rgba(37, 99, 235, 0.15)' 
            }}
          >
            <CheckIcon />
            <span>{feature}</span>
          </FeatureCard>
        ))}
      </FeaturesSection>

      <ReviewsSection>
        <h2>Customer Reviews</h2>
        {service.reviews && service.reviews.length > 0 ? (
          service.reviews.map(review => (
            <ReviewCard
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <StarRating rating={review.rating} />
              <p>{review.comment}</p>
              <small>
                {review.author} - {new Date(review.date).toLocaleDateString()}
              </small>
            </ReviewCard>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </ReviewsSection>
    </ServiceContainer>
  );
};

export default ServiceDetail; 