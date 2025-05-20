import React from "react";
import styled from "styled-components/native";
import Menu from "../components/Menu";
export default function SobreScreen() {
  return (
    <Container>
      <Title>Sobre o SENAI</Title>
      <Description>
        O SENAI (Serviço Nacional de Aprendizagem Industrial) é uma referência
        nacional em educação profissional e tecnologia para a indústria
        brasileira. Fundado em 1942, ele forma milhares de profissionais todos
        os anos, preparando-os para o mercado de trabalho com excelência.
      </Description>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #f9f9f9;
  padding: 24px;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #e30613;
  margin-bottom: 16px;
`;

const Description = styled.Text`
  font-size: 16px;
  color: #333;
  line-height: 26px;
`;
