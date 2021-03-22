import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const BannerWrapper = styled.div`
  position: relative;
  padding: 30px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1420px) {
    padding-bottom: 90px;
  }
  @media (max-width: 1024px) {
    padding-bottom: 80px;
  }
  @media (max-width: 767px) {
    padding-bottom: 55px;
    padding-top: 0;
  }
`;

export const BannerInner = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const BannerPostArea = styled.div`
  width: 40%;
  padding-top: 20px;
  position: relative;
  z-index: 2;

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

export const BannerBlurbArea = styled.div`
  background-color: #fef6e5;
  width: calc(60% + 30px);
  padding: 30px;
  padding-left: 60px;
  margin-left: -30px;
  position: relative;
  z-index: 1;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const TrendingPosts = styled.div`
  width: 375px;
  max-width: 100%;
  padding-left: 60px;
  @media (max-width: 1200px) {
    width: 335px;
    padding-left: 40px;
  }
  @media (max-width: 1024px) {
    width: 275px;
    padding-left: 30px;
  }
  @media (max-width: 767px) {
    width: 100%;
    padding-left: 0;
    display: none;
  }

  .featured_post {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Title = styled.div`
  color: ${themeGet('colors.textColor', '#121213')};
  font-size: ${themeGet('fontSizes.6', '24')}px;
  font-weight: ${themeGet('fontWeights.5', '600')};
  margin-bottom: 25px;
  @media (max-width: 1200px) {
    font-size: 20px;
    margin-top: -5px;
    margin-bottom: 20px;
  }
  @media (max-width: 1024px) {
    font-size: ${themeGet('fontSizes.5', '18')}px;
  }
`;
