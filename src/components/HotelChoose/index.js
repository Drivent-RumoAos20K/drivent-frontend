import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { getTicket } from '../../services/ticketApi';
import { toast } from 'react-toastify';

export default function HotelChoose() {
  const { userData } = useContext(UserContext);
  const [paid, setPaid] = useState(false);
  useEffect(() => {
    exisTicketPaid();
  }, [paid]);

  async function exisTicketPaid() {
    const ticketPaid = await getTicket(userData.token);
    if (ticketPaid.status === 'PAID') {
      setPaid(true);
    }
  };
  return (
    <>
      {paid &&
        <div>tudo certo bro</div>
      }
      {!paid &&
        <Title>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</Title>
      }
    </>
  );
};

const Title = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;

    color: #8E8E8E;

`;
