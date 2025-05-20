import React, { useEffect } from 'react';
import styled from 'styled-components/native';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Main')
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
    </Container>
  );
}

// Estilos com styled-components
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

const Logo = styled.Image`
  width: 90%;
  height: 120px;
`;
