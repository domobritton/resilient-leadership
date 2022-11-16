import React from 'react';
import styled from '@emotion/styled';
import { WidthWrapper, Flex } from './styles';

const Banner = styled.div`
  background-color: #ffffff;
  color: #14213d;
  padding: 10px 0;
`;

const Center = styled(Flex)`
  justify-content: center;
`;

const Content = styled.div`
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
`;

const Divider = styled.span`
  display: inline;

  @media (max-width: 650px) {
    display: none;
  }
`;

const Email = styled.span`
  color: #dfb860;
`;

export const Eyebrow = () => {
  return (
    <Banner>
      <WidthWrapper>
        <Center>
          <Content>
            Schedule a free 45 minute consultation<Divider> |</Divider>
            <Email>
              {' '}
              charlene <em>at</em> resilientleadership.us
            </Email>
          </Content>
        </Center>
      </WidthWrapper>
    </Banner>
  );
};

export default Eyebrow;
