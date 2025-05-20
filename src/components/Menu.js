import React from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

export default function Menu({ navigation }) {
  return (
    <Container>
      <MenuButton onPress={() => navigation.navigate('Início')}>
        <MenuText>Início</MenuText>
      </MenuButton>
      <MenuButton onPress={() => navigation.navigate('Sobre')}>
        <MenuText>Sobre</MenuText>
      </MenuButton>
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 12px 0;
  background-color: #e30613;
`;

const MenuButton = styled(TouchableOpacity)`
  padding: 8px 16px;
`;

const MenuText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
