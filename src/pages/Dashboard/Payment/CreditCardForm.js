import Card from 'react-credit-cards-2';
import 'react-credit-cards-2/es/styles-compiled.css';
import { useState } from 'react';
import styled from 'styled-components';
import Button from '../../../components/Form/Button';

export default function CreditCardForm() {
  const [form, setForm] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    if (name === 'number' && value.length > 16) {
      return;
    }
    
    if (name === 'expiry' && isNaN(Number(value))) {
      if(!value.includes('/')) {
        return;
      }
    }

    if (name === 'expiry' && value.length === 4 && value[2] !== '/') {
      setForm({ ...form, expiry: (`${value[0]}${value[1]}/${value[2]}${value[3]}`) });
      return;
    }

    if (name === 'expiry' && value.length > 4) {
      return;
    }

    if (name === 'cvc' && value.length > 3) {
      return;
    }
    
    setForm((form) => ( { ...form, [name]: value } ));
  }

  function handleInputFocus(e) {
    setForm((form) => ( { ...form, focus: e.target.name } ) );
  }
  
  function handleSubmit() {
    alert('oi');
  }
  
  return (
    <ContainerCreditCardForm>
      <h1>Pagamento</h1>
      <FormContainer>
        <CardDiv>
          <Card
            number={form.number}
            name={form.name}
            expiry={form.expiry}
            cvc={form.cvc}
            focused={form.focus}
          />
        </CardDiv>
        <CardForm onSubmit={() => handleSubmit()}>
          <InputCreditCard
            id="number"
            label="number"
            name="number"
            type="number"
            value={form.number}
            onChange={handleInputChange}
            onFocus= {handleInputFocus}
            placeholder="Card Number"
          />
          <LabelNumber for="number">E.g.: 49...,51...,36...,37...</LabelNumber>
          <InputCreditCard
            label="name"
            name="name"
            type="name"
            value={form.name}
            onChange={handleInputChange}
            onFocus= {handleInputFocus}
            placeholder="Name"
          />
          <WrapInput>
            <InputCreditCard
              width='200px'
              label="expiry"
              name="expiry"
              type="text"
              value={form.expiry}
              onChange={handleInputChange}
              onFocus= {handleInputFocus}
              placeholder="Valid Thru"
            />
            <InputCreditCard
              width="70px"
              label="cvc"
              name="cvc"
              type="number"
              value={form.cvc}
              onChange={handleInputChange}
              onFocus= {handleInputFocus}
              placeholder="CVC"
            />
          </WrapInput>
        </CardForm>
      </FormContainer>
      <ButtonDiv>
        <Button onClick={handleSubmit}>
          FINALIZAR PAGAMENTO
        </Button>
      </ButtonDiv>
    </ContainerCreditCardForm>
  );
};

const ContainerCreditCardForm = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const FormContainer = styled.div`
  display: flex;
  margin-top: 30px;

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  input[type=number] {
  -moz-appearance: textfield;
}
}
`;

const CardDiv = styled.div`
  width: fit-content;
  margin-right: 40px;
`;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputCreditCard = styled.input `
  display: flex;
  border: 2px solid gray;
  border-radius: 5px;
  height: 46px;
  width: ${({ width }) => width || '300px' };
  font-size: 18px;
  padding-left: 10px;
`;

const LabelNumber = styled.label `
  color: #929292;
`;

const WrapInput = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ButtonDiv = styled.div`
  margin-top: 40px;
  width: 300px;
`;
