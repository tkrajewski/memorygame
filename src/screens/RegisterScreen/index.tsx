import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import { setNickname } from '../../redux/user';
import { setModifier } from '../../redux/game';

import InnerContainer from './styled/InnerContainer';
import Container from './styled/Container';
import Button from './styled/Button';

function RegisterScreen(): JSX.Element {
  const [formData, setForm] = React.useState<any>({});
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(setNickname(formData?.nickname));
    dispatch(setModifier(formData?.size));
    
    history.push('game');
  };

  const onChange = (_: any, { name, value }: any) => {
    setForm({
      ...formData,
      [name]: value
    });
  }

  return (
    <Container
      initial={{ opacity: 0, translateX: '-20px' }}
      animate={{ opacity: 1, translateX: '0px' }}
      exit={{ opacity: 0, translateX: '-25px' }}
    >
      <InnerContainer>
        <Form onSubmit={onSubmit}>
          <Form.Field>
            <label>Nickname</label>
            <Form.Input placeholder='Nickname' name='nickname' onChange={onChange} />
          </Form.Field>
          <Form.Select label='Pick size' name='size' onChange={onChange} options={[
            { text: '2x2', value: 2 },
            { text: '4x4', value: 4 },
            { text: '6x6', value: 6 },
          ]} />
          <Button type='submit'>Submit</Button>
        </Form>
      </InnerContainer>
    </Container>
  );
}

export default RegisterScreen;
