import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StarContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Star = styled(motion.span)<{ filled: boolean }>`
  color: ${props => props.filled ? '#FFD700' : props.theme.colors.lightText};
  font-size: 1.25rem;
  cursor: default;
  
  &::before {
    content: '★';
  }
`;

const RatingText = styled.span`
  color: ${props => props.theme.colors.text.muted};
  margin-left: ${props => props.theme.spacing.xs};
  font-size: 0.9rem;
`;

interface StarRatingProps {
  rating: number;
  maxStars?: number;
  showScore?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  maxStars = 5,
  showScore = true
}) => {
  return (
    <StarContainer>
      {[...Array(maxStars)].map((_, index) => (
        <Star
          key={index}
          filled={index < rating}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: index * 0.05 }}
        />
      ))}
      {showScore && (
        <RatingText>({rating.toFixed(1)})</RatingText>
      )}
    </StarContainer>
  );
}; 