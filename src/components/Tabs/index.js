import React from 'react';

import {Container, TabsContainer, TabsItem, TabsText} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabsItem>
          <Icon name="person-add" size={24} color="#fff" />
          <TabsText>Indicar Amigos</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="chat-bubble-outline" size={24} color="#fff" />
          <TabsText>Cobrar</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <TabsText>Depositar</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <TabsText>Transferir</TabsText>
        </TabsItem>
        <TabsItem>
          <Icon name="lock" size={24} color="#fff" />
          <TabsText>Bloquear cartão</TabsText>
        </TabsItem>
      </TabsContainer>
    </Container>
  );
}
