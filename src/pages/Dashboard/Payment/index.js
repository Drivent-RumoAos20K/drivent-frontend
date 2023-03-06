import { useState } from 'react';
import styled from 'styled-components';
import PaymentCardForm from '../../../components/PaymentCardForm';
import PaymentConfirmation from '../../../components/PaymentConfirmation';
import PaymentInformationForm from '../../../components/PaymentInformationForm';
import { ContainerMain, ContainerOption } from '../../../components/PaymentInformationForm/PaymentWrapper';

export default function Payment() {
  const [firstSreenVisibility, setfirstSreenVisibility] = useState(true);
  const [ticketId, setTicketId] = useState(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const [presentialOption, setPresentialOption] = useState(false);
  const [onlineOption, setOnlineOption] = useState(false);
  const [haveHotel, setHaveHotel] = useState(false);
  const [notHaveHotel, setNotHaveHotel] = useState(false);

  function getTicketModality() {
    if (!presentialOption) {
      return (
        <>
          <h1>Online</h1>
          <h2>R$ 100</h2>
        </>
      );
    }
    if (!haveHotel) {
      return (
        <>
          <h1>Presencial + Sem Hotel</h1>
          <h2>R$ 250</h2>
        </>
      );
    }
    return (
      <>
        <h1>Presencial + Com Hotel</h1>
        <h2>R$ 600</h2>
      </>
    );
  }

  return (
    <>
      {firstSreenVisibility ? (
        <PaymentInformationForm
          setTicketId={setTicketId}
          setfirstSreenVisibility={setfirstSreenVisibility}
          presentialOption={presentialOption}
          setPresentialOption={setPresentialOption}
          onlineOption={onlineOption}
          setOnlineOption={setOnlineOption}
          haveHotel={haveHotel}
          setHaveHotel={setHaveHotel}
          notHaveHotel={notHaveHotel}
          setNotHaveHotel={setNotHaveHotel}
        />
      ) : !paymentConfirmed ? (
        <PaymentCardForm
          setPaymentConfirmed={setPaymentConfirmed}
          ticketId={ticketId}
          presentialOption={presentialOption}
          haveHotel={haveHotel}
        />
      ) : (
        <>
          <ContainerMain>
            <div>
              <h1>Ingresso e pagamento</h1>
            </div>
            <SubTitle>Ingresso escolhido</SubTitle>
            <ContainerOption width="250px" height="100px" selected={true}>
              {getTicketModality()}
            </ContainerOption>
          </ContainerMain>
          <SubTitle>Pagamento</SubTitle>
          <PaymentConfirmation />
        </>
      )}
    </>
  );
}

const SubTitle = styled.h4`
  color: #8e8e8e;
  font-size: 20px;
  margin-bottom: 20px;
`;
