import React from 'react';
import TodoList from './containers/TodoList'

import styled from 'styled-components'
import { Row, Col, Typography } from 'antd'
import { data1, data2 } from './data'

const Container = styled.div`
  max-width: 80%;
  margin: 20px auto;
`

const Title = styled.h2`
  font-size: 30px;
`

const App: React.FC = () => {
  return (
    <>
    <Container>
        <Title>Script-Studio - Zadanie rekrutacyjne</Title>
        <TodoList listAirport={data1} listItinerary={data2} />
    </Container>
  </>
  );
}

export default App;
