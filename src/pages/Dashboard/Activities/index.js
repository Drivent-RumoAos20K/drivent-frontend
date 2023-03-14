import { useState } from 'react';
import styled from 'styled-components';
import FilterActivities from '../../../components/filterActivities';
import useToken from '../../../hooks/useToken';
import { StyledTypography, SubTitle } from '../Payment';

export default function Activities() {
  const [infoDay, setInfoDay] = useState(null);
  const token = useToken();
  const days = [
    { id: 1, date: new Date('2023-03-24T03:24:00') },
    { id: 2, date: new Date('2023-03-25T03:24:00') },
    { id: 3, date: new Date('2023-03-26T03:24:00') },
  ];
  return (
    <>
      <StyledTypography>Escolha de atividades</StyledTypography>
      <SubTitle>Primeiro, filtre pelo dia do evento.</SubTitle>
      <ContainerFilters>
        {days.map((day) => (
          <FilterActivities day={day} setInfoDay={setInfoDay} token={token} />
        ))}
        <FilterActivities day={'Sexta, 22/10'} setInfoDay={setInfoDay} />
        <FilterActivities day={'Sábado, 23/10'} setInfoDay={setInfoDay} />
        <FilterActivities day={'Domingo, 24/10'} setInfoDay={setInfoDay} />
      </ContainerFilters>
      <div>{infoDay}</div>
    </>
  );
}

const ContainerFilters = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
