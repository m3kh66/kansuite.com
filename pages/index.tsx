import * as React from 'react';
import { Logo, Subtitle, Title, Row, Column } from '../components';

const App = () => (
  <Row cover vertical>
    <Column grow={2} gutter={50}>
      <Logo />
    </Column>
    <Column grow={1} justify="center">
      <Title upperCase>Kansūite</Title>
      <Subtitle upperCase>Event-driven Serverless Platform</Subtitle>
    </Column>
  </Row>
)

export default App;