import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogs';

const BlogContainer = styled(motion.div)`
  padding: ${props => props.theme.spacing.xxl} ${props => props.theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const BlogHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xxl};

  h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    color: ${props => props.theme.colors.text.secondary};
    margin-bottom: ${props => props.theme.spacing.lg};
  }

  p {
    font-size: 1.2rem;
    color: ${props => props.theme.colors.text.muted};
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  margin-top: ${props => props.theme.spacing.xl};
`;

const BlogCardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

const BlogCard = styled(motion.article)`
  border-radius: ${props => props.theme.borderRadius.large};
  overflow: hidden;
  background: white;
  height: 100%;
  box-shadow: ${props => props.theme.shadows.medium};
  transition: ${props => props.theme.transitions.default};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.theme.colors.background.gradient};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.large};

    &::after {
      transform: scaleX(1);
    }

    img {
      transform: scale(1.1);
    }
  }
`;

const BlogImageWrapper = styled.div`
  position: relative;
  padding-top: 60%;
  overflow: hidden;
  background: ${props => props.theme.colors.background.light};
`;

const BlogImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const BlogContent = styled.div`
  padding: ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};

  h2 {
    color: ${props => props.theme.colors.text.secondary};
    font-size: 1.5rem;
    line-height: 1.4;
    margin-bottom: ${props => props.theme.spacing.sm};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  p {
    color: ${props => props.theme.colors.text.muted};
    line-height: 1.6;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing.xs};
  margin: ${props => props.theme.spacing.md} 0;
`;

const Tag = styled.span`
  background: ${props => props.theme.colors.background.light};
  color: ${props => props.theme.colors.primary.main};
  padding: ${props => `${props.theme.spacing.xs} ${props.theme.spacing.sm}`};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: 0.875rem;
  font-weight: 500;
  transition: ${props => props.theme.transitions.default};

  &:hover {
    background: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.text.light};
  }
`;

const BlogMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.text.muted};
  font-size: 0.875rem;
  margin-top: auto;
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.background.light};
`;

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const Blog = () => {
  return (
    <BlogContainer
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <BlogHeader>
        <motion.h1 variants={cardVariants}>Tech Blog</motion.h1>
        <motion.p variants={cardVariants}>
          Explore our latest insights, tutorials, and updates from the world of technology
        </motion.p>
      </BlogHeader>

      <BlogGrid>
        {blogPosts.map((post, index) => (
          <BlogCardLink to={`/blog/${post.id}`} key={post.id}>
            <BlogCard variants={cardVariants}>
              <BlogImageWrapper>
                <BlogImage src={post.image} alt={post.title} />
              </BlogImageWrapper>
              <BlogContent>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
                <TagsContainer>
                  {post.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </TagsContainer>
                <BlogMeta>
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </BlogMeta>
              </BlogContent>
            </BlogCard>
          </BlogCardLink>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog; 