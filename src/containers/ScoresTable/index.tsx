import * as React from 'react';
import { Label, Table } from 'semantic-ui-react';

import Container from './styled/Container';
import InnerContainer from './styled/InnerContainer';

export type ScoresTableProps = {
  leaderboards: any;
};

function ScoresTable({ leaderboards }: ScoresTableProps): JSX.Element {
  return (
    <Container
      initial={{ opacity: 0, translateX: '-20px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateX: '-25px' }}
    >
      <InnerContainer>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Nickname</Table.HeaderCell>
              <Table.HeaderCell>Score</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {leaderboards.map((stat: any, index: number) => (
              <Table.Row key={`score-row-${index}`}>
                <Table.Cell>
                  <Label ribbon>{stat.nickname}</Label>
                </Table.Cell>
                <Table.Cell>{stat.score}</Table.Cell>
                <Table.Cell>{stat.time}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </InnerContainer>
    </Container>
  );
}

export default ScoresTable;
