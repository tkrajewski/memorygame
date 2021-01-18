import * as React from 'react';

import Card from './styled/Card';
import CardGroup from './styled/CardGroup';
import Container from './styled/Container';

function Deck(): JSX.Element {
  return (
    <Container
      initial={{ opacity: 0, translateX: '-20px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateX: '-25px' }}
    >
      <CardGroup itemsPerRow={4}>
        <Card>
          1
        </Card>
        <Card>
          2
        </Card>
        <Card>
          3
        </Card>
        <Card>

        </Card>
        <Card>

        </Card>
        <Card>

        </Card>
        <Card>

        </Card>
        <Card>

        </Card>
        <Card>

        </Card>
        <Card>

        </Card>
        <Card>

        </Card>
        <Card>

        </Card>
      </CardGroup>
    </Container>
  );
}

export default Deck;
