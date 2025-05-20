import React from 'react';
import styled from 'styled-components/native';
import Menu from '../components/Menu';

export default function Home() {
  return (
    <Container>
      <Title>SENAI</Title>
      <Description>
        O SENAI é uma das principais instituições de educação profissional e inovação do Brasil, formando profissionais para a indústria do futuro.
      </Description>
    </Container>
  );
}

// Styled Components
const Container = styled.View`
  flex: 1;
  background-color: #f4f4f4;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

const Title = styled.Text`
  font-size: 42px;
  font-weight: bold;
  color: #e30613;
  margin-bottom: 16px;
`;

const Description = styled.Text`
  font-size: 16px;
  text-align: center;
  color: #333;
  line-height: 24px;
`;
