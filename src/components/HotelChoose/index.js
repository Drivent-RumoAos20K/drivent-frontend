import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import UserContext from '../../contexts/UserContext';
import { getTicket } from '../../services/ticketApi';

import HotelInformationForm from '../../components/HotelsInformationForm';

export default function HotelChoose({ dataHotels }) {
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
  }
  return (
    <>
      {paid && (
        <div>
          <StyledTypography>Escolha de hotel e quarto</StyledTypography>
          <HotelInformationForm dataHotels={dataHotels} />
        </div>
      )}
      {!paid && <Title>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</Title>}
    </>
  );
}

const Title = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  text-align: center;

  color: #8e8e8e;
`;

const StyledTypography = styled.div`
  position: relative;
  font-size: 2.125rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  margin-bottom: 30px;
`;