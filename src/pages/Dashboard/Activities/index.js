import styled from 'styled-components';
import ActivitiesInformationForm from '../../../components/ActivitiesInformationForm';
import useTicket from '../../../hooks/api/useTicket';

export default function Activities() {
  const { ticket } = useTicket();

  function showDisplay() {
    if (!ticket || ticket.status !== 'PAID') {
      return (
        <Container>
          <StyledTypography>Escolha de atividades</StyledTypography>
          <WarningWrapper>Você precisa ter confirmado pagamento antes de fazer a escolha de atividades</WarningWrapper>
        </Container>
      );
    }

    if (!ticket.TicketType.includesHotel) {
      return (
        <Container>
          <StyledTypography>Escolha de atividades</StyledTypography>
          <WarningWrapper>
            Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
          </WarningWrapper>
        </Container>
      );
    }

    return (
      <div>
        <StyledTypography>Escolha de atividades</StyledTypography>
        <ActivitiesInformationForm />
      </div>
    );
  }

  return showDisplay();
}

const Container = styled.div`
  flex-direction: column;
`;

const StyledTypography = styled.div`
  position: relative;
  font-size: 2.125rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  line-height: 1.235;
  letter-spacing: 0.00735em;
  margin-bottom: 30px;
  padding-right: 300px;
`;

const WarningWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  justify-content: center;
  padding: 0px 230px;
  margin-top: 250px;
  text-align: center;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #8e8e8e;
`;
