import { css } from '@emotion/core';
import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const WidthWrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 0 25px;
`;

export const HeroTitleBox = styled.div`
  display: flex;
  min-height: 250px;
  line-height: 1;
  justify-content: space-around;
  flex-direction: column;
  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const HeroTitle = styled.h1`
  color: #efefef;
  font-weight: bold;
  font-size: 4.6rem;
  letter-spacing: 0rem;
  text-transform: none;
  line-height: 1.25;
`;

export const HeroSubtitle = styled.h2`
  color: #efefef;
  font-family: 'Quattrocento';
  font-weight: normal;
  font-size: 2.2rem;
  letter-spacing: 0rem;
  line-height: 1.6;
  text-transform: none;
`;

export const InnerWrapper = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 20rem 25px;
`;

export const Section = styled.section`
  background-color: #dfb860;
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
  }
`;

export const Heading = styled.h2`
  font-size: 3.8rem;
  color: #dfb860;
  margin-bottom: 1.5rem;
`;

export const Title = styled.h3`
  font-size: 3.25rem;
  color: #dfb860;
  margin-bottom: 1.75rem;
  line-height: 1;
`;

export const Paragraph = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  font-weight: normal;
  line-height: 1.65;
  letter-spacing: 0rem;
`;

export const List = styled.ul`
  margin-left: 1.25rem;
  list-style-type: circle;
`;

export const ListItem = styled.li`
  font-size: 1.8rem;
  font-family: Quattrocento, serif;
  :not(:last-of-type) {
    margin-bottom: 1rem;
  }
`;

export const linkStyle = css`
  padding: 0.65rem;
  background-color: #dfb860;
  color: #262626;
  font-size: 1.8rem;
  display: flex;
  justify-content: center;
  border: 2px solid #dfb860;
  border-radius: 8px;
  align-items: center;
  cursor: pointer;
  margin-top: 4rem;
  max-width: 250px;
  &:hover {
    color: #262626;
  }
  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    max-width: unset;
  }
`;
