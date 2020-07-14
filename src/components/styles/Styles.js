import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const Wrapper = styled.main``;

export const HeroTitleBox = styled.div`
  display: flex;
  min-height: 250px;
  line-height: 1;
  justify-content: space-around;
  flex-direction: column;
  padding: 0 1rem;
`;

export const HeroTitle = styled.h1`
  background-color: #fba100;
  color: #ffffff;
  line-height: 1;
  padding: 0.25em 0.5em;
  font-size: 3em;
  font-weight: 700;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 2em;
  }
  @media (max-width: 420px) {
    padding: 1em;
    text-align: center;
  }
`;

export const HeroSubtitle = styled.h2`
  background-color: #fba100;
  color: white;
  line-height: 1;
  padding: 0.25em;
  text-align: center;
  font-weight: 700;
  font-size: 1.5em;
  @media (max-width: 768px) {
    font-size: 1.25em;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 1rem;
`;

export const Section = styled.section`
  background-color: #ffffff;
`;

export const Flex = styled.div`
  display: flex;
`;

export const FlexWithDirection = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const leftColumn = css`
  color: #a6a6a6;
  flex: 1;
`;

export const rightColumn = css`
  padding-left: 1.25rem;
  flex: 2;
  @media (max-width: 768px) {
    padding-left: 0;
    padding-top: 4rem;
  }
`;

export const Heading = styled.h2`
  font-size: 2em !important;
  color: #fba100 !important;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h3`
  font-size: 1.75em;
  font-weight: 700;
  color: #65737d;
`;

export const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.125em;
  @media (max-width: 650px) {
    font-size: 1em;
  }
`;

export const List = styled.ul`
  margin-left: 1.25rem;
  list-style-type: circle;
`;

export const ListItem = styled.li`
  font-size: 1.125em;
  :not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

export const linkStyle = css`
  padding: 0.65rem;
  background-color: #fba100;
  color: #ffffff;
  font-size: 1.25em;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-top: 2rem;
  max-width: 250px;
  &:hover {
    background-color: #ffb42f;
    color: #ffffff;
  }
  @media (max-width: 768px) {
    margin: 2rem auto 0;
  }
`;
