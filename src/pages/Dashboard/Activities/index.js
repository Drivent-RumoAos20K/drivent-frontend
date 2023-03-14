import styled from 'styled-components';
import useTicket from '../../../hooks/api/useTicket';
import { Cont } from '../Hotel';
import ActivitiesChoose from '../../../components/ActivitiesChoose';

export default function Activities() {
  const { ticket } = useTicket();

  //mocked data for now
  const daySchedule = [
    {
      day: 'Sexta, 22/10',
      place: 'Auditório Principal',
      activities: [
        {
          title: 'Minecraft: montando o PC ideal',
          interval: '09:00 - 10:00',
          intervalValue: 1,
          vacancies: 27
        },
        {
          title: 'Lol: montando o PC ideal',
          interval: '10:00 - 11:00',
          intervalValue: 1,
          vacancies: 0
        },
        {
          title: 'Lol: montando o PC ideal',
          interval: '10:00 - 11:00',
          intervalValue: 1,
          vacancies: 0
        },
      ]
    },
    {
      day: 'Sexta, 22/10',
      place: 'Audotório Lateral',
      activities: [
        {
          title: 'Palestra x',
          interval: '09:00 - 11:00',
          intervalValue: 2,
          vacancies: 27
        }
      ]
    },
    {
      day: 'Sexta, 22/10',
      place: 'Sala de Workshop',
      activities: [
        {
          title: 'Palestra y',
          interval: '09:00 - 10:00',
          intervalValue: 1,
          vacancies: 27
        },
        {
          title: 'Palestra z',
          interval: '10:00 - 11:00',
          intervalValue: 1,
          vacancies: 0
        },
      ]
    }
  ];

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
      <Cont>
        <ActivitiesChoose daySchedule={daySchedule}/>
      </Cont>
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
